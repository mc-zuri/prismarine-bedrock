'use strict'

// Generated from .proxy.bin recording — do not edit by hand.
// Scenario: 1.21.0_item_use_shield_walk
// Frames: 54  (ticks 15788..15841)
//
// Each entry is a PAI diff. The first entry diffs from DEFAULT_PAI in
// _helpers.js; every subsequent entry diffs from the previous tick's
// full PAI. The harness reconstructs full PAI per tick and validates.

const { makeHarness } = require('./_helpers')

const TICKS = [
  { t: 15788, position: { x: 0.5, y: 1.6200100183486938, z: 0.5 }, yaw: -0.000030517578125, headYaw: -0.000030517578125, delta: { y: -0.07840000092983246 }, inputs: { blockBreakingDelayEnabled: true, verticalCollision: true } },
  { t: 15789 },
  { t: 15790 },
  { t: 15791 },
  { t: 15792 },
  { t: 15793, delta: { y: 0 }, inputs: { handledTeleport: true } },
  { t: 15794, delta: { y: -0.07840000092983246 }, inputs: { handledTeleport: false, verticalCollision: false } },
  { t: 15795, inputs: { verticalCollision: true } },
  { t: 15796 },
  { t: 15797 },
  { t: 15798 },
  { t: 15799 },
  { t: 15800 },
  { t: 15801 },
  { t: 15802 },
  { t: 15803 },
  { t: 15804 },
  { t: 15805 },
  { t: 15806 },
  { t: 15807 },
  { t: 15808 },
  { t: 15809 },
  { t: 15810 },
  { t: 15811 },
  { t: 15812 },
  { t: 15813 },
  { t: 15814 },
  { t: 15815 },
  { t: 15816 },
  { t: 15817 },
  { t: 15818 },
  { t: 15819 },
  { t: 15820 },
  { t: 15821 },
  { t: 15822 },
  { t: 15823 },
  { t: 15824 },
  { t: 15825 },
  { t: 15826 },
  { t: 15827 },
  { t: 15828 },
  { t: 15829 },
  { t: 15830 },
  { t: 15831 },
  { t: 15832 },
  { t: 15833 },
  { t: 15834 },
  { t: 15835 },
  { t: 15836 },
  { t: 15837 },
  { t: 15838 },
  { t: 15839 },
  { t: 15840 },
  { t: 15841 }
]

describe('physics: item_use_shield_walk', () => {
  it('matches recorded client state per tick', () => {
    const h = makeHarness({ version: "1.26.10", scenario: 'item_use_shield_walk', softFailures: true })
    h.runScenario({ name: 'item_use_shield_walk', ticks: TICKS })
  })
})
