'use strict'

// Generated from .proxy.bin recording — do not edit by hand.
// Scenario: 1.21.0_soul_speed_3_walk_soil
// Frames: 39  (ticks 14348..14386)
//
// Each entry is a PAI diff. The first entry diffs from DEFAULT_PAI in
// _helpers.js; every subsequent entry diffs from the previous tick's
// full PAI. The harness reconstructs full PAI per tick and validates.

const { makeHarness } = require('./_helpers')

const TICKS = [
  { t: 14348, position: { x: 0.5, y: 1.6200100183486938, z: 988.5 }, yaw: -0.000030517578125, headYaw: -0.000030517578125, delta: { y: -0.07840000092983246 }, inputs: { blockBreakingDelayEnabled: true, verticalCollision: true } },
  { t: 14349 },
  { t: 14350 },
  { t: 14351 },
  { t: 14352 },
  { t: 14353 },
  { t: 14354 },
  { t: 14355 },
  { t: 14356 },
  { t: 14357 },
  { t: 14358 },
  { t: 14359 },
  { t: 14360 },
  { t: 14361 },
  { t: 14362 },
  { t: 14363, position: { z: 1000.5 }, delta: { y: 0 }, inputs: { handledTeleport: true } },
  { t: 14364, delta: { y: -0.07840000092983246 }, inputs: { handledTeleport: false, verticalCollision: false } },
  { t: 14365, inputs: { verticalCollision: true } },
  { t: 14366 },
  { t: 14367 },
  { t: 14368 },
  { t: 14369 },
  { t: 14370 },
  { t: 14371 },
  { t: 14372 },
  { t: 14373 },
  { t: 14374 },
  { t: 14375 },
  { t: 14376 },
  { t: 14377 },
  { t: 14378 },
  { t: 14379 },
  { t: 14380 },
  { t: 14381 },
  { t: 14382 },
  { t: 14383 },
  { t: 14384 },
  { t: 14385 },
  { t: 14386 }
]

describe('physics: soul_speed_3_walk_soil', () => {
  it('matches recorded client state per tick', () => {
    const h = makeHarness({ version: "1.26.10", scenario: 'soul_speed_3_walk_soil', softFailures: true })
    h.runScenario({ name: 'soul_speed_3_walk_soil', ticks: TICKS })
  })
})
