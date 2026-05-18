'use strict'

// Generated from .proxy.bin recording — do not edit by hand.
// Scenario: 1.21.0_walkForward_1t
// Frames: 15  (ticks 1745..1759)
//
// Each entry is a PAI diff. The first entry diffs from DEFAULT_PAI in
// _helpers.js; every subsequent entry diffs from the previous tick's
// full PAI. The harness reconstructs full PAI per tick and validates.

const { makeHarness } = require('./_helpers')

const TICKS = [
  { t: 1745, position: { x: 0.5, y: 1.6200100183486938, z: -31.5 }, yaw: 90, headYaw: 90, delta: { y: -0.07840000092983246 }, inputs: { blockBreakingDelayEnabled: true, verticalCollision: true } },
  { t: 1746 },
  { t: 1747 },
  { t: 1748 },
  { t: 1749 },
  { t: 1750 },
  { t: 1751 },
  { t: 1752 },
  { t: 1753 },
  { t: 1754 },
  { t: 1755 },
  { t: 1756 },
  { t: 1757 },
  { t: 1758 },
  { t: 1759 }
]

describe('physics: walkForward_1t', () => {
  it('matches recorded client state per tick', () => {
    const h = makeHarness({ version: "1.26.10", scenario: 'walkForward_1t', softFailures: true })
    h.runScenario({ name: 'walkForward_1t', ticks: TICKS })
  })
})
