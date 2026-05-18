'use strict'

// Generated from .proxy.bin recording — do not edit by hand.
// Scenario: 1.21.0_sprint_10t_to_sneak_10t
// Frames: 34  (ticks 1550..1583)
//
// Each entry is a PAI diff. The first entry diffs from DEFAULT_PAI in
// _helpers.js; every subsequent entry diffs from the previous tick's
// full PAI. The harness reconstructs full PAI per tick and validates.

const { makeHarness } = require('./_helpers')

const TICKS = [
  { t: 1550, position: { x: 0.5, y: 1.6200100183486938, z: -31.5 }, yaw: 90, headYaw: 90, delta: { y: -0.07840000092983246 }, inputs: { blockBreakingDelayEnabled: true, verticalCollision: true } },
  { t: 1551 },
  { t: 1552 },
  { t: 1553 },
  { t: 1554 },
  { t: 1555 },
  { t: 1556 },
  { t: 1557 },
  { t: 1558 },
  { t: 1559 },
  { t: 1560 },
  { t: 1561 },
  { t: 1562 },
  { t: 1563 },
  { t: 1564 },
  { t: 1565 },
  { t: 1566 },
  { t: 1567 },
  { t: 1568 },
  { t: 1569 },
  { t: 1570 },
  { t: 1571 },
  { t: 1572 },
  { t: 1573 },
  { t: 1574 },
  { t: 1575 },
  { t: 1576 },
  { t: 1577 },
  { t: 1578 },
  { t: 1579 },
  { t: 1580 },
  { t: 1581 },
  { t: 1582 },
  { t: 1583 }
]

describe('physics: sprint_10t_to_sneak_10t', () => {
  it('matches recorded client state per tick', () => {
    const h = makeHarness({ version: "1.26.10", scenario: 'sprint_10t_to_sneak_10t', softFailures: true })
    h.runScenario({ name: 'sprint_10t_to_sneak_10t', ticks: TICKS })
  })
})
