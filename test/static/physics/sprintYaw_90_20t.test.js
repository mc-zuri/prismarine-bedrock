'use strict'

// Generated from .proxy.bin recording — do not edit by hand.
// Scenario: 1.21.0_sprintYaw_90_20t
// Frames: 34  (ticks 3140..3173)
//
// Each entry is a PAI diff. The first entry diffs from DEFAULT_PAI in
// _helpers.js; every subsequent entry diffs from the previous tick's
// full PAI. The harness reconstructs full PAI per tick and validates.

const { makeHarness } = require('./_helpers')

const TICKS = [
  { t: 3140, position: { x: 0.5, y: 1.6200100183486938, z: -31.5 }, yaw: 133.81640625, pitch: -89.89998626708984, headYaw: 133.81640625, delta: { y: -0.07840000092983246 }, inputs: { blockBreakingDelayEnabled: true, verticalCollision: true } },
  { t: 3141 },
  { t: 3142 },
  { t: 3143 },
  { t: 3144 },
  { t: 3145 },
  { t: 3146 },
  { t: 3147 },
  { t: 3148 },
  { t: 3149 },
  { t: 3150 },
  { t: 3151 },
  { t: 3152 },
  { t: 3153 },
  { t: 3154 },
  { t: 3155 },
  { t: 3156 },
  { t: 3157 },
  { t: 3158 },
  { t: 3159 },
  { t: 3160 },
  { t: 3161 },
  { t: 3162 },
  { t: 3163 },
  { t: 3164 },
  { t: 3165 },
  { t: 3166 },
  { t: 3167 },
  { t: 3168 },
  { t: 3169 },
  { t: 3170 },
  { t: 3171 },
  { t: 3172 },
  { t: 3173 }
]

describe('physics: sprintYaw_90_20t', () => {
  it('matches recorded client state per tick', () => {
    const h = makeHarness({ version: "1.26.10", scenario: 'sprintYaw_90_20t', softFailures: true })
    h.runScenario({ name: 'sprintYaw_90_20t', ticks: TICKS })
  })
})
