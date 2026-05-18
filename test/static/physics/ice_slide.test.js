'use strict'

// Generated from .proxy.bin recording — do not edit by hand.
// Scenario: 1.21.0_ice_slide
// Frames: 29  (ticks 5527..5555)
//
// Each entry is a PAI diff. The first entry diffs from DEFAULT_PAI in
// _helpers.js; every subsequent entry diffs from the previous tick's
// full PAI. The harness reconstructs full PAI per tick and validates.

const { makeHarness } = require('./_helpers')

const TICKS = [
  { t: 5527, position: { x: 0.5, y: 1.6200100183486938, z: 600.5 }, yaw: -0.000030517578125, headYaw: -0.000030517578125, delta: { y: -0.07840000092983246 }, inputs: { blockBreakingDelayEnabled: true, verticalCollision: true } },
  { t: 5528 },
  { t: 5529 },
  { t: 5530 },
  { t: 5531 },
  { t: 5532, yaw: 0, delta: { y: 0 }, inputs: { handledTeleport: true } },
  { t: 5533, yaw: -0.000030517578125, delta: { y: -0.07840000092983246 }, inputs: { handledTeleport: false, verticalCollision: false } },
  { t: 5534, inputs: { verticalCollision: true } },
  { t: 5535 },
  { t: 5536 },
  { t: 5537 },
  { t: 5538 },
  { t: 5539 },
  { t: 5540 },
  { t: 5541 },
  { t: 5542 },
  { t: 5543 },
  { t: 5544 },
  { t: 5545 },
  { t: 5546 },
  { t: 5547 },
  { t: 5548 },
  { t: 5549 },
  { t: 5550 },
  { t: 5551 },
  { t: 5552 },
  { t: 5553 },
  { t: 5554 },
  { t: 5555 }
]

describe('physics: ice_slide', () => {
  it('matches recorded client state per tick', () => {
    const h = makeHarness({ version: "1.26.10", scenario: 'ice_slide', softFailures: true })
    h.runScenario({ name: 'ice_slide', ticks: TICKS })
  })
})
