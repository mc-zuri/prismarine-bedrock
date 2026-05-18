'use strict'

// Generated from .proxy.bin recording — do not edit by hand.
// Scenario: 1.21.0_sneak_10t_to_sprint_10t
// Frames: 34  (ticks 1595..1628)
//
// Each entry is a PAI diff. The first entry diffs from DEFAULT_PAI in
// _helpers.js; every subsequent entry diffs from the previous tick's
// full PAI. The harness reconstructs full PAI per tick and validates.

const { makeHarness } = require('./_helpers')

const TICKS = [
  { t: 1595, position: { x: 0.5, y: 1.6200100183486938, z: -31.5 }, yaw: 90, headYaw: 90, delta: { y: -0.07840000092983246 }, inputs: { blockBreakingDelayEnabled: true, verticalCollision: true } },
  { t: 1596 },
  { t: 1597 },
  { t: 1598 },
  { t: 1599 },
  { t: 1600 },
  { t: 1601 },
  { t: 1602 },
  { t: 1603 },
  { t: 1604 },
  { t: 1605 },
  { t: 1606 },
  { t: 1607 },
  { t: 1608 },
  { t: 1609 },
  { t: 1610 },
  { t: 1611 },
  { t: 1612 },
  { t: 1613 },
  { t: 1614 },
  { t: 1615 },
  { t: 1616 },
  { t: 1617 },
  { t: 1618 },
  { t: 1619 },
  { t: 1620 },
  { t: 1621 },
  { t: 1622 },
  { t: 1623 },
  { t: 1624 },
  { t: 1625 },
  { t: 1626 },
  { t: 1627 },
  { t: 1628 }
]

describe('physics: sneak_10t_to_sprint_10t', () => {
  it('matches recorded client state per tick', () => {
    const h = makeHarness({ version: "1.26.10", scenario: 'sneak_10t_to_sprint_10t', softFailures: true })
    h.runScenario({ name: 'sneak_10t_to_sprint_10t', ticks: TICKS })
  })
})
