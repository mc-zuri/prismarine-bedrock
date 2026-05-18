'use strict'

// Generated from .proxy.bin recording — do not edit by hand.
// Scenario: 1.21.0_effect_jump_boost1
// Frames: 40  (ticks 8622..8661)
//
// Each entry is a PAI diff. The first entry diffs from DEFAULT_PAI in
// _helpers.js; every subsequent entry diffs from the previous tick's
// full PAI. The harness reconstructs full PAI per tick and validates.

const { makeHarness } = require('./_helpers')

const TICKS = [
  { t: 8622, position: { x: 0.5, y: 1.6200100183486938, z: 0.5 }, yaw: -0.000030517578125, headYaw: -0.000030517578125, delta: { y: -0.07840000092983246 }, inputs: { blockBreakingDelayEnabled: true, verticalCollision: true } },
  { t: 8623 },
  { t: 8624 },
  { t: 8625 },
  { t: 8626 },
  { t: 8627 },
  { t: 8628, yaw: 0, delta: { y: 0 }, inputs: { handledTeleport: true } },
  { t: 8629, yaw: -0.000030517578125, delta: { y: -0.07840000092983246 }, inputs: { handledTeleport: false, verticalCollision: false } },
  { t: 8630, inputs: { verticalCollision: true } },
  { t: 8631 },
  { t: 8632 },
  { t: 8633 },
  { t: 8634 },
  { t: 8635 },
  { t: 8636 },
  { t: 8637 },
  { t: 8638 },
  { t: 8639 },
  { t: 8640 },
  { t: 8641 },
  { t: 8642 },
  { t: 8643 },
  { t: 8644 },
  { t: 8645 },
  { t: 8646 },
  { t: 8647 },
  { t: 8648 },
  { t: 8649 },
  { t: 8650 },
  { t: 8651 },
  { t: 8652 },
  { t: 8653 },
  { t: 8654 },
  { t: 8655 },
  { t: 8656 },
  { t: 8657 },
  { t: 8658 },
  { t: 8659 },
  { t: 8660 },
  { t: 8661 }
]

describe('physics: effect_jump_boost1', () => {
  it('matches recorded client state per tick', () => {
    const h = makeHarness({ version: "1.26.10", scenario: 'effect_jump_boost1', softFailures: true })
    h.runScenario({ name: 'effect_jump_boost1', ticks: TICKS })
  })
})
