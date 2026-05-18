'use strict'

// Generated from .proxy.bin recording — do not edit by hand.
// Scenario: 1.21.0_walkForward_29t
// Frames: 43  (ticks 2851..2893)
//
// Each entry is a PAI diff. The first entry diffs from DEFAULT_PAI in
// _helpers.js; every subsequent entry diffs from the previous tick's
// full PAI. The harness reconstructs full PAI per tick and validates.

const { makeHarness } = require('./_helpers')

const TICKS = [
  { t: 2851, position: { x: 0.5, y: 1.6200100183486938, z: -31.5 }, yaw: 133.81640625, pitch: -89.89998626708984, headYaw: 133.81640625, delta: { y: -0.07840000092983246 }, inputs: { blockBreakingDelayEnabled: true, verticalCollision: true } },
  { t: 2852 },
  { t: 2853 },
  { t: 2854 },
  { t: 2855 },
  { t: 2856 },
  { t: 2857 },
  { t: 2858 },
  { t: 2859 },
  { t: 2860 },
  { t: 2861 },
  { t: 2862 },
  { t: 2863 },
  { t: 2864 },
  { t: 2865 },
  { t: 2866 },
  { t: 2867 },
  { t: 2868 },
  { t: 2869 },
  { t: 2870 },
  { t: 2871 },
  { t: 2872 },
  { t: 2873 },
  { t: 2874 },
  { t: 2875 },
  { t: 2876 },
  { t: 2877 },
  { t: 2878 },
  { t: 2879 },
  { t: 2880 },
  { t: 2881 },
  { t: 2882 },
  { t: 2883 },
  { t: 2884 },
  { t: 2885 },
  { t: 2886 },
  { t: 2887 },
  { t: 2888 },
  { t: 2889 },
  { t: 2890 },
  { t: 2891 },
  { t: 2892 },
  { t: 2893 }
]

describe('physics: walkForward_29t', () => {
  it('matches recorded client state per tick', () => {
    const h = makeHarness({ version: "1.26.10", scenario: 'walkForward_29t', softFailures: true })
    h.runScenario({ name: 'walkForward_29t', ticks: TICKS })
  })
})
