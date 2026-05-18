'use strict'

// Generated from .proxy.bin recording — do not edit by hand.
// Scenario: 1.21.0_walkThenSprint_w10_s10
// Frames: 34  (ticks 3995..4028)
//
// Each entry is a PAI diff. The first entry diffs from DEFAULT_PAI in
// _helpers.js; every subsequent entry diffs from the previous tick's
// full PAI. The harness reconstructs full PAI per tick and validates.

const { makeHarness } = require('./_helpers')

const TICKS = [
  { t: 3995, position: { x: 0.5, y: 1.6200100183486938, z: -31.5 }, yaw: 133.81640625, pitch: -89.89998626708984, headYaw: 133.81640625, delta: { y: -0.07840000092983246 }, inputs: { blockBreakingDelayEnabled: true, verticalCollision: true } },
  { t: 3996 },
  { t: 3997 },
  { t: 3998 },
  { t: 3999 },
  { t: 4000 },
  { t: 4001 },
  { t: 4002 },
  { t: 4003 },
  { t: 4004 },
  { t: 4005 },
  { t: 4006 },
  { t: 4007 },
  { t: 4008 },
  { t: 4009 },
  { t: 4010 },
  { t: 4011 },
  { t: 4012 },
  { t: 4013 },
  { t: 4014 },
  { t: 4015 },
  { t: 4016 },
  { t: 4017 },
  { t: 4018 },
  { t: 4019 },
  { t: 4020 },
  { t: 4021 },
  { t: 4022 },
  { t: 4023 },
  { t: 4024 },
  { t: 4025 },
  { t: 4026 },
  { t: 4027 },
  { t: 4028 }
]

describe('physics: walkThenSprint_w10_s10', () => {
  it('matches recorded client state per tick', () => {
    const h = makeHarness({ version: "1.26.10", scenario: 'walkThenSprint_w10_s10', softFailures: true })
    h.runScenario({ name: 'walkThenSprint_w10_s10', ticks: TICKS })
  })
})
