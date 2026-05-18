'use strict'

// Generated from .proxy.bin recording — do not edit by hand.
// Scenario: 1.21.0_ground_walk_backward
// Frames: 29  (ticks 4332..4360)
//
// Each entry is a PAI diff. The first entry diffs from DEFAULT_PAI in
// _helpers.js; every subsequent entry diffs from the previous tick's
// full PAI. The harness reconstructs full PAI per tick and validates.

const { makeHarness } = require('./_helpers')

const TICKS = [
  { t: 4332, position: { x: 0.5, y: 1.6200100183486938, z: 0.5 }, yaw: -0.000030517578125, headYaw: -0.000030517578125, delta: { y: -0.07840000092983246 }, inputs: { blockBreakingDelayEnabled: true, verticalCollision: true } },
  { t: 4333 },
  { t: 4334 },
  { t: 4335 },
  { t: 4336, yaw: 0, delta: { y: 0 }, inputs: { handledTeleport: true } },
  { t: 4337, yaw: -0.000030517578125, delta: { y: -0.07840000092983246 }, inputs: { handledTeleport: false, verticalCollision: false } },
  { t: 4338, inputs: { verticalCollision: true } },
  { t: 4339 },
  { t: 4340 },
  { t: 4341 },
  { t: 4342 },
  { t: 4343 },
  { t: 4344 },
  { t: 4345 },
  { t: 4346 },
  { t: 4347 },
  { t: 4348 },
  { t: 4349 },
  { t: 4350 },
  { t: 4351 },
  { t: 4352 },
  { t: 4353 },
  { t: 4354 },
  { t: 4355 },
  { t: 4356 },
  { t: 4357 },
  { t: 4358 },
  { t: 4359 },
  { t: 4360 }
]

describe('physics: ground_walk_backward', () => {
  it('matches recorded client state per tick', () => {
    const h = makeHarness({ version: "1.26.10", scenario: 'ground_walk_backward', softFailures: true })
    h.runScenario({ name: 'ground_walk_backward', ticks: TICKS })
  })
})
