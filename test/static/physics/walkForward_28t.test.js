'use strict'

// Generated from .proxy.bin recording — do not edit by hand.
// Scenario: 1.21.0_walkForward_28t
// Frames: 42  (ticks 2798..2839)
//
// Each entry is a PAI diff. The first entry diffs from DEFAULT_PAI in
// _helpers.js; every subsequent entry diffs from the previous tick's
// full PAI. The harness reconstructs full PAI per tick and validates.

const { makeHarness } = require('./_helpers')

const TICKS = [
  { t: 2798, position: { x: 0.5, y: 1.6200100183486938, z: -31.5 }, yaw: 133.81640625, pitch: -89.89998626708984, headYaw: 133.81640625, delta: { y: -0.07840000092983246 }, inputs: { blockBreakingDelayEnabled: true, verticalCollision: true } },
  { t: 2799 },
  { t: 2800 },
  { t: 2801 },
  { t: 2802 },
  { t: 2803 },
  { t: 2804 },
  { t: 2805 },
  { t: 2806 },
  { t: 2807 },
  { t: 2808 },
  { t: 2809 },
  { t: 2810 },
  { t: 2811 },
  { t: 2812 },
  { t: 2813 },
  { t: 2814 },
  { t: 2815 },
  { t: 2816 },
  { t: 2817 },
  { t: 2818 },
  { t: 2819 },
  { t: 2820 },
  { t: 2821 },
  { t: 2822 },
  { t: 2823 },
  { t: 2824 },
  { t: 2825 },
  { t: 2826 },
  { t: 2827 },
  { t: 2828 },
  { t: 2829 },
  { t: 2830 },
  { t: 2831 },
  { t: 2832 },
  { t: 2833 },
  { t: 2834 },
  { t: 2835 },
  { t: 2836 },
  { t: 2837 },
  { t: 2838 },
  { t: 2839 }
]

describe('physics: walkForward_28t', () => {
  it('matches recorded client state per tick', () => {
    const h = makeHarness({ version: "1.26.10", scenario: 'walkForward_28t', softFailures: true })
    h.runScenario({ name: 'walkForward_28t', ticks: TICKS })
  })
})
