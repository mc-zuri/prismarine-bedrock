'use strict'

// Generated from .proxy.bin recording — do not edit by hand.
// Scenario: 1.21.0_sneakBackward_20t
// Frames: 34  (ticks 1241..1274)
//
// Each entry is a PAI diff. The first entry diffs from DEFAULT_PAI in
// _helpers.js; every subsequent entry diffs from the previous tick's
// full PAI. The harness reconstructs full PAI per tick and validates.

const { makeHarness } = require('./_helpers')

const TICKS = [
  { t: 1241, position: { x: 0.5, y: 1.6200100183486938, z: -31.5 }, yaw: 90, headYaw: 90, delta: { y: -0.07840000092983246 }, inputs: { blockBreakingDelayEnabled: true, verticalCollision: true } },
  { t: 1242 },
  { t: 1243 },
  { t: 1244 },
  { t: 1245 },
  { t: 1246 },
  { t: 1247 },
  { t: 1248 },
  { t: 1249 },
  { t: 1250 },
  { t: 1251 },
  { t: 1252 },
  { t: 1253 },
  { t: 1254 },
  { t: 1255 },
  { t: 1256 },
  { t: 1257 },
  { t: 1258 },
  { t: 1259 },
  { t: 1260 },
  { t: 1261 },
  { t: 1262 },
  { t: 1263 },
  { t: 1264 },
  { t: 1265 },
  { t: 1266 },
  { t: 1267 },
  { t: 1268 },
  { t: 1269 },
  { t: 1270 },
  { t: 1271 },
  { t: 1272 },
  { t: 1273 },
  { t: 1274 }
]

describe('physics: sneakBackward_20t', () => {
  it('matches recorded client state per tick', () => {
    const h = makeHarness({ version: "1.26.10", scenario: 'sneakBackward_20t', softFailures: true })
    h.runScenario({ name: 'sneakBackward_20t', ticks: TICKS })
  })
})
