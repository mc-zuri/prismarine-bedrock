'use strict'

// Generated from .proxy.bin recording — do not edit by hand.
// Scenario: 1.21.0_walkYaw_-1_20t
// Frames: 34  (ticks 2960..2993)
//
// Each entry is a PAI diff. The first entry diffs from DEFAULT_PAI in
// _helpers.js; every subsequent entry diffs from the previous tick's
// full PAI. The harness reconstructs full PAI per tick and validates.

const { makeHarness } = require('./_helpers')

const TICKS = [
  { t: 2960, position: { x: 0.5, y: 1.6200100183486938, z: -31.5 }, yaw: 133.81640625, pitch: -89.89998626708984, headYaw: 133.81640625, delta: { y: -0.07840000092983246 }, inputs: { blockBreakingDelayEnabled: true, verticalCollision: true } },
  { t: 2961 },
  { t: 2962 },
  { t: 2963 },
  { t: 2964 },
  { t: 2965 },
  { t: 2966 },
  { t: 2967 },
  { t: 2968 },
  { t: 2969 },
  { t: 2970 },
  { t: 2971 },
  { t: 2972 },
  { t: 2973 },
  { t: 2974 },
  { t: 2975 },
  { t: 2976 },
  { t: 2977 },
  { t: 2978 },
  { t: 2979 },
  { t: 2980 },
  { t: 2981 },
  { t: 2982 },
  { t: 2983 },
  { t: 2984 },
  { t: 2985 },
  { t: 2986 },
  { t: 2987 },
  { t: 2988 },
  { t: 2989 },
  { t: 2990 },
  { t: 2991 },
  { t: 2992 },
  { t: 2993 }
]

describe('physics: walkYaw_-1_20t', () => {
  it('matches recorded client state per tick', () => {
    const h = makeHarness({ version: "1.26.10", scenario: 'walkYaw_-1_20t', softFailures: true })
    h.runScenario({ name: 'walkYaw_-1_20t', ticks: TICKS })
  })
})
