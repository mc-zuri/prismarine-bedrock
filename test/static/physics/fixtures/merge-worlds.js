'use strict'

const fs = require('fs')
const path = require('path')

const WORLDS_DIR = path.join(__dirname, 'worlds')
const OUT_PATH = path.join(__dirname, 'world.json')

function loadFromPerScenario () {
  const files = fs.readdirSync(WORLDS_DIR).filter(f => f.endsWith('.json'))
  const cells = new Map()
  const palette = new Map()
  const palEntries = []
  const conflicts = []
  for (const f of files) {
    const j = JSON.parse(fs.readFileSync(path.join(WORLDS_DIR, f), 'utf8'))
    for (const [x, y, z, pi] of j.blocks) {
      const p = j.palette[pi]
      const pkey = p.name + '|' + p.boundingBox + '|' + JSON.stringify(p.shapes || null)
      if (!palette.has(pkey)) {
        palette.set(pkey, palEntries.length)
        palEntries.push(p)
      }
      const idx = palette.get(pkey)
      const k = x + ',' + y + ',' + z
      if (cells.has(k) && cells.get(k) !== idx) {
        conflicts.push({ k, prev: palEntries[cells.get(k)].name, next: p.name, source: f })
      }
      cells.set(k, idx)
    }
  }
  return { cells, palEntries, conflicts }
}

function loadFromExistingMerged () {
  const j = JSON.parse(fs.readFileSync(OUT_PATH, 'utf8'))
  const cells = new Map()
  if (j.fills) {
    for (const [x0, y0, z0, x1, y1, z1, pi] of j.fills) {
      for (let y = y0; y <= y1; y++) {
        for (let z = z0; z <= z1; z++) {
          for (let x = x0; x <= x1; x++) {
            cells.set(x + ',' + y + ',' + z, pi)
          }
        }
      }
    }
  } else if (j.blocks) {
    for (const [x, y, z, pi] of j.blocks) cells.set(x + ',' + y + ',' + z, pi)
  }
  return { cells, palEntries: j.palette, conflicts: [] }
}

function compressToFills (cells) {
  const used = new Set()
  const fills = []
  const keys = [...cells.keys()]
  keys.sort((a, b) => {
    const A = a.split(',').map(Number)
    const B = b.split(',').map(Number)
    return A[2] - B[2] || A[0] - B[0] || A[1] - B[1]
  })
  function cellPI (x, y, z) {
    const k = x + ',' + y + ',' + z
    if (used.has(k)) return -1
    return cells.has(k) ? cells.get(k) : -1
  }
  for (const k of keys) {
    if (used.has(k)) continue
    const [x0, y0, z0] = k.split(',').map(Number)
    const pi = cells.get(k)
    let x1 = x0, y1 = y0, z1 = z0
    while (cellPI(x1 + 1, y0, z0) === pi) x1++
    while (true) {
      let ok = true
      for (let xi = x0; xi <= x1; xi++) {
        if (cellPI(xi, y0, z1 + 1) !== pi) { ok = false; break }
      }
      if (!ok) break
      z1++
    }
    while (true) {
      let ok = true
      for (let zi = z0; zi <= z1 && ok; zi++) {
        for (let xi = x0; xi <= x1; xi++) {
          if (cellPI(xi, y1 + 1, zi) !== pi) { ok = false; break }
        }
      }
      if (!ok) break
      y1++
    }
    for (let yi = y0; yi <= y1; yi++) {
      for (let zi = z0; zi <= z1; zi++) {
        for (let xi = x0; xi <= x1; xi++) {
          used.add(xi + ',' + yi + ',' + zi)
        }
      }
    }
    fills.push([x0, y0, z0, x1, y1, z1, pi])
  }
  return fills
}

function main () {
  const src = fs.existsSync(WORLDS_DIR) ? loadFromPerScenario() : loadFromExistingMerged()
  if (src.conflicts.length) {
    console.warn('Conflicts:', src.conflicts.length, 'first 5:')
    for (const c of src.conflicts.slice(0, 5)) console.warn(c)
  }
  const fills = compressToFills(src.cells)
  const out = { palette: src.palEntries, fills }
  fs.writeFileSync(OUT_PATH, JSON.stringify(out))
  const stat = fs.statSync(OUT_PATH)
  console.log('wrote', OUT_PATH, 'palette=', src.palEntries.length, 'fills=', fills.length, 'covering', src.cells.size, 'cells, size=', (stat.size / 1024).toFixed(1) + 'KB')
}

main()
