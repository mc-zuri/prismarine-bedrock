'use strict'

// Generated from .proxy.bin recording — do not edit by hand.
// Scenario: 1.21.0_ice_walk
// Frames: 44  (ticks 5379..5422)
//
// Each entry is a PAI diff. The first entry diffs from DEFAULT_PAI in
// _helpers.js; every subsequent entry diffs from the previous tick's
// full PAI. The harness reconstructs full PAI per tick and validates.

const { makeHarness } = require('./_helpers')

const TICKS = [
  { t: 5379, position: { x: 0.5, y: 1.6200100183486938, z: 588.5 }, yaw: -0.000030517578125, headYaw: -0.000030517578125, delta: { y: -0.07840000092983246 }, inputs: { blockBreakingDelayEnabled: true, verticalCollision: true } },
  { t: 5380 },
  { t: 5381 },
  { t: 5382 },
  { t: 5383 },
  { t: 5384, position: { z: 600.5 }, yaw: 0, delta: { y: 0 }, inputs: { handledTeleport: true } },
  { t: 5385, yaw: -0.000030517578125, delta: { y: -0.07840000092983246 }, inputs: { handledTeleport: false, verticalCollision: false } },
  { t: 5386, inputs: { verticalCollision: true } },
  { t: 5387 },
  { t: 5388 },
  { t: 5389 },
  { t: 5390 },
  { t: 5391 },
  { t: 5392 },
  { t: 5393 },
  { t: 5394 },
  { t: 5395 },
  { t: 5396 },
  { t: 5397 },
  { t: 5398 },
  { t: 5399 },
  { t: 5400 },
  { t: 5401 },
  { t: 5402 },
  { t: 5403 },
  { t: 5404 },
  { t: 5405 },
  { t: 5406 },
  { t: 5407 },
  { t: 5408 },
  { t: 5409 },
  { t: 5410 },
  { t: 5411 },
  { t: 5412 },
  { t: 5413 },
  { t: 5414 },
  { t: 5415 },
  { t: 5416 },
  { t: 5417 },
  { t: 5418 },
  { t: 5419 },
  { t: 5420 },
  { t: 5421 },
  { t: 5422 }
]

describe('physics: ice_walk', () => {
  it('matches recorded client state per tick', () => {
    const h = makeHarness({ version: "1.26.10", scenario: 'ice_walk', softFailures: true })
    h.runScenario({ name: 'ice_walk', ticks: TICKS })
  })
})
