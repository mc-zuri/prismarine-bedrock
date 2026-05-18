'use strict'

// Generated from .proxy.bin recording — do not edit by hand.
// Scenario: 1.21.0_walkThenSprint_w5_s10
// Frames: 29  (ticks 3785..3813)
//
// Each entry is a PAI diff. The first entry diffs from DEFAULT_PAI in
// _helpers.js; every subsequent entry diffs from the previous tick's
// full PAI. The harness reconstructs full PAI per tick and validates.

const { makeHarness } = require('./_helpers')

const TICKS = [
  { t: 3785, position: { x: 0.5, y: 1.6200100183486938, z: -31.5 }, yaw: 133.81640625, pitch: -89.89998626708984, headYaw: 133.81640625, delta: { y: -0.07840000092983246 }, inputs: { blockBreakingDelayEnabled: true, verticalCollision: true } },
  { t: 3786 },
  { t: 3787 },
  { t: 3788 },
  { t: 3789 },
  { t: 3790 },
  { t: 3791 },
  { t: 3792 },
  { t: 3793 },
  { t: 3794 },
  { t: 3795 },
  { t: 3796 },
  { t: 3797 },
  { t: 3798 },
  { t: 3799 },
  { t: 3800 },
  { t: 3801 },
  { t: 3802 },
  { t: 3803 },
  { t: 3804 },
  { t: 3805 },
  { t: 3806 },
  { t: 3807 },
  { t: 3808 },
  { t: 3809 },
  { t: 3810 },
  { t: 3811 },
  { t: 3812 },
  { t: 3813 }
]

describe('physics: walkThenSprint_w5_s10', () => {
  it('matches recorded client state per tick', () => {
    const h = makeHarness({ version: "1.26.10", scenario: 'walkThenSprint_w5_s10', softFailures: true })
    h.runScenario({ name: 'walkThenSprint_w5_s10', ticks: TICKS })
  })
})
