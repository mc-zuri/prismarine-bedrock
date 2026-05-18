'use strict'

// Generated from .proxy.bin recording — do not edit by hand.
// Scenario: 1.21.0_decelerate_walk_10t_wait_30t
// Frames: 49  (ticks 1286..1334)
//
// Each entry is a PAI diff. The first entry diffs from DEFAULT_PAI in
// _helpers.js; every subsequent entry diffs from the previous tick's
// full PAI. The harness reconstructs full PAI per tick and validates.

const { makeHarness } = require('./_helpers')

const TICKS = [
  { t: 1286, position: { x: 0.5, y: 1.6200100183486938, z: -31.5 }, yaw: 90, headYaw: 90, delta: { y: -0.07840000092983246 }, inputs: { blockBreakingDelayEnabled: true, verticalCollision: true } },
  { t: 1287 },
  { t: 1288 },
  { t: 1289 },
  { t: 1290 },
  { t: 1291 },
  { t: 1292 },
  { t: 1293 },
  { t: 1294 },
  { t: 1295 },
  { t: 1296 },
  { t: 1297 },
  { t: 1298 },
  { t: 1299 },
  { t: 1300 },
  { t: 1301 },
  { t: 1302 },
  { t: 1303 },
  { t: 1304 },
  { t: 1305 },
  { t: 1306 },
  { t: 1307 },
  { t: 1308 },
  { t: 1309 },
  { t: 1310 },
  { t: 1311 },
  { t: 1312 },
  { t: 1313 },
  { t: 1314 },
  { t: 1315 },
  { t: 1316 },
  { t: 1317 },
  { t: 1318 },
  { t: 1319 },
  { t: 1320 },
  { t: 1321 },
  { t: 1322 },
  { t: 1323 },
  { t: 1324 },
  { t: 1325 },
  { t: 1326 },
  { t: 1327 },
  { t: 1328 },
  { t: 1329 },
  { t: 1330 },
  { t: 1331 },
  { t: 1332 },
  { t: 1333 },
  { t: 1334 }
]

describe('physics: decelerate_walk_10t_wait_30t', () => {
  it('matches recorded client state per tick', () => {
    const h = makeHarness({ version: "1.26.10", scenario: 'decelerate_walk_10t_wait_30t', softFailures: true })
    h.runScenario({ name: 'decelerate_walk_10t_wait_30t', ticks: TICKS })
  })
})
