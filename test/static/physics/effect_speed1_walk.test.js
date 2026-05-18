'use strict'

// Generated from .proxy.bin recording — do not edit by hand.
// Scenario: 1.21.0_effect_speed1_walk
// Frames: 34  (ticks 8514..8547)
//
// Each entry is a PAI diff. The first entry diffs from DEFAULT_PAI in
// _helpers.js; every subsequent entry diffs from the previous tick's
// full PAI. The harness reconstructs full PAI per tick and validates.

const { makeHarness } = require('./_helpers')

const TICKS = [
  { t: 8514, position: { x: 0.5, y: 1.6200100183486938, z: 1302.5 }, yaw: -0.000030517578125, headYaw: -0.000030517578125, delta: { y: -0.07840000092983246 }, inputs: { blockBreakingDelayEnabled: true, verticalCollision: true } },
  { t: 8515 },
  { t: 8516 },
  { t: 8517 },
  { t: 8518 },
  { t: 8519, position: { z: 0.5 }, yaw: 0, delta: { y: 0 }, inputs: { handledTeleport: true } },
  { t: 8520, yaw: -0.000030517578125, delta: { y: -0.07840000092983246 }, inputs: { handledTeleport: false, verticalCollision: false } },
  { t: 8521, inputs: { verticalCollision: true } },
  { t: 8522 },
  { t: 8523 },
  { t: 8524 },
  { t: 8525 },
  { t: 8526 },
  { t: 8527 },
  { t: 8528 },
  { t: 8529 },
  { t: 8530 },
  { t: 8531 },
  { t: 8532 },
  { t: 8533 },
  { t: 8534 },
  { t: 8535 },
  { t: 8536 },
  { t: 8537 },
  { t: 8538 },
  { t: 8539 },
  { t: 8540 },
  { t: 8541 },
  { t: 8542 },
  { t: 8543 },
  { t: 8544 },
  { t: 8545 },
  { t: 8546 },
  { t: 8547 }
]

describe('physics: effect_speed1_walk', () => {
  it('matches recorded client state per tick', () => {
    const h = makeHarness({ version: "1.26.10", scenario: 'effect_speed1_walk', softFailures: true })
    h.runScenario({ name: 'effect_speed1_walk', ticks: TICKS })
  })
})
