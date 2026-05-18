'use strict'

// Generated from .proxy.bin recording — do not edit by hand.
// Scenario: 1.21.0_collision_wall_walk
// Frames: 38  (ticks 9358..9395)
//
// Each entry is a PAI diff. The first entry diffs from DEFAULT_PAI in
// _helpers.js; every subsequent entry diffs from the previous tick's
// full PAI. The harness reconstructs full PAI per tick and validates.

const { makeHarness } = require('./_helpers')

const TICKS = [
  { t: 9358, position: { x: 0.5, y: 1.6200100183486938, z: 1883.5 }, yaw: -0.000030517578125, headYaw: -0.000030517578125, delta: { y: -0.07840000092983246 }, inputs: { blockBreakingDelayEnabled: true, verticalCollision: true } },
  { t: 9359 },
  { t: 9360 },
  { t: 9361 },
  { t: 9362, position: { z: 1903.5 }, yaw: 0, delta: { y: 0 }, inputs: { handledTeleport: true } },
  { t: 9363, yaw: -0.000030517578125, delta: { y: -0.07840000092983246 }, inputs: { handledTeleport: false, verticalCollision: false } },
  { t: 9364, inputs: { verticalCollision: true } },
  { t: 9365 },
  { t: 9366 },
  { t: 9367 },
  { t: 9368 },
  { t: 9369 },
  { t: 9370 },
  { t: 9371 },
  { t: 9372 },
  { t: 9373 },
  { t: 9374 },
  { t: 9375 },
  { t: 9376 },
  { t: 9377 },
  { t: 9378 },
  { t: 9379 },
  { t: 9380 },
  { t: 9381 },
  { t: 9382 },
  { t: 9383 },
  { t: 9384 },
  { t: 9385 },
  { t: 9386 },
  { t: 9387 },
  { t: 9388 },
  { t: 9389 },
  { t: 9390 },
  { t: 9391 },
  { t: 9392 },
  { t: 9393 },
  { t: 9394 },
  { t: 9395 }
]

describe('physics: collision_wall_walk', () => {
  it('matches recorded client state per tick', () => {
    const h = makeHarness({ version: "1.26.10", scenario: 'collision_wall_walk', softFailures: true })
    h.runScenario({ name: 'collision_wall_walk', ticks: TICKS })
  })
})
