'use strict'

// Generated from .proxy.bin recording — do not edit by hand.
// Scenario: 1.21.0_effect_slowness1_walk
// Frames: 34  (ticks 8568..8601)
//
// Each entry is a PAI diff. The first entry diffs from DEFAULT_PAI in
// _helpers.js; every subsequent entry diffs from the previous tick's
// full PAI. The harness reconstructs full PAI per tick and validates.

const { makeHarness } = require('./_helpers')

const TICKS = [
  { t: 8568, position: { x: 0.5, y: 1.6200100183486938, z: 0.5 }, yaw: -0.000030517578125, headYaw: -0.000030517578125, delta: { y: -0.07840000092983246 }, inputs: { blockBreakingDelayEnabled: true, verticalCollision: true } },
  { t: 8569 },
  { t: 8570 },
  { t: 8571 },
  { t: 8572 },
  { t: 8573 },
  { t: 8574, yaw: 0, delta: { y: 0 }, inputs: { handledTeleport: true } },
  { t: 8575, yaw: -0.000030517578125, delta: { y: -0.07840000092983246 }, inputs: { handledTeleport: false, verticalCollision: false } },
  { t: 8576, inputs: { verticalCollision: true } },
  { t: 8577 },
  { t: 8578 },
  { t: 8579 },
  { t: 8580 },
  { t: 8581 },
  { t: 8582 },
  { t: 8583 },
  { t: 8584 },
  { t: 8585 },
  { t: 8586 },
  { t: 8587 },
  { t: 8588 },
  { t: 8589 },
  { t: 8590 },
  { t: 8591 },
  { t: 8592 },
  { t: 8593 },
  { t: 8594 },
  { t: 8595 },
  { t: 8596 },
  { t: 8597 },
  { t: 8598 },
  { t: 8599 },
  { t: 8600 },
  { t: 8601 }
]

describe('physics: effect_slowness1_walk', () => {
  it('matches recorded client state per tick', () => {
    const h = makeHarness({ version: "1.26.10", scenario: 'effect_slowness1_walk', softFailures: true })
    h.runScenario({ name: 'effect_slowness1_walk', ticks: TICKS })
  })
})
