'use strict'

// Generated from .proxy.bin recording — do not edit by hand.
// Scenario: 1.21.0_walkForward_30t
// Frames: 44  (ticks 2905..2948)
//
// Each entry is a PAI diff. The first entry diffs from DEFAULT_PAI in
// _helpers.js; every subsequent entry diffs from the previous tick's
// full PAI. The harness reconstructs full PAI per tick and validates.

const { makeHarness } = require('./_helpers')

const TICKS = [
  { t: 2905, position: { x: 0.5, y: 1.6200100183486938, z: -31.5 }, yaw: 133.81640625, pitch: -89.89998626708984, headYaw: 133.81640625, delta: { y: -0.07840000092983246 }, inputs: { blockBreakingDelayEnabled: true, verticalCollision: true } },
  { t: 2906 },
  { t: 2907 },
  { t: 2908 },
  { t: 2909 },
  { t: 2910 },
  { t: 2911 },
  { t: 2912 },
  { t: 2913 },
  { t: 2914 },
  { t: 2915 },
  { t: 2916 },
  { t: 2917 },
  { t: 2918 },
  { t: 2919 },
  { t: 2920 },
  { t: 2921 },
  { t: 2922 },
  { t: 2923 },
  { t: 2924 },
  { t: 2925 },
  { t: 2926 },
  { t: 2927 },
  { t: 2928 },
  { t: 2929 },
  { t: 2930 },
  { t: 2931 },
  { t: 2932 },
  { t: 2933 },
  { t: 2934 },
  { t: 2935 },
  { t: 2936 },
  { t: 2937 },
  { t: 2938 },
  { t: 2939 },
  { t: 2940 },
  { t: 2941 },
  { t: 2942 },
  { t: 2943 },
  { t: 2944 },
  { t: 2945 },
  { t: 2946 },
  { t: 2947 },
  { t: 2948 }
]

describe('physics: walkForward_30t', () => {
  it('matches recorded client state per tick', () => {
    const h = makeHarness({ version: "1.26.10", scenario: 'walkForward_30t', softFailures: true })
    h.runScenario({ name: 'walkForward_30t', ticks: TICKS })
  })
})
