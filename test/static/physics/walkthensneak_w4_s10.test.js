'use strict'

// Generated from .proxy.bin recording — do not edit by hand.
// Scenario: 1.21.0_walkThenSneak_w4_s10
// Frames: 28  (ticks 3341..3368)
//
// Each entry is a PAI diff. The first entry diffs from DEFAULT_PAI in
// _helpers.js; every subsequent entry diffs from the previous tick's
// full PAI. The harness reconstructs full PAI per tick and validates.

const { makeHarness } = require('./_helpers')

const TICKS = [
  { t: 3341, position: { x: 0.5, y: 1.6200100183486938, z: -31.5 }, yaw: 133.81640625, pitch: -89.89998626708984, headYaw: 133.81640625, delta: { y: -0.07840000092983246 }, inputs: { blockBreakingDelayEnabled: true, verticalCollision: true } },
  { t: 3342 },
  { t: 3343 },
  { t: 3344 },
  { t: 3345 },
  { t: 3346 },
  { t: 3347 },
  { t: 3348 },
  { t: 3349 },
  { t: 3350 },
  { t: 3351 },
  { t: 3352 },
  { t: 3353 },
  { t: 3354 },
  { t: 3355 },
  { t: 3356 },
  { t: 3357 },
  { t: 3358 },
  { t: 3359 },
  { t: 3360 },
  { t: 3361 },
  { t: 3362 },
  { t: 3363 },
  { t: 3364 },
  { t: 3365 },
  { t: 3366 },
  { t: 3367 },
  { t: 3368 }
]

describe('physics: walkThenSneak_w4_s10', () => {
  it('matches recorded client state per tick', () => {
    const h = makeHarness({ version: "1.26.10", scenario: 'walkThenSneak_w4_s10', softFailures: true })
    h.runScenario({ name: 'walkThenSneak_w4_s10', ticks: TICKS })
  })
})
