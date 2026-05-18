'use strict'

// Generated from .proxy.bin recording — do not edit by hand.
// Scenario: 1.21.0_walk_10t_stop_5t_walk_15t
// Frames: 44  (ticks 1346..1389)
//
// Each entry is a PAI diff. The first entry diffs from DEFAULT_PAI in
// _helpers.js; every subsequent entry diffs from the previous tick's
// full PAI. The harness reconstructs full PAI per tick and validates.

const { makeHarness } = require('./_helpers')

const TICKS = [
  { t: 1346, position: { x: 0.5, y: 1.6200100183486938, z: -31.5 }, yaw: 90, headYaw: 90, delta: { y: -0.07840000092983246 }, inputs: { blockBreakingDelayEnabled: true, verticalCollision: true } },
  { t: 1347 },
  { t: 1348 },
  { t: 1349 },
  { t: 1350 },
  { t: 1351 },
  { t: 1352 },
  { t: 1353 },
  { t: 1354 },
  { t: 1355 },
  { t: 1356 },
  { t: 1357 },
  { t: 1358 },
  { t: 1359 },
  { t: 1360 },
  { t: 1361 },
  { t: 1362 },
  { t: 1363 },
  { t: 1364 },
  { t: 1365 },
  { t: 1366 },
  { t: 1367 },
  { t: 1368 },
  { t: 1369 },
  { t: 1370 },
  { t: 1371 },
  { t: 1372 },
  { t: 1373 },
  { t: 1374 },
  { t: 1375 },
  { t: 1376 },
  { t: 1377 },
  { t: 1378 },
  { t: 1379 },
  { t: 1380 },
  { t: 1381 },
  { t: 1382 },
  { t: 1383 },
  { t: 1384 },
  { t: 1385 },
  { t: 1386 },
  { t: 1387 },
  { t: 1388 },
  { t: 1389 }
]

describe('physics: walk_10t_stop_5t_walk_15t', () => {
  it('matches recorded client state per tick', () => {
    const h = makeHarness({ version: "1.26.10", scenario: 'walk_10t_stop_5t_walk_15t', softFailures: true })
    h.runScenario({ name: 'walk_10t_stop_5t_walk_15t', ticks: TICKS })
  })
})
