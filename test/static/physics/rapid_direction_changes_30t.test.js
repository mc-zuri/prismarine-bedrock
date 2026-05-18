'use strict'

// Generated from .proxy.bin recording — do not edit by hand.
// Scenario: 1.21.0_rapid_direction_changes_30t
// Frames: 38  (ticks 1446..1483)
//
// Each entry is a PAI diff. The first entry diffs from DEFAULT_PAI in
// _helpers.js; every subsequent entry diffs from the previous tick's
// full PAI. The harness reconstructs full PAI per tick and validates.

const { makeHarness } = require('./_helpers')

const TICKS = [
  { t: 1446, position: { x: 0.5, y: 1.6200100183486938, z: -31.5 }, yaw: 90, headYaw: 90, delta: { y: -0.07840000092983246 }, inputs: { blockBreakingDelayEnabled: true, verticalCollision: true } },
  { t: 1447 },
  { t: 1448 },
  { t: 1449 },
  { t: 1450 },
  { t: 1451 },
  { t: 1452 },
  { t: 1453 },
  { t: 1454 },
  { t: 1455 },
  { t: 1456 },
  { t: 1457 },
  { t: 1458 },
  { t: 1459 },
  { t: 1460 },
  { t: 1461 },
  { t: 1462 },
  { t: 1463 },
  { t: 1464 },
  { t: 1465 },
  { t: 1466 },
  { t: 1467 },
  { t: 1468 },
  { t: 1469 },
  { t: 1470 },
  { t: 1471 },
  { t: 1472 },
  { t: 1473 },
  { t: 1474 },
  { t: 1475 },
  { t: 1476 },
  { t: 1477 },
  { t: 1478 },
  { t: 1479 },
  { t: 1480 },
  { t: 1481 },
  { t: 1482 },
  { t: 1483 }
]

describe('physics: rapid_direction_changes_30t', () => {
  it('matches recorded client state per tick', () => {
    const h = makeHarness({ version: "1.26.10", scenario: 'rapid_direction_changes_30t', softFailures: true })
    h.runScenario({ name: 'rapid_direction_changes_30t', ticks: TICKS })
  })
})
