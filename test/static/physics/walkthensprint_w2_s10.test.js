'use strict'

// Generated from .proxy.bin recording — do not edit by hand.
// Scenario: 1.21.0_walkThenSprint_w2_s10
// Frames: 26  (ticks 3671..3696)
//
// Each entry is a PAI diff. The first entry diffs from DEFAULT_PAI in
// _helpers.js; every subsequent entry diffs from the previous tick's
// full PAI. The harness reconstructs full PAI per tick and validates.

const { makeHarness } = require('./_helpers')

const TICKS = [
  { t: 3671, position: { x: 0.5, y: 1.6200100183486938, z: -31.5 }, yaw: 133.81640625, pitch: -89.89998626708984, headYaw: 133.81640625, delta: { y: -0.07840000092983246 }, inputs: { blockBreakingDelayEnabled: true, verticalCollision: true } },
  { t: 3672 },
  { t: 3673 },
  { t: 3674 },
  { t: 3675 },
  { t: 3676 },
  { t: 3677 },
  { t: 3678 },
  { t: 3679 },
  { t: 3680 },
  { t: 3681 },
  { t: 3682 },
  { t: 3683 },
  { t: 3684 },
  { t: 3685 },
  { t: 3686 },
  { t: 3687 },
  { t: 3688 },
  { t: 3689 },
  { t: 3690 },
  { t: 3691 },
  { t: 3692 },
  { t: 3693 },
  { t: 3694 },
  { t: 3695 },
  { t: 3696 }
]

describe('physics: walkThenSprint_w2_s10', () => {
  it('matches recorded client state per tick', () => {
    const h = makeHarness({ version: "1.26.10", scenario: 'walkThenSprint_w2_s10', softFailures: true })
    h.runScenario({ name: 'walkThenSprint_w2_s10', ticks: TICKS })
  })
})
