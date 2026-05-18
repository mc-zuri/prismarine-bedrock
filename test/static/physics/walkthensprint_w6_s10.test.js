'use strict'

// Generated from .proxy.bin recording — do not edit by hand.
// Scenario: 1.21.0_walkThenSprint_w6_s10
// Frames: 30  (ticks 3825..3854)
//
// Each entry is a PAI diff. The first entry diffs from DEFAULT_PAI in
// _helpers.js; every subsequent entry diffs from the previous tick's
// full PAI. The harness reconstructs full PAI per tick and validates.

const { makeHarness } = require('./_helpers')

const TICKS = [
  { t: 3825, position: { x: 0.5, y: 1.6200100183486938, z: -31.5 }, yaw: 133.81640625, pitch: -89.89998626708984, headYaw: 133.81640625, delta: { y: -0.07840000092983246 }, inputs: { blockBreakingDelayEnabled: true, verticalCollision: true } },
  { t: 3826 },
  { t: 3827 },
  { t: 3828 },
  { t: 3829 },
  { t: 3830 },
  { t: 3831 },
  { t: 3832 },
  { t: 3833 },
  { t: 3834 },
  { t: 3835 },
  { t: 3836 },
  { t: 3837 },
  { t: 3838 },
  { t: 3839 },
  { t: 3840 },
  { t: 3841 },
  { t: 3842 },
  { t: 3843 },
  { t: 3844 },
  { t: 3845 },
  { t: 3846 },
  { t: 3847 },
  { t: 3848 },
  { t: 3849 },
  { t: 3850 },
  { t: 3851 },
  { t: 3852 },
  { t: 3853 },
  { t: 3854 }
]

describe('physics: walkThenSprint_w6_s10', () => {
  it('matches recorded client state per tick', () => {
    const h = makeHarness({ version: "1.26.10", scenario: 'walkThenSprint_w6_s10', softFailures: true })
    h.runScenario({ name: 'walkThenSprint_w6_s10', ticks: TICKS })
  })
})
