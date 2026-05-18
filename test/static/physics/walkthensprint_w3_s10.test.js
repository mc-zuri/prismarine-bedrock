'use strict'

// Generated from .proxy.bin recording — do not edit by hand.
// Scenario: 1.21.0_walkThenSprint_w3_s10
// Frames: 27  (ticks 3708..3734)
//
// Each entry is a PAI diff. The first entry diffs from DEFAULT_PAI in
// _helpers.js; every subsequent entry diffs from the previous tick's
// full PAI. The harness reconstructs full PAI per tick and validates.

const { makeHarness } = require('./_helpers')

const TICKS = [
  { t: 3708, position: { x: 0.5, y: 1.6200100183486938, z: -31.5 }, yaw: 133.81640625, pitch: -89.89998626708984, headYaw: 133.81640625, delta: { y: -0.07840000092983246 }, inputs: { blockBreakingDelayEnabled: true, verticalCollision: true } },
  { t: 3709 },
  { t: 3710 },
  { t: 3711 },
  { t: 3712 },
  { t: 3713 },
  { t: 3714 },
  { t: 3715 },
  { t: 3716 },
  { t: 3717 },
  { t: 3718 },
  { t: 3719 },
  { t: 3720 },
  { t: 3721 },
  { t: 3722 },
  { t: 3723 },
  { t: 3724 },
  { t: 3725 },
  { t: 3726 },
  { t: 3727 },
  { t: 3728 },
  { t: 3729 },
  { t: 3730 },
  { t: 3731 },
  { t: 3732 },
  { t: 3733 },
  { t: 3734 }
]

describe('physics: walkThenSprint_w3_s10', () => {
  it('matches recorded client state per tick', () => {
    const h = makeHarness({ version: "1.26.10", scenario: 'walkThenSprint_w3_s10', softFailures: true })
    h.runScenario({ name: 'walkThenSprint_w3_s10', ticks: TICKS })
  })
})
