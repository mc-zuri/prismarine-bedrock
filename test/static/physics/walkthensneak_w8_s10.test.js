'use strict'

// Generated from .proxy.bin recording — do not edit by hand.
// Scenario: 1.21.0_walkThenSneak_w8_s10
// Frames: 32  (ticks 3503..3534)
//
// Each entry is a PAI diff. The first entry diffs from DEFAULT_PAI in
// _helpers.js; every subsequent entry diffs from the previous tick's
// full PAI. The harness reconstructs full PAI per tick and validates.

const { makeHarness } = require('./_helpers')

const TICKS = [
  { t: 3503, position: { x: 0.5, y: 1.6200100183486938, z: -31.5 }, yaw: 133.81640625, pitch: -89.89998626708984, headYaw: 133.81640625, delta: { y: -0.07840000092983246 }, inputs: { blockBreakingDelayEnabled: true, verticalCollision: true } },
  { t: 3504 },
  { t: 3505 },
  { t: 3506 },
  { t: 3507 },
  { t: 3508 },
  { t: 3509 },
  { t: 3510 },
  { t: 3511 },
  { t: 3512 },
  { t: 3513 },
  { t: 3514 },
  { t: 3515 },
  { t: 3516 },
  { t: 3517 },
  { t: 3518 },
  { t: 3519 },
  { t: 3520 },
  { t: 3521 },
  { t: 3522 },
  { t: 3523 },
  { t: 3524 },
  { t: 3525 },
  { t: 3526 },
  { t: 3527 },
  { t: 3528 },
  { t: 3529 },
  { t: 3530 },
  { t: 3531 },
  { t: 3532 },
  { t: 3533 },
  { t: 3534 }
]

describe('physics: walkThenSneak_w8_s10', () => {
  it('matches recorded client state per tick', () => {
    const h = makeHarness({ version: "1.26.10", scenario: 'walkThenSneak_w8_s10', softFailures: true })
    h.runScenario({ name: 'walkThenSneak_w8_s10', ticks: TICKS })
  })
})
