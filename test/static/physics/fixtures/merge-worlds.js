'use strict'

const fs = require('fs')
const path = require('path')

const WORLDS_DIR = path.join(__dirname, 'worlds')
const OUT_PATH = path.join(__dirname, 'world.json')

function main () {
  if (!fs.existsSync(WORLDS_DIR)) {
    console.error('missing per-scenario worlds dir:', WORLDS_DIR)
    process.exit(1)
  }
  const files = fs.readdirSync(WORLDS_DIR).filter(f => f.endsWith('.json'))
  const merged = new Map()
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
      if (merged.has(k) && merged.get(k) !== idx) {
        conflicts.push({ k, prev: palEntries[merged.get(k)].name, next: p.name, source: f })
      }
      merged.set(k, idx)
    }
  }
  if (conflicts.length) {
    console.warn('Conflicts:', conflicts.length, 'first 5:')
    for (const c of conflicts.slice(0, 5)) console.warn(c)
  }
  const blocks = []
  for (const [k, pi] of merged) {
    const [x, y, z] = k.split(',').map(Number)
    blocks.push([x, y, z, pi])
  }
  blocks.sort((a, b) => a[2] - b[2] || a[0] - b[0] || a[1] - b[1])
  const out = { palette: palEntries, blocks }
  fs.writeFileSync(OUT_PATH, JSON.stringify(out))
  const stat = fs.statSync(OUT_PATH)
  console.log('wrote', OUT_PATH, 'palette=', palEntries.length, 'blocks=', blocks.length, 'size=', (stat.size / 1024).toFixed(1) + 'KB')
}

main()
