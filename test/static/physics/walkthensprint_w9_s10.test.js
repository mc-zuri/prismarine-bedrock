'use strict'

// Generated from .proxy.bin recording — do not edit by hand.
// Scenario: 1.21.0_walkThenSprint_w9_s10
// Frames: 33  (ticks 3951..3983)
//
// Each entry is a PAI diff. The first entry diffs from DEFAULT_PAI in
// _helpers.js; every subsequent entry diffs from the previous tick's
// full PAI. The harness reconstructs full PAI per tick and validates.

const { makeHarness } = require('./_helpers')

const TICKS = [
  { t: 3951, position: { x: 0.5, y: 1.6200100183486938, z: -31.5 }, yaw: 133.81640625, pitch: -89.89998626708984, headYaw: 133.81640625, delta: { y: -0.07840000092983246 }, inputs: { blockBreakingDelayEnabled: true, verticalCollision: true } },
  { t: 3952 },
  { t: 3953 },
  { t: 3954 },
  { t: 3955 },
  { t: 3956 },
  { t: 3957 },
  { t: 3958 },
  { t: 3959 },
  { t: 3960 },
  { t: 3961 },
  { t: 3962 },
  { t: 3963 },
  { t: 3964 },
  { t: 3965 },
  { t: 3966 },
  { t: 3967 },
  { t: 3968 },
  { t: 3969 },
  { t: 3970 },
  { t: 3971 },
  { t: 3972 },
  { t: 3973 },
  { t: 3974 },
  { t: 3975 },
  { t: 3976 },
  { t: 3977 },
  { t: 3978 },
  { t: 3979 },
  { t: 3980 },
  { t: 3981 },
  { t: 3982 },
  { t: 3983 }
]

describe('physics: walkThenSprint_w9_s10', () => {
  it('matches recorded client state per tick', () => {
    const h = makeHarness({ version: "1.26.10", scenario: 'walkThenSprint_w9_s10', softFailures: true })
    h.runScenario({ name: 'walkThenSprint_w9_s10', ticks: TICKS })
  })
})
