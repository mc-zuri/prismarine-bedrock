'use strict'

// Generated from .proxy.bin recording — do not edit by hand.
// Scenario: 1.21.0_ground_strafe_left
// Frames: 29  (ticks 4391..4419)
//
// Each entry is a PAI diff. The first entry diffs from DEFAULT_PAI in
// _helpers.js; every subsequent entry diffs from the previous tick's
// full PAI. The harness reconstructs full PAI per tick and validates.

const { makeHarness } = require('./_helpers')

const TICKS = [
  { t: 4391, position: { x: 0.5, y: 1.6200100183486938, z: 0.5 }, yaw: -0.000030517578125, headYaw: -0.000030517578125, delta: { y: -0.07840000092983246 }, inputs: { blockBreakingDelayEnabled: true, verticalCollision: true } },
  { t: 4392 },
  { t: 4393 },
  { t: 4394 },
  { t: 4395 },
  { t: 4396, yaw: 0, delta: { y: 0 }, inputs: { handledTeleport: true } },
  { t: 4397, yaw: -0.000030517578125, delta: { y: -0.07840000092983246 }, inputs: { handledTeleport: false, verticalCollision: false } },
  { t: 4398, inputs: { verticalCollision: true } },
  { t: 4399 },
  { t: 4400 },
  { t: 4401 },
  { t: 4402 },
  { t: 4403 },
  { t: 4404 },
  { t: 4405 },
  { t: 4406 },
  { t: 4407 },
  { t: 4408 },
  { t: 4409 },
  { t: 4410 },
  { t: 4411 },
  { t: 4412 },
  { t: 4413 },
  { t: 4414 },
  { t: 4415 },
  { t: 4416 },
  { t: 4417 },
  { t: 4418 },
  { t: 4419 }
]

describe('physics: ground_strafe_left', () => {
  it('matches recorded client state per tick', () => {
    const h = makeHarness({ version: "1.26.10", scenario: 'ground_strafe_left', softFailures: true })
    h.runScenario({ name: 'ground_strafe_left', ticks: TICKS })
  })
})
