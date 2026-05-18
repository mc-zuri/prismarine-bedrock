'use strict'

// Generated from .proxy.bin recording — do not edit by hand.
// Scenario: 1.21.0_walkThenSneak_w2_s10
// Frames: 26  (ticks 3266..3291)
//
// Each entry is a PAI diff. The first entry diffs from DEFAULT_PAI in
// _helpers.js; every subsequent entry diffs from the previous tick's
// full PAI. The harness reconstructs full PAI per tick and validates.

const { makeHarness } = require('./_helpers')

const TICKS = [
  { t: 3266, position: { x: 0.5, y: 1.6200100183486938, z: -31.5 }, yaw: 133.81640625, pitch: -89.89998626708984, headYaw: 133.81640625, delta: { y: -0.07840000092983246 }, inputs: { blockBreakingDelayEnabled: true, verticalCollision: true } },
  { t: 3267 },
  { t: 3268 },
  { t: 3269 },
  { t: 3270 },
  { t: 3271 },
  { t: 3272 },
  { t: 3273 },
  { t: 3274 },
  { t: 3275 },
  { t: 3276 },
  { t: 3277 },
  { t: 3278 },
  { t: 3279 },
  { t: 3280 },
  { t: 3281 },
  { t: 3282 },
  { t: 3283 },
  { t: 3284 },
  { t: 3285 },
  { t: 3286 },
  { t: 3287 },
  { t: 3288 },
  { t: 3289 },
  { t: 3290 },
  { t: 3291 }
]

describe('physics: walkThenSneak_w2_s10', () => {
  it('matches recorded client state per tick', () => {
    const h = makeHarness({ version: "1.26.10", scenario: 'walkThenSneak_w2_s10', softFailures: true })
    h.runScenario({ name: 'walkThenSneak_w2_s10', ticks: TICKS })
  })
})
