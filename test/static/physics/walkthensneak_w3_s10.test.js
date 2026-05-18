'use strict'

// Generated from .proxy.bin recording — do not edit by hand.
// Scenario: 1.21.0_walkThenSneak_w3_s10
// Frames: 27  (ticks 3303..3329)
//
// Each entry is a PAI diff. The first entry diffs from DEFAULT_PAI in
// _helpers.js; every subsequent entry diffs from the previous tick's
// full PAI. The harness reconstructs full PAI per tick and validates.

const { makeHarness } = require('./_helpers')

const TICKS = [
  { t: 3303, position: { x: 0.5, y: 1.6200100183486938, z: -31.5 }, yaw: 133.81640625, pitch: -89.89998626708984, headYaw: 133.81640625, delta: { y: -0.07840000092983246 }, inputs: { blockBreakingDelayEnabled: true, verticalCollision: true } },
  { t: 3304 },
  { t: 3305 },
  { t: 3306 },
  { t: 3307 },
  { t: 3308 },
  { t: 3309 },
  { t: 3310 },
  { t: 3311 },
  { t: 3312 },
  { t: 3313 },
  { t: 3314 },
  { t: 3315 },
  { t: 3316 },
  { t: 3317 },
  { t: 3318 },
  { t: 3319 },
  { t: 3320 },
  { t: 3321 },
  { t: 3322 },
  { t: 3323 },
  { t: 3324 },
  { t: 3325 },
  { t: 3326 },
  { t: 3327 },
  { t: 3328 },
  { t: 3329 }
]

describe('physics: walkThenSneak_w3_s10', () => {
  it('matches recorded client state per tick', () => {
    const h = makeHarness({ version: "1.26.10", scenario: 'walkThenSneak_w3_s10', softFailures: true })
    h.runScenario({ name: 'walkThenSneak_w3_s10', ticks: TICKS })
  })
})
