'use strict'

// Generated from .proxy.bin recording — do not edit by hand.
// Scenario: 1.21.0_honey_walk
// Frames: 34  (ticks 5938..5971)
//
// Each entry is a PAI diff. The first entry diffs from DEFAULT_PAI in
// _helpers.js; every subsequent entry diffs from the previous tick's
// full PAI. The harness reconstructs full PAI per tick and validates.

const { makeHarness } = require('./_helpers')

const TICKS = [
  { t: 5938, position: { x: 0.5, y: 1.6200100183486938, z: 1088.5 }, yaw: -0.000030517578125, headYaw: -0.000030517578125, delta: { y: -0.07840000092983246 }, inputs: { blockBreakingDelayEnabled: true, verticalCollision: true } },
  { t: 5939 },
  { t: 5940 },
  { t: 5941 },
  { t: 5942 },
  { t: 5943 },
  { t: 5944, position: { z: 1100.5 }, yaw: 0, delta: { y: 0 }, inputs: { handledTeleport: true } },
  { t: 5945, yaw: -0.000030517578125, delta: { y: -0.07840000092983246 }, inputs: { handledTeleport: false, verticalCollision: false } },
  { t: 5946, inputs: { verticalCollision: true } },
  { t: 5947 },
  { t: 5948 },
  { t: 5949 },
  { t: 5950 },
  { t: 5951 },
  { t: 5952 },
  { t: 5953 },
  { t: 5954 },
  { t: 5955 },
  { t: 5956 },
  { t: 5957 },
  { t: 5958 },
  { t: 5959 },
  { t: 5960 },
  { t: 5961 },
  { t: 5962 },
  { t: 5963 },
  { t: 5964 },
  { t: 5965 },
  { t: 5966 },
  { t: 5967 },
  { t: 5968 },
  { t: 5969 },
  { t: 5970 },
  { t: 5971 }
]

describe('physics: honey_walk', () => {
  it('matches recorded client state per tick', () => {
    const h = makeHarness({ version: "1.26.10", scenario: 'honey_walk', softFailures: true })
    h.runScenario({ name: 'honey_walk', ticks: TICKS })
  })
})
