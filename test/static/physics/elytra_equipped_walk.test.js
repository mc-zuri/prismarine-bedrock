'use strict'

// Generated from .proxy.bin recording — do not edit by hand.
// Scenario: 1.21.0_elytra_equipped_walk
// Frames: 34  (ticks 14769..14802)
//
// Each entry is a PAI diff. The first entry diffs from DEFAULT_PAI in
// _helpers.js; every subsequent entry diffs from the previous tick's
// full PAI. The harness reconstructs full PAI per tick and validates.

const { makeHarness } = require('./_helpers')

const TICKS = [
  { t: 14769, position: { x: 0.5, y: 1.6200100183486938, z: -31.5 }, yaw: -0.000030517578125, headYaw: -0.000030517578125, delta: { y: -0.07840000092983246 }, inputs: { blockBreakingDelayEnabled: true, verticalCollision: true } },
  { t: 14770 },
  { t: 14771 },
  { t: 14772 },
  { t: 14773 },
  { t: 14774, position: { z: 0.5 }, yaw: 0, delta: { y: 0 }, inputs: { handledTeleport: true } },
  { t: 14775, yaw: -0.000030517578125, delta: { y: -0.07840000092983246 }, inputs: { handledTeleport: false, verticalCollision: false } },
  { t: 14776, inputs: { verticalCollision: true } },
  { t: 14777 },
  { t: 14778 },
  { t: 14779 },
  { t: 14780 },
  { t: 14781 },
  { t: 14782 },
  { t: 14783 },
  { t: 14784 },
  { t: 14785 },
  { t: 14786 },
  { t: 14787 },
  { t: 14788 },
  { t: 14789 },
  { t: 14790 },
  { t: 14791 },
  { t: 14792 },
  { t: 14793 },
  { t: 14794 },
  { t: 14795 },
  { t: 14796 },
  { t: 14797 },
  { t: 14798 },
  { t: 14799 },
  { t: 14800 },
  { t: 14801 },
  { t: 14802 }
]

describe('physics: elytra_equipped_walk', () => {
  it('matches recorded client state per tick', () => {
    const h = makeHarness({ version: "1.26.10", scenario: 'elytra_equipped_walk', softFailures: true })
    h.runScenario({ name: 'elytra_equipped_walk', ticks: TICKS })
  })
})
