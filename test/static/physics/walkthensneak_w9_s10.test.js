'use strict'

// Generated from .proxy.bin recording — do not edit by hand.
// Scenario: 1.21.0_walkThenSneak_w9_s10
// Frames: 33  (ticks 3546..3578)
//
// Each entry is a PAI diff. The first entry diffs from DEFAULT_PAI in
// _helpers.js; every subsequent entry diffs from the previous tick's
// full PAI. The harness reconstructs full PAI per tick and validates.

const { makeHarness } = require('./_helpers')

const TICKS = [
  { t: 3546, position: { x: 0.5, y: 1.6200100183486938, z: -31.5 }, yaw: 133.81640625, pitch: -89.89998626708984, headYaw: 133.81640625, delta: { y: -0.07840000092983246 }, inputs: { blockBreakingDelayEnabled: true, verticalCollision: true } },
  { t: 3547 },
  { t: 3548 },
  { t: 3549 },
  { t: 3550 },
  { t: 3551 },
  { t: 3552 },
  { t: 3553 },
  { t: 3554 },
  { t: 3555 },
  { t: 3556 },
  { t: 3557 },
  { t: 3558 },
  { t: 3559 },
  { t: 3560 },
  { t: 3561 },
  { t: 3562 },
  { t: 3563 },
  { t: 3564 },
  { t: 3565 },
  { t: 3566 },
  { t: 3567 },
  { t: 3568 },
  { t: 3569 },
  { t: 3570 },
  { t: 3571 },
  { t: 3572 },
  { t: 3573 },
  { t: 3574 },
  { t: 3575 },
  { t: 3576 },
  { t: 3577 },
  { t: 3578 }
]

describe('physics: walkThenSneak_w9_s10', () => {
  it('matches recorded client state per tick', () => {
    const h = makeHarness({ version: "1.26.10", scenario: 'walkThenSneak_w9_s10', softFailures: true })
    h.runScenario({ name: 'walkThenSneak_w9_s10', ticks: TICKS })
  })
})
