'use strict'

// Generated from .proxy.bin recording — do not edit by hand.
// Scenario: 1.21.0_no_elytra_walk
// Frames: 29  (ticks 15127..15155)
//
// Each entry is a PAI diff. The first entry diffs from DEFAULT_PAI in
// _helpers.js; every subsequent entry diffs from the previous tick's
// full PAI. The harness reconstructs full PAI per tick and validates.

const { makeHarness } = require('./_helpers')

const TICKS = [
  { t: 15127, position: { x: 0.5, y: 1.6200100183486938, z: 0.5 }, yaw: -0.000030517578125, pitch: -9.99755859375, headYaw: -0.000030517578125, delta: { y: -0.07840000092983246 }, inputs: { blockBreakingDelayEnabled: true, verticalCollision: true } },
  { t: 15128 },
  { t: 15129 },
  { t: 15130 },
  { t: 15131 },
  { t: 15132, yaw: 0, pitch: 0, delta: { y: 0 }, inputs: { handledTeleport: true } },
  { t: 15133, yaw: -0.000030517578125, delta: { y: -0.07840000092983246 }, inputs: { handledTeleport: false, verticalCollision: false } },
  { t: 15134, inputs: { verticalCollision: true } },
  { t: 15135 },
  { t: 15136 },
  { t: 15137 },
  { t: 15138 },
  { t: 15139 },
  { t: 15140 },
  { t: 15141 },
  { t: 15142 },
  { t: 15143 },
  { t: 15144 },
  { t: 15145 },
  { t: 15146 },
  { t: 15147 },
  { t: 15148 },
  { t: 15149 },
  { t: 15150 },
  { t: 15151 },
  { t: 15152 },
  { t: 15153 },
  { t: 15154 },
  { t: 15155 }
]

describe('physics: no_elytra_walk', () => {
  it('matches recorded client state per tick', () => {
    const h = makeHarness({ version: "1.26.10", scenario: 'no_elytra_walk', softFailures: true })
    h.runScenario({ name: 'no_elytra_walk', ticks: TICKS })
  })
})
