'use strict'

// Generated from .proxy.bin recording — do not edit by hand.
// Scenario: 1.21.0_sprint_10t_stop_5t_sprint_10t
// Frames: 39  (ticks 1640..1678)
//
// Each entry is a PAI diff. The first entry diffs from DEFAULT_PAI in
// _helpers.js; every subsequent entry diffs from the previous tick's
// full PAI. The harness reconstructs full PAI per tick and validates.

const { makeHarness } = require('./_helpers')

const TICKS = [
  { t: 1640, position: { x: 0.5, y: 1.6200100183486938, z: -31.5 }, yaw: 90, headYaw: 90, delta: { y: -0.07840000092983246 }, inputs: { blockBreakingDelayEnabled: true, verticalCollision: true } },
  { t: 1641 },
  { t: 1642 },
  { t: 1643 },
  { t: 1644 },
  { t: 1645 },
  { t: 1646 },
  { t: 1647 },
  { t: 1648 },
  { t: 1649 },
  { t: 1650 },
  { t: 1651 },
  { t: 1652 },
  { t: 1653 },
  { t: 1654 },
  { t: 1655 },
  { t: 1656 },
  { t: 1657 },
  { t: 1658 },
  { t: 1659 },
  { t: 1660 },
  { t: 1661 },
  { t: 1662 },
  { t: 1663 },
  { t: 1664 },
  { t: 1665 },
  { t: 1666 },
  { t: 1667 },
  { t: 1668 },
  { t: 1669 },
  { t: 1670 },
  { t: 1671 },
  { t: 1672 },
  { t: 1673 },
  { t: 1674 },
  { t: 1675 },
  { t: 1676 },
  { t: 1677 },
  { t: 1678 }
]

describe('physics: sprint_10t_stop_5t_sprint_10t', () => {
  it('matches recorded client state per tick', () => {
    const h = makeHarness({ version: "1.26.10", scenario: 'sprint_10t_stop_5t_sprint_10t', softFailures: true })
    h.runScenario({ name: 'sprint_10t_stop_5t_sprint_10t', ticks: TICKS })
  })
})
