'use strict'

// Generated from .proxy.bin recording — do not edit by hand.
// Scenario: 1.21.0_soul_sand_walk
// Frames: 34  (ticks 5698..5731)
//
// Each entry is a PAI diff. The first entry diffs from DEFAULT_PAI in
// _helpers.js; every subsequent entry diffs from the previous tick's
// full PAI. The harness reconstructs full PAI per tick and validates.

const { makeHarness } = require('./_helpers')

const TICKS = [
  { t: 5698, position: { x: 0.5, y: 1.6200100183486938, z: 888.5 }, yaw: -0.000030517578125, headYaw: -0.000030517578125, delta: { y: -0.07840000092983246 }, inputs: { blockBreakingDelayEnabled: true, verticalCollision: true } },
  { t: 5699 },
  { t: 5700 },
  { t: 5701 },
  { t: 5702 },
  { t: 5703 },
  { t: 5704, position: { z: 900.5 }, yaw: 0, delta: { y: 0 }, inputs: { handledTeleport: true } },
  { t: 5705, yaw: -0.000030517578125, delta: { y: -0.07840000092983246 }, inputs: { handledTeleport: false, verticalCollision: false } },
  { t: 5706, position: { y: 1.5416100025177002 }, delta: { y: -0.1552319973707199 } },
  { t: 5707, position: { y: 1.4950100183486938 }, delta: { y: -0.07840000092983246 }, inputs: { verticalCollision: true } },
  { t: 5708 },
  { t: 5709 },
  { t: 5710 },
  { t: 5711 },
  { t: 5712 },
  { t: 5713 },
  { t: 5714 },
  { t: 5715 },
  { t: 5716 },
  { t: 5717 },
  { t: 5718 },
  { t: 5719 },
  { t: 5720 },
  { t: 5721 },
  { t: 5722 },
  { t: 5723 },
  { t: 5724 },
  { t: 5725 },
  { t: 5726 },
  { t: 5727 },
  { t: 5728 },
  { t: 5729 },
  { t: 5730 },
  { t: 5731 }
]

describe('physics: soul_sand_walk', () => {
  it('matches recorded client state per tick', () => {
    const h = makeHarness({ version: "1.26.10", scenario: 'soul_sand_walk', softFailures: true })
    h.runScenario({ name: 'soul_sand_walk', ticks: TICKS })
  })
})
