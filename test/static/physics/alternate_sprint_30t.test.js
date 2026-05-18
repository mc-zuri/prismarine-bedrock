'use strict'

// Generated from .proxy.bin recording — do not edit by hand.
// Scenario: 1.21.0_alternate_sprint_30t
// Frames: 44  (ticks 1495..1538)
//
// Each entry is a PAI diff. The first entry diffs from DEFAULT_PAI in
// _helpers.js; every subsequent entry diffs from the previous tick's
// full PAI. The harness reconstructs full PAI per tick and validates.

const { makeHarness } = require('./_helpers')

const TICKS = [
  { t: 1495, position: { x: 0.5, y: 1.6200100183486938, z: -31.5 }, yaw: 90, headYaw: 90, delta: { y: -0.07840000092983246 }, inputs: { blockBreakingDelayEnabled: true, verticalCollision: true } },
  { t: 1496 },
  { t: 1497 },
  { t: 1498 },
  { t: 1499 },
  { t: 1500 },
  { t: 1501 },
  { t: 1502 },
  { t: 1503 },
  { t: 1504 },
  { t: 1505 },
  { t: 1506 },
  { t: 1507 },
  { t: 1508 },
  { t: 1509 },
  { t: 1510 },
  { t: 1511 },
  { t: 1512 },
  { t: 1513 },
  { t: 1514 },
  { t: 1515 },
  { t: 1516 },
  { t: 1517 },
  { t: 1518 },
  { t: 1519 },
  { t: 1520 },
  { t: 1521 },
  { t: 1522 },
  { t: 1523 },
  { t: 1524 },
  { t: 1525 },
  { t: 1526 },
  { t: 1527 },
  { t: 1528 },
  { t: 1529 },
  { t: 1530 },
  { t: 1531 },
  { t: 1532 },
  { t: 1533 },
  { t: 1534 },
  { t: 1535 },
  { t: 1536 },
  { t: 1537 },
  { t: 1538 }
]

describe('physics: alternate_sprint_30t', () => {
  it('matches recorded client state per tick', () => {
    const h = makeHarness({ version: "1.26.10", scenario: 'alternate_sprint_30t', softFailures: true })
    h.runScenario({ name: 'alternate_sprint_30t', ticks: TICKS })
  })
})
