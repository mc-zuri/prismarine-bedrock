'use strict'

// Generated from .proxy.bin recording — do not edit by hand.
// Scenario: 1.21.0_walk_10t_sprint_10t_walk_10t
// Frames: 44  (ticks 1690..1733)
//
// Each entry is a PAI diff. The first entry diffs from DEFAULT_PAI in
// _helpers.js; every subsequent entry diffs from the previous tick's
// full PAI. The harness reconstructs full PAI per tick and validates.

const { makeHarness } = require('./_helpers')

const TICKS = [
  { t: 1690, position: { x: 0.5, y: 1.6200100183486938, z: -31.5 }, yaw: 90, headYaw: 90, delta: { y: -0.07840000092983246 }, inputs: { blockBreakingDelayEnabled: true, verticalCollision: true } },
  { t: 1691 },
  { t: 1692 },
  { t: 1693 },
  { t: 1694 },
  { t: 1695 },
  { t: 1696 },
  { t: 1697 },
  { t: 1698 },
  { t: 1699 },
  { t: 1700 },
  { t: 1701 },
  { t: 1702 },
  { t: 1703 },
  { t: 1704 },
  { t: 1705 },
  { t: 1706 },
  { t: 1707 },
  { t: 1708 },
  { t: 1709 },
  { t: 1710 },
  { t: 1711 },
  { t: 1712 },
  { t: 1713 },
  { t: 1714 },
  { t: 1715 },
  { t: 1716 },
  { t: 1717 },
  { t: 1718 },
  { t: 1719 },
  { t: 1720 },
  { t: 1721 },
  { t: 1722 },
  { t: 1723 },
  { t: 1724 },
  { t: 1725 },
  { t: 1726 },
  { t: 1727 },
  { t: 1728 },
  { t: 1729 },
  { t: 1730 },
  { t: 1731 },
  { t: 1732 },
  { t: 1733 }
]

describe('physics: walk_10t_sprint_10t_walk_10t', () => {
  it('matches recorded client state per tick', () => {
    const h = makeHarness({ version: "1.26.10", scenario: 'walk_10t_sprint_10t_walk_10t', softFailures: true })
    h.runScenario({ name: 'walk_10t_sprint_10t_walk_10t', ticks: TICKS })
  })
})
