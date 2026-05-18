'use strict'

// Generated from .proxy.bin recording — do not edit by hand.
// Scenario: 1.21.0_walkThenSneak_w6_s10
// Frames: 30  (ticks 3420..3449)
//
// Each entry is a PAI diff. The first entry diffs from DEFAULT_PAI in
// _helpers.js; every subsequent entry diffs from the previous tick's
// full PAI. The harness reconstructs full PAI per tick and validates.

const { makeHarness } = require('./_helpers')

const TICKS = [
  { t: 3420, position: { x: 0.5, y: 1.6200100183486938, z: -31.5 }, yaw: 133.81640625, pitch: -89.89998626708984, headYaw: 133.81640625, delta: { y: -0.07840000092983246 }, inputs: { blockBreakingDelayEnabled: true, verticalCollision: true } },
  { t: 3421 },
  { t: 3422 },
  { t: 3423 },
  { t: 3424 },
  { t: 3425 },
  { t: 3426 },
  { t: 3427 },
  { t: 3428 },
  { t: 3429 },
  { t: 3430 },
  { t: 3431 },
  { t: 3432 },
  { t: 3433 },
  { t: 3434 },
  { t: 3435 },
  { t: 3436 },
  { t: 3437 },
  { t: 3438 },
  { t: 3439 },
  { t: 3440 },
  { t: 3441 },
  { t: 3442 },
  { t: 3443 },
  { t: 3444 },
  { t: 3445 },
  { t: 3446 },
  { t: 3447 },
  { t: 3448 },
  { t: 3449 }
]

describe('physics: walkThenSneak_w6_s10', () => {
  it('matches recorded client state per tick', () => {
    const h = makeHarness({ version: "1.26.10", scenario: 'walkThenSneak_w6_s10', softFailures: true })
    h.runScenario({ name: 'walkThenSneak_w6_s10', ticks: TICKS })
  })
})
