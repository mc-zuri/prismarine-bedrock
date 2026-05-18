'use strict'

// Generated from .proxy.bin recording — do not edit by hand.
// Scenario: 1.21.0_edge_1tick_walk
// Frames: 15  (ticks 11019..11033)
//
// Each entry is a PAI diff. The first entry diffs from DEFAULT_PAI in
// _helpers.js; every subsequent entry diffs from the previous tick's
// full PAI. The harness reconstructs full PAI per tick and validates.

const { makeHarness } = require('./_helpers')

const TICKS = [
  { t: 11019, position: { x: 0.5, y: 1.6200100183486938, z: 0.5 }, yaw: -0.000030517578125, headYaw: -0.000030517578125, delta: { y: -0.07840000092983246 }, inputs: { blockBreakingDelayEnabled: true, verticalCollision: true } },
  { t: 11020 },
  { t: 11021 },
  { t: 11022 },
  { t: 11023 },
  { t: 11024 },
  { t: 11025, yaw: 0, delta: { y: 0 }, inputs: { handledTeleport: true } },
  { t: 11026, yaw: -0.000030517578125, delta: { y: -0.07840000092983246 }, inputs: { handledTeleport: false, verticalCollision: false } },
  { t: 11027, inputs: { verticalCollision: true } },
  { t: 11028 },
  { t: 11029 },
  { t: 11030 },
  { t: 11031 },
  { t: 11032 },
  { t: 11033 }
]

describe('physics: edge_1tick_walk', () => {
  it('matches recorded client state per tick', () => {
    const h = makeHarness({ version: "1.26.10", scenario: 'edge_1tick_walk', softFailures: true })
    h.runScenario({ name: 'edge_1tick_walk', ticks: TICKS })
  })
})
