'use strict'

// Generated from .proxy.bin recording — do not edit by hand.
// Scenario: 1.21.0_air_sprint_jump_momentum
// Frames: 23  (ticks 5213..5235)
//
// Each entry is a PAI diff. The first entry diffs from DEFAULT_PAI in
// _helpers.js; every subsequent entry diffs from the previous tick's
// full PAI. The harness reconstructs full PAI per tick and validates.

const { makeHarness } = require('./_helpers')

const TICKS = [
  { t: 5213, position: { x: 0.5, y: 1.6200100183486938, z: 0.5 }, yaw: -0.000030517578125, headYaw: -0.000030517578125, delta: { y: -0.07840000092983246 }, inputs: { blockBreakingDelayEnabled: true, verticalCollision: true } },
  { t: 5214 },
  { t: 5215 },
  { t: 5216 },
  { t: 5217 },
  { t: 5218 },
  { t: 5219 },
  { t: 5220, yaw: 0, delta: { y: 0 }, inputs: { handledTeleport: true } },
  { t: 5221, yaw: -0.000030517578125, delta: { y: -0.07840000092983246 }, inputs: { handledTeleport: false, verticalCollision: false } },
  { t: 5222, inputs: { verticalCollision: true } },
  { t: 5223 },
  { t: 5224 },
  { t: 5225 },
  { t: 5226 },
  { t: 5227 },
  { t: 5228 },
  { t: 5229 },
  { t: 5230 },
  { t: 5231 },
  { t: 5232 },
  { t: 5233 },
  { t: 5234 },
  { t: 5235 }
]

describe('physics: air_sprint_jump_momentum', () => {
  it('matches recorded client state per tick', () => {
    const h = makeHarness({ version: "1.26.10", scenario: 'air_sprint_jump_momentum', softFailures: true })
    h.runScenario({ name: 'air_sprint_jump_momentum', ticks: TICKS })
  })
})
