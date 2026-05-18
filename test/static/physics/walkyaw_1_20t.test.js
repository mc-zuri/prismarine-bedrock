'use strict'

// Generated from .proxy.bin recording — do not edit by hand.
// Scenario: 1.21.0_walkYaw_1_20t
// Frames: 34  (ticks 3050..3083)
//
// Each entry is a PAI diff. The first entry diffs from DEFAULT_PAI in
// _helpers.js; every subsequent entry diffs from the previous tick's
// full PAI. The harness reconstructs full PAI per tick and validates.

const { makeHarness } = require('./_helpers')

const TICKS = [
  { t: 3050, position: { x: 0.5, y: 1.6200100183486938, z: -31.5 }, yaw: 133.81640625, pitch: -89.89998626708984, headYaw: 133.81640625, delta: { y: -0.07840000092983246 }, inputs: { blockBreakingDelayEnabled: true, verticalCollision: true } },
  { t: 3051 },
  { t: 3052 },
  { t: 3053 },
  { t: 3054 },
  { t: 3055 },
  { t: 3056 },
  { t: 3057 },
  { t: 3058 },
  { t: 3059 },
  { t: 3060 },
  { t: 3061 },
  { t: 3062 },
  { t: 3063 },
  { t: 3064 },
  { t: 3065 },
  { t: 3066 },
  { t: 3067 },
  { t: 3068 },
  { t: 3069 },
  { t: 3070 },
  { t: 3071 },
  { t: 3072 },
  { t: 3073 },
  { t: 3074 },
  { t: 3075 },
  { t: 3076 },
  { t: 3077 },
  { t: 3078 },
  { t: 3079 },
  { t: 3080 },
  { t: 3081 },
  { t: 3082 },
  { t: 3083 }
]

describe('physics: walkYaw_1_20t', () => {
  it('matches recorded client state per tick', () => {
    const h = makeHarness({ version: "1.26.10", scenario: 'walkYaw_1_20t', softFailures: true })
    h.runScenario({ name: 'walkYaw_1_20t', ticks: TICKS })
  })
})
