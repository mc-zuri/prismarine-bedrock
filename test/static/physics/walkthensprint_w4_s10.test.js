'use strict'

// Generated from .proxy.bin recording — do not edit by hand.
// Scenario: 1.21.0_walkThenSprint_w4_s10
// Frames: 28  (ticks 3746..3773)
//
// Each entry is a PAI diff. The first entry diffs from DEFAULT_PAI in
// _helpers.js; every subsequent entry diffs from the previous tick's
// full PAI. The harness reconstructs full PAI per tick and validates.

const { makeHarness } = require('./_helpers')

const TICKS = [
  { t: 3746, position: { x: 0.5, y: 1.6200100183486938, z: -31.5 }, yaw: 133.81640625, pitch: -89.89998626708984, headYaw: 133.81640625, delta: { y: -0.07840000092983246 }, inputs: { blockBreakingDelayEnabled: true, verticalCollision: true } },
  { t: 3747 },
  { t: 3748 },
  { t: 3749 },
  { t: 3750 },
  { t: 3751 },
  { t: 3752 },
  { t: 3753 },
  { t: 3754 },
  { t: 3755 },
  { t: 3756 },
  { t: 3757 },
  { t: 3758 },
  { t: 3759 },
  { t: 3760 },
  { t: 3761 },
  { t: 3762 },
  { t: 3763 },
  { t: 3764 },
  { t: 3765 },
  { t: 3766 },
  { t: 3767 },
  { t: 3768 },
  { t: 3769 },
  { t: 3770 },
  { t: 3771 },
  { t: 3772 },
  { t: 3773 }
]

describe('physics: walkThenSprint_w4_s10', () => {
  it('matches recorded client state per tick', () => {
    const h = makeHarness({ version: "1.26.10", scenario: 'walkThenSprint_w4_s10', softFailures: true })
    h.runScenario({ name: 'walkThenSprint_w4_s10', ticks: TICKS })
  })
})
