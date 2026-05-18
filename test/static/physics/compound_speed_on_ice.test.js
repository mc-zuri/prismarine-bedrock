'use strict'

// Generated from .proxy.bin recording — do not edit by hand.
// Scenario: 1.21.0_compound_speed_on_ice
// Frames: 44  (ticks 10525..10568)
//
// Each entry is a PAI diff. The first entry diffs from DEFAULT_PAI in
// _helpers.js; every subsequent entry diffs from the previous tick's
// full PAI. The harness reconstructs full PAI per tick and validates.

const { makeHarness } = require('./_helpers')

const TICKS = [
  { t: 10525, position: { x: 0.5, y: 1.6200100183486938, z: 588.5 }, yaw: -0.000030517578125, headYaw: -0.000030517578125, delta: { y: -0.07840000092983246 }, inputs: { blockBreakingDelayEnabled: true, verticalCollision: true } },
  { t: 10526 },
  { t: 10527 },
  { t: 10528 },
  { t: 10529 },
  { t: 10530 },
  { t: 10531 },
  { t: 10532, position: { z: 600.5 }, yaw: 0, delta: { y: 0 }, inputs: { handledTeleport: true } },
  { t: 10533, yaw: -0.000030517578125, delta: { y: -0.07840000092983246 }, inputs: { handledTeleport: false, verticalCollision: false } },
  { t: 10534, inputs: { verticalCollision: true } },
  { t: 10535 },
  { t: 10536 },
  { t: 10537 },
  { t: 10538 },
  { t: 10539 },
  { t: 10540 },
  { t: 10541 },
  { t: 10542 },
  { t: 10543 },
  { t: 10544 },
  { t: 10545 },
  { t: 10546 },
  { t: 10547 },
  { t: 10548 },
  { t: 10549 },
  { t: 10550 },
  { t: 10551 },
  { t: 10552 },
  { t: 10553 },
  { t: 10554 },
  { t: 10555 },
  { t: 10556 },
  { t: 10557 },
  { t: 10558 },
  { t: 10559 },
  { t: 10560 },
  { t: 10561 },
  { t: 10562 },
  { t: 10563 },
  { t: 10564 },
  { t: 10565 },
  { t: 10566 },
  { t: 10567 },
  { t: 10568 }
]

describe('physics: compound_speed_on_ice', () => {
  it('matches recorded client state per tick', () => {
    const h = makeHarness({ version: "1.26.10", scenario: 'compound_speed_on_ice', softFailures: true })
    h.runScenario({ name: 'compound_speed_on_ice', ticks: TICKS })
  })
})
