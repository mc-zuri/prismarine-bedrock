'use strict'

// Generated from .proxy.bin recording — do not edit by hand.
// Scenario: 1.21.0_walkThenSneak_w1_s10
// Frames: 25  (ticks 3230..3254)
//
// Each entry is a PAI diff. The first entry diffs from DEFAULT_PAI in
// _helpers.js; every subsequent entry diffs from the previous tick's
// full PAI. The harness reconstructs full PAI per tick and validates.

const { makeHarness } = require('./_helpers')

const TICKS = [
  { t: 3230, position: { x: 0.5, y: 1.6200100183486938, z: -31.5 }, yaw: 133.81640625, pitch: -89.89998626708984, headYaw: 133.81640625, delta: { y: -0.07840000092983246 }, inputs: { blockBreakingDelayEnabled: true, verticalCollision: true } },
  { t: 3231 },
  { t: 3232 },
  { t: 3233 },
  { t: 3234 },
  { t: 3235 },
  { t: 3236 },
  { t: 3237 },
  { t: 3238 },
  { t: 3239 },
  { t: 3240 },
  { t: 3241 },
  { t: 3242 },
  { t: 3243 },
  { t: 3244 },
  { t: 3245 },
  { t: 3246 },
  { t: 3247 },
  { t: 3248 },
  { t: 3249 },
  { t: 3250 },
  { t: 3251 },
  { t: 3252 },
  { t: 3253 },
  { t: 3254 }
]

describe('physics: walkThenSneak_w1_s10', () => {
  it('matches recorded client state per tick', () => {
    const h = makeHarness({ version: "1.26.10", scenario: 'walkThenSneak_w1_s10', softFailures: true })
    h.runScenario({ name: 'walkThenSneak_w1_s10', ticks: TICKS })
  })
})
