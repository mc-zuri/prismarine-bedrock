'use strict'

// Generated from .proxy.bin recording — do not edit by hand.
// Scenario: 1.21.0_walkThenSprint_w1_s10
// Frames: 25  (ticks 3635..3659)
//
// Each entry is a PAI diff. The first entry diffs from DEFAULT_PAI in
// _helpers.js; every subsequent entry diffs from the previous tick's
// full PAI. The harness reconstructs full PAI per tick and validates.

const { makeHarness } = require('./_helpers')

const TICKS = [
  { t: 3635, position: { x: 0.5, y: 1.6200100183486938, z: -31.5 }, yaw: 133.81640625, pitch: -89.89998626708984, headYaw: 133.81640625, delta: { y: -0.07840000092983246 }, inputs: { blockBreakingDelayEnabled: true, verticalCollision: true } },
  { t: 3636 },
  { t: 3637 },
  { t: 3638 },
  { t: 3639 },
  { t: 3640 },
  { t: 3641 },
  { t: 3642 },
  { t: 3643 },
  { t: 3644 },
  { t: 3645 },
  { t: 3646 },
  { t: 3647 },
  { t: 3648 },
  { t: 3649 },
  { t: 3650 },
  { t: 3651 },
  { t: 3652 },
  { t: 3653 },
  { t: 3654 },
  { t: 3655 },
  { t: 3656 },
  { t: 3657 },
  { t: 3658 },
  { t: 3659 }
]

describe('physics: walkThenSprint_w1_s10', () => {
  it('matches recorded client state per tick', () => {
    const h = makeHarness({ version: "1.26.10", scenario: 'walkThenSprint_w1_s10', softFailures: true })
    h.runScenario({ name: 'walkThenSprint_w1_s10', ticks: TICKS })
  })
})
