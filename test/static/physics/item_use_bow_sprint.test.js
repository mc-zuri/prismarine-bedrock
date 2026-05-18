'use strict'

// Generated from .proxy.bin recording — do not edit by hand.
// Scenario: 1.21.0_item_use_bow_sprint
// Frames: 54  (ticks 16020..16073)
//
// Each entry is a PAI diff. The first entry diffs from DEFAULT_PAI in
// _helpers.js; every subsequent entry diffs from the previous tick's
// full PAI. The harness reconstructs full PAI per tick and validates.

const { makeHarness } = require('./_helpers')

const TICKS = [
  { t: 16020, position: { x: 0.5, y: 1.6200100183486938, z: 0.5 }, yaw: -0.000030517578125, headYaw: -0.000030517578125, delta: { y: -0.07840000092983246 }, inputs: { blockBreakingDelayEnabled: true, verticalCollision: true } },
  { t: 16021 },
  { t: 16022 },
  { t: 16023 },
  { t: 16024 },
  { t: 16025 },
  { t: 16026, yaw: 0, delta: { y: 0 }, inputs: { handledTeleport: true } },
  { t: 16027, yaw: -0.000030517578125, delta: { y: -0.07840000092983246 }, inputs: { handledTeleport: false, verticalCollision: false } },
  { t: 16028, inputs: { verticalCollision: true } },
  { t: 16029 },
  { t: 16030 },
  { t: 16031 },
  { t: 16032 },
  { t: 16033 },
  { t: 16034 },
  { t: 16035 },
  { t: 16036 },
  { t: 16037 },
  { t: 16038 },
  { t: 16039 },
  { t: 16040 },
  { t: 16041 },
  { t: 16042 },
  { t: 16043 },
  { t: 16044 },
  { t: 16045 },
  { t: 16046 },
  { t: 16047 },
  { t: 16048 },
  { t: 16049 },
  { t: 16050 },
  { t: 16051 },
  { t: 16052 },
  { t: 16053 },
  { t: 16054 },
  { t: 16055 },
  { t: 16056 },
  { t: 16057 },
  { t: 16058 },
  { t: 16059 },
  { t: 16060 },
  { t: 16061 },
  { t: 16062 },
  { t: 16063 },
  { t: 16064 },
  { t: 16065 },
  { t: 16066 },
  { t: 16067 },
  { t: 16068 },
  { t: 16069 },
  { t: 16070 },
  { t: 16071 },
  { t: 16072 },
  { t: 16073 }
]

describe('physics: item_use_bow_sprint', () => {
  it('matches recorded client state per tick', () => {
    const h = makeHarness({ version: "1.26.10", scenario: 'item_use_bow_sprint', softFailures: true })
    h.runScenario({ name: 'item_use_bow_sprint', ticks: TICKS })
  })
})
