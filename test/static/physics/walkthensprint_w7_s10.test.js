'use strict'

// Generated from .proxy.bin recording — do not edit by hand.
// Scenario: 1.21.0_walkThenSprint_w7_s10
// Frames: 31  (ticks 3866..3896)
//
// Each entry is a PAI diff. The first entry diffs from DEFAULT_PAI in
// _helpers.js; every subsequent entry diffs from the previous tick's
// full PAI. The harness reconstructs full PAI per tick and validates.

const { makeHarness } = require('./_helpers')

const TICKS = [
  { t: 3866, position: { x: 0.5, y: 1.6200100183486938, z: -31.5 }, yaw: 133.81640625, pitch: -89.89998626708984, headYaw: 133.81640625, delta: { y: -0.07840000092983246 }, inputs: { blockBreakingDelayEnabled: true, verticalCollision: true } },
  { t: 3867 },
  { t: 3868 },
  { t: 3869 },
  { t: 3870 },
  { t: 3871 },
  { t: 3872 },
  { t: 3873 },
  { t: 3874 },
  { t: 3875 },
  { t: 3876 },
  { t: 3877 },
  { t: 3878 },
  { t: 3879 },
  { t: 3880 },
  { t: 3881 },
  { t: 3882 },
  { t: 3883 },
  { t: 3884 },
  { t: 3885 },
  { t: 3886 },
  { t: 3887 },
  { t: 3888 },
  { t: 3889 },
  { t: 3890 },
  { t: 3891 },
  { t: 3892 },
  { t: 3893 },
  { t: 3894 },
  { t: 3895 },
  { t: 3896 }
]

describe('physics: walkThenSprint_w7_s10', () => {
  it('matches recorded client state per tick', () => {
    const h = makeHarness({ version: "1.26.10", scenario: 'walkThenSprint_w7_s10', softFailures: true })
    h.runScenario({ name: 'walkThenSprint_w7_s10', ticks: TICKS })
  })
})
