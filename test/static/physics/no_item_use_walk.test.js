'use strict'

// Generated from .proxy.bin recording — do not edit by hand.
// Scenario: 1.21.0_no_item_use_walk
// Frames: 34  (ticks 15946..15979)
//
// Each entry is a PAI diff. The first entry diffs from DEFAULT_PAI in
// _helpers.js; every subsequent entry diffs from the previous tick's
// full PAI. The harness reconstructs full PAI per tick and validates.

const { makeHarness } = require('./_helpers')

const TICKS = [
  { t: 15946, position: { x: 0.5, y: 1.6200100183486938, z: 0.5 }, yaw: -0.000030517578125, headYaw: -0.000030517578125, delta: { y: -0.07840000092983246 }, inputs: { blockBreakingDelayEnabled: true, verticalCollision: true } },
  { t: 15947 },
  { t: 15948 },
  { t: 15949 },
  { t: 15950 },
  { t: 15951, yaw: 0, delta: { y: 0 }, inputs: { handledTeleport: true } },
  { t: 15952, yaw: -0.000030517578125, delta: { y: -0.07840000092983246 }, inputs: { handledTeleport: false, verticalCollision: false } },
  { t: 15953, inputs: { verticalCollision: true } },
  { t: 15954 },
  { t: 15955 },
  { t: 15956 },
  { t: 15957 },
  { t: 15958 },
  { t: 15959 },
  { t: 15960 },
  { t: 15961 },
  { t: 15962 },
  { t: 15963 },
  { t: 15964 },
  { t: 15965 },
  { t: 15966 },
  { t: 15967 },
  { t: 15968 },
  { t: 15969 },
  { t: 15970 },
  { t: 15971 },
  { t: 15972 },
  { t: 15973 },
  { t: 15974 },
  { t: 15975 },
  { t: 15976 },
  { t: 15977 },
  { t: 15978 },
  { t: 15979 }
]

describe('physics: no_item_use_walk', () => {
  it('matches recorded client state per tick', () => {
    const h = makeHarness({ version: "1.26.10", scenario: 'no_item_use_walk', softFailures: true })
    h.runScenario({ name: 'no_item_use_walk', ticks: TICKS })
  })
})
