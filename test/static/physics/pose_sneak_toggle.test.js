'use strict'

// Generated from .proxy.bin recording — do not edit by hand.
// Scenario: 1.21.0_pose_sneak_toggle
// Frames: 48  (ticks 9799..9846)
//
// Each entry is a PAI diff. The first entry diffs from DEFAULT_PAI in
// _helpers.js; every subsequent entry diffs from the previous tick's
// full PAI. The harness reconstructs full PAI per tick and validates.

const { makeHarness } = require('./_helpers')

const TICKS = [
  { t: 9799, position: { x: 0.5, y: 1.6200100183486938, z: -31.5 }, yaw: -0.000030517578125, headYaw: -0.000030517578125, delta: { y: -0.07840000092983246 }, inputs: { blockBreakingDelayEnabled: true, verticalCollision: true } },
  { t: 9800 },
  { t: 9801 },
  { t: 9802 },
  { t: 9803 },
  { t: 9804 },
  { t: 9805, position: { z: 0.5 }, yaw: 0, delta: { y: 0 }, inputs: { handledTeleport: true } },
  { t: 9806, yaw: -0.000030517578125, delta: { y: -0.07840000092983246 }, inputs: { handledTeleport: false, verticalCollision: false } },
  { t: 9807, inputs: { verticalCollision: true } },
  { t: 9808 },
  { t: 9809 },
  { t: 9810 },
  { t: 9811 },
  { t: 9812 },
  { t: 9813 },
  { t: 9814 },
  { t: 9815 },
  { t: 9816 },
  { t: 9817 },
  { t: 9818 },
  { t: 9819 },
  { t: 9820 },
  { t: 9821 },
  { t: 9822 },
  { t: 9823 },
  { t: 9824 },
  { t: 9825 },
  { t: 9826 },
  { t: 9827 },
  { t: 9828 },
  { t: 9829 },
  { t: 9830 },
  { t: 9831 },
  { t: 9832 },
  { t: 9833 },
  { t: 9834 },
  { t: 9835 },
  { t: 9836 },
  { t: 9837 },
  { t: 9838 },
  { t: 9839 },
  { t: 9840 },
  { t: 9841 },
  { t: 9842 },
  { t: 9843 },
  { t: 9844 },
  { t: 9845 },
  { t: 9846 }
]

describe('physics: pose_sneak_toggle', () => {
  it('matches recorded client state per tick', () => {
    const h = makeHarness({ version: "1.26.10", scenario: 'pose_sneak_toggle', softFailures: true })
    h.runScenario({ name: 'pose_sneak_toggle', ticks: TICKS })
  })
})
