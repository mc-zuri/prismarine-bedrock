'use strict'

// Generated from .proxy.bin recording — do not edit by hand.
// Scenario: 1.21.0_walkThenSprint_w8_s10
// Frames: 32  (ticks 3908..3939)
//
// Each entry is a PAI diff. The first entry diffs from DEFAULT_PAI in
// _helpers.js; every subsequent entry diffs from the previous tick's
// full PAI. The harness reconstructs full PAI per tick and validates.

const { makeHarness } = require('./_helpers')

const TICKS = [
  { t: 3908, position: { x: 0.5, y: 1.6200100183486938, z: -31.5 }, yaw: 133.81640625, pitch: -89.89998626708984, headYaw: 133.81640625, delta: { y: -0.07840000092983246 }, inputs: { blockBreakingDelayEnabled: true, verticalCollision: true } },
  { t: 3909 },
  { t: 3910 },
  { t: 3911 },
  { t: 3912 },
  { t: 3913 },
  { t: 3914 },
  { t: 3915 },
  { t: 3916 },
  { t: 3917 },
  { t: 3918 },
  { t: 3919 },
  { t: 3920 },
  { t: 3921 },
  { t: 3922 },
  { t: 3923 },
  { t: 3924 },
  { t: 3925 },
  { t: 3926 },
  { t: 3927 },
  { t: 3928 },
  { t: 3929 },
  { t: 3930 },
  { t: 3931 },
  { t: 3932 },
  { t: 3933 },
  { t: 3934 },
  { t: 3935 },
  { t: 3936 },
  { t: 3937 },
  { t: 3938 },
  { t: 3939 }
]

describe('physics: walkThenSprint_w8_s10', () => {
  it('matches recorded client state per tick', () => {
    const h = makeHarness({ version: "1.26.10", scenario: 'walkThenSprint_w8_s10', softFailures: true })
    h.runScenario({ name: 'walkThenSprint_w8_s10', ticks: TICKS })
  })
})
