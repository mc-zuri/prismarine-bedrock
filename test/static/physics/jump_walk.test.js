'use strict'

// Generated from .proxy.bin recording — do not edit by hand.
// Scenario: 1.21.0_jump_walk
// Frames: 54  (ticks 4771..4824)
//
// Each entry is a PAI diff. The first entry diffs from DEFAULT_PAI in
// _helpers.js; every subsequent entry diffs from the previous tick's
// full PAI. The harness reconstructs full PAI per tick and validates.

const { makeHarness } = require('./_helpers')

const TICKS = [
  { t: 4771, position: { x: 0.5, y: 1.6200100183486938, z: 0.5 }, yaw: -0.000030517578125, headYaw: -0.000030517578125, delta: { y: -0.07840000092983246 }, inputs: { blockBreakingDelayEnabled: true, verticalCollision: true } },
  { t: 4772 },
  { t: 4773 },
  { t: 4774 },
  { t: 4775 },
  { t: 4776, yaw: 0, delta: { y: 0 }, inputs: { handledTeleport: true } },
  { t: 4777, yaw: -0.000030517578125, delta: { y: -0.07840000092983246 }, inputs: { handledTeleport: false, verticalCollision: false } },
  { t: 4778, inputs: { verticalCollision: true } },
  { t: 4779 },
  { t: 4780 },
  { t: 4781 },
  { t: 4782 },
  { t: 4783 },
  { t: 4784 },
  { t: 4785 },
  { t: 4786 },
  { t: 4787 },
  { t: 4788 },
  { t: 4789 },
  { t: 4790 },
  { t: 4791 },
  { t: 4792 },
  { t: 4793 },
  { t: 4794 },
  { t: 4795 },
  { t: 4796 },
  { t: 4797 },
  { t: 4798 },
  { t: 4799 },
  { t: 4800 },
  { t: 4801 },
  { t: 4802 },
  { t: 4803 },
  { t: 4804 },
  { t: 4805 },
  { t: 4806 },
  { t: 4807 },
  { t: 4808 },
  { t: 4809 },
  { t: 4810 },
  { t: 4811 },
  { t: 4812 },
  { t: 4813 },
  { t: 4814 },
  { t: 4815 },
  { t: 4816 },
  { t: 4817 },
  { t: 4818 },
  { t: 4819 },
  { t: 4820 },
  { t: 4821 },
  { t: 4822 },
  { t: 4823 },
  { t: 4824 }
]

describe('physics: jump_walk', () => {
  it('matches recorded client state per tick', () => {
    const h = makeHarness({ version: "1.26.10", scenario: 'jump_walk', softFailures: true })
    h.runScenario({ name: 'jump_walk', ticks: TICKS })
  })
})
