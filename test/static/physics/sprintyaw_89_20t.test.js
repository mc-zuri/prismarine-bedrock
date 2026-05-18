'use strict'

// Generated from .proxy.bin recording — do not edit by hand.
// Scenario: 1.21.0_sprintYaw_89_20t
// Frames: 34  (ticks 3095..3128)
//
// Each entry is a PAI diff. The first entry diffs from DEFAULT_PAI in
// _helpers.js; every subsequent entry diffs from the previous tick's
// full PAI. The harness reconstructs full PAI per tick and validates.

const { makeHarness } = require('./_helpers')

const TICKS = [
  { t: 3095, position: { x: 0.5, y: 1.6200100183486938, z: -31.5 }, yaw: 133.81640625, pitch: -89.89998626708984, headYaw: 133.81640625, delta: { y: -0.07840000092983246 }, inputs: { blockBreakingDelayEnabled: true, verticalCollision: true } },
  { t: 3096 },
  { t: 3097 },
  { t: 3098 },
  { t: 3099 },
  { t: 3100 },
  { t: 3101 },
  { t: 3102 },
  { t: 3103 },
  { t: 3104 },
  { t: 3105 },
  { t: 3106 },
  { t: 3107 },
  { t: 3108 },
  { t: 3109 },
  { t: 3110 },
  { t: 3111 },
  { t: 3112 },
  { t: 3113 },
  { t: 3114 },
  { t: 3115 },
  { t: 3116 },
  { t: 3117 },
  { t: 3118 },
  { t: 3119 },
  { t: 3120 },
  { t: 3121 },
  { t: 3122 },
  { t: 3123 },
  { t: 3124 },
  { t: 3125 },
  { t: 3126 },
  { t: 3127 },
  { t: 3128 }
]

describe('physics: sprintYaw_89_20t', () => {
  it('matches recorded client state per tick', () => {
    const h = makeHarness({ version: "1.26.10", scenario: 'sprintYaw_89_20t', softFailures: true })
    h.runScenario({ name: 'sprintYaw_89_20t', ticks: TICKS })
  })
})
