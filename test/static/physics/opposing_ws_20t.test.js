'use strict'

// Generated from .proxy.bin recording — do not edit by hand.
// Scenario: 1.21.0_opposing_ws_20t
// Frames: 34  (ticks 1401..1434)
//
// Each entry is a PAI diff. The first entry diffs from DEFAULT_PAI in
// _helpers.js; every subsequent entry diffs from the previous tick's
// full PAI. The harness reconstructs full PAI per tick and validates.

const { makeHarness } = require('./_helpers')

const TICKS = [
  { t: 1401, position: { x: 0.5, y: 1.6200100183486938, z: -31.5 }, yaw: 90, headYaw: 90, delta: { y: -0.07840000092983246 }, inputs: { blockBreakingDelayEnabled: true, verticalCollision: true } },
  { t: 1402 },
  { t: 1403 },
  { t: 1404 },
  { t: 1405 },
  { t: 1406 },
  { t: 1407 },
  { t: 1408 },
  { t: 1409 },
  { t: 1410 },
  { t: 1411 },
  { t: 1412 },
  { t: 1413 },
  { t: 1414 },
  { t: 1415 },
  { t: 1416 },
  { t: 1417 },
  { t: 1418 },
  { t: 1419 },
  { t: 1420 },
  { t: 1421 },
  { t: 1422 },
  { t: 1423 },
  { t: 1424 },
  { t: 1425 },
  { t: 1426 },
  { t: 1427 },
  { t: 1428 },
  { t: 1429 },
  { t: 1430 },
  { t: 1431 },
  { t: 1432 },
  { t: 1433 },
  { t: 1434 }
]

describe('physics: opposing_ws_20t', () => {
  it('matches recorded client state per tick', () => {
    const h = makeHarness({ version: "1.26.10", scenario: 'opposing_ws_20t', softFailures: true })
    h.runScenario({ name: 'opposing_ws_20t', ticks: TICKS })
  })
})
