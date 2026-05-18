'use strict'

// Generated from .proxy.bin recording — do not edit by hand.
// Scenario: 1.21.0_ground_sneak_forward
// Frames: 34  (ticks 4268..4301)
//
// Each entry is a PAI diff. The first entry diffs from DEFAULT_PAI in
// _helpers.js; every subsequent entry diffs from the previous tick's
// full PAI. The harness reconstructs full PAI per tick and validates.

const { makeHarness } = require('./_helpers')

const TICKS = [
  { t: 4268, position: { x: 0.5, y: 1.6200100183486938, z: 0.5 }, yaw: -0.000030517578125, headYaw: -0.000030517578125, delta: { y: -0.07840000092983246 }, inputs: { blockBreakingDelayEnabled: true, verticalCollision: true } },
  { t: 4269 },
  { t: 4270 },
  { t: 4271 },
  { t: 4272, yaw: 0, delta: { y: 0 }, inputs: { handledTeleport: true } },
  { t: 4273, yaw: -0.000030517578125, delta: { y: -0.07840000092983246 }, inputs: { handledTeleport: false, verticalCollision: false } },
  { t: 4274, inputs: { verticalCollision: true } },
  { t: 4275 },
  { t: 4276 },
  { t: 4277 },
  { t: 4278 },
  { t: 4279 },
  { t: 4280 },
  { t: 4281 },
  { t: 4282 },
  { t: 4283 },
  { t: 4284 },
  { t: 4285 },
  { t: 4286 },
  { t: 4287 },
  { t: 4288 },
  { t: 4289 },
  { t: 4290 },
  { t: 4291 },
  { t: 4292 },
  { t: 4293 },
  { t: 4294 },
  { t: 4295 },
  { t: 4296 },
  { t: 4297 },
  { t: 4298 },
  { t: 4299 },
  { t: 4300 },
  { t: 4301 }
]

describe('physics: ground_sneak_forward', () => {
  it('matches recorded client state per tick', () => {
    const h = makeHarness({ version: "1.26.10", scenario: 'ground_sneak_forward', softFailures: true })
    h.runScenario({ name: 'ground_sneak_forward', ticks: TICKS })
  })
})
