'use strict'

// Generated from .proxy.bin recording — do not edit by hand.
// Scenario: 1.21.0_soul_speed_1_sprint_sand
// Frames: 39  (ticks 13913..13951)
//
// Each entry is a PAI diff. The first entry diffs from DEFAULT_PAI in
// _helpers.js; every subsequent entry diffs from the previous tick's
// full PAI. The harness reconstructs full PAI per tick and validates.

const { makeHarness } = require('./_helpers')

const TICKS = [
  { t: 13913, position: { x: 0.5, y: 1.4950100183486938, z: 900.5 }, yaw: -0.000030517578125, headYaw: -0.000030517578125, delta: { y: -0.07840000092983246 }, inputs: { blockBreakingDelayEnabled: true, verticalCollision: true } },
  { t: 13914 },
  { t: 13915 },
  { t: 13916 },
  { t: 13917 },
  { t: 13918, position: { y: 1.6200100183486938 }, yaw: 0, delta: { y: 0 }, inputs: { handledTeleport: true } },
  { t: 13919, yaw: -0.000030517578125, delta: { y: -0.07840000092983246 }, inputs: { handledTeleport: false, verticalCollision: false } },
  { t: 13920, position: { y: 1.5416100025177002 }, delta: { y: -0.1552319973707199 } },
  { t: 13921, position: { y: 1.4950100183486938 }, delta: { y: -0.07840000092983246 }, inputs: { verticalCollision: true } },
  { t: 13922 },
  { t: 13923 },
  { t: 13924 },
  { t: 13925 },
  { t: 13926 },
  { t: 13927 },
  { t: 13928 },
  { t: 13929 },
  { t: 13930 },
  { t: 13931 },
  { t: 13932 },
  { t: 13933 },
  { t: 13934 },
  { t: 13935 },
  { t: 13936 },
  { t: 13937 },
  { t: 13938 },
  { t: 13939 },
  { t: 13940 },
  { t: 13941 },
  { t: 13942 },
  { t: 13943 },
  { t: 13944 },
  { t: 13945 },
  { t: 13946 },
  { t: 13947 },
  { t: 13948 },
  { t: 13949 },
  { t: 13950 },
  { t: 13951 }
]

describe('physics: soul_speed_1_sprint_sand', () => {
  it('matches recorded client state per tick', () => {
    const h = makeHarness({ version: "1.26.10", scenario: 'soul_speed_1_sprint_sand', softFailures: true })
    h.runScenario({ name: 'soul_speed_1_sprint_sand', ticks: TICKS })
  })
})
