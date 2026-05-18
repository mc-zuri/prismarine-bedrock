'use strict'

// Generated from .proxy.bin recording — do not edit by hand.
// Scenario: 1.21.0_walkYaw_0_20t
// Frames: 34  (ticks 3005..3038)
//
// Each entry is a PAI diff. The first entry diffs from DEFAULT_PAI in
// _helpers.js; every subsequent entry diffs from the previous tick's
// full PAI. The harness reconstructs full PAI per tick and validates.

const { makeHarness } = require('./_helpers')

const TICKS = [
  { t: 3005, position: { x: 0.5, y: 1.6200100183486938, z: -31.5 }, yaw: 133.81640625, pitch: -89.89998626708984, headYaw: 133.81640625, delta: { y: -0.07840000092983246 }, inputs: { blockBreakingDelayEnabled: true, verticalCollision: true } },
  { t: 3006 },
  { t: 3007 },
  { t: 3008 },
  { t: 3009 },
  { t: 3010 },
  { t: 3011 },
  { t: 3012 },
  { t: 3013 },
  { t: 3014 },
  { t: 3015 },
  { t: 3016 },
  { t: 3017 },
  { t: 3018 },
  { t: 3019 },
  { t: 3020 },
  { t: 3021 },
  { t: 3022 },
  { t: 3023 },
  { t: 3024 },
  { t: 3025 },
  { t: 3026 },
  { t: 3027 },
  { t: 3028 },
  { t: 3029 },
  { t: 3030 },
  { t: 3031 },
  { t: 3032 },
  { t: 3033 },
  { t: 3034 },
  { t: 3035 },
  { t: 3036 },
  { t: 3037 },
  { t: 3038 }
]

describe('physics: walkYaw_0_20t', () => {
  it('matches recorded client state per tick', () => {
    const h = makeHarness({ version: "1.26.10", scenario: 'walkYaw_0_20t', softFailures: true })
    h.runScenario({ name: 'walkYaw_0_20t', ticks: TICKS })
  })
})
