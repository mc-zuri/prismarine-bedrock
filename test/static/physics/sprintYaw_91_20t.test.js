'use strict'

// Generated from .proxy.bin recording — do not edit by hand.
// Scenario: 1.21.0_sprintYaw_91_20t
// Frames: 34  (ticks 3185..3218)
//
// Each entry is a PAI diff. The first entry diffs from DEFAULT_PAI in
// _helpers.js; every subsequent entry diffs from the previous tick's
// full PAI. The harness reconstructs full PAI per tick and validates.

const { makeHarness } = require('./_helpers')

const TICKS = [
  { t: 3185, position: { x: 0.5, y: 1.6200100183486938, z: -31.5 }, yaw: 133.81640625, pitch: -89.89998626708984, headYaw: 133.81640625, delta: { y: -0.07840000092983246 }, inputs: { blockBreakingDelayEnabled: true, verticalCollision: true } },
  { t: 3186 },
  { t: 3187 },
  { t: 3188 },
  { t: 3189 },
  { t: 3190 },
  { t: 3191 },
  { t: 3192 },
  { t: 3193 },
  { t: 3194 },
  { t: 3195 },
  { t: 3196 },
  { t: 3197 },
  { t: 3198 },
  { t: 3199 },
  { t: 3200 },
  { t: 3201 },
  { t: 3202 },
  { t: 3203 },
  { t: 3204 },
  { t: 3205 },
  { t: 3206 },
  { t: 3207 },
  { t: 3208 },
  { t: 3209 },
  { t: 3210 },
  { t: 3211 },
  { t: 3212 },
  { t: 3213 },
  { t: 3214 },
  { t: 3215 },
  { t: 3216 },
  { t: 3217 },
  { t: 3218 }
]

describe('physics: sprintYaw_91_20t', () => {
  it('matches recorded client state per tick', () => {
    const h = makeHarness({ version: "1.26.10", scenario: 'sprintYaw_91_20t', softFailures: true })
    h.runScenario({ name: 'sprintYaw_91_20t', ticks: TICKS })
  })
})
