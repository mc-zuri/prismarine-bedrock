'use strict'

// Generated from .proxy.bin recording — do not edit by hand.
// Scenario: 1.21.0_walkThenSneak_w5_s10
// Frames: 29  (ticks 3380..3408)
//
// Each entry is a PAI diff. The first entry diffs from DEFAULT_PAI in
// _helpers.js; every subsequent entry diffs from the previous tick's
// full PAI. The harness reconstructs full PAI per tick and validates.

const { makeHarness } = require('./_helpers')

const TICKS = [
  { t: 3380, position: { x: 0.5, y: 1.6200100183486938, z: -31.5 }, yaw: 133.81640625, pitch: -89.89998626708984, headYaw: 133.81640625, delta: { y: -0.07840000092983246 }, inputs: { blockBreakingDelayEnabled: true, verticalCollision: true } },
  { t: 3381 },
  { t: 3382 },
  { t: 3383 },
  { t: 3384 },
  { t: 3385 },
  { t: 3386 },
  { t: 3387 },
  { t: 3388 },
  { t: 3389 },
  { t: 3390 },
  { t: 3391 },
  { t: 3392 },
  { t: 3393 },
  { t: 3394 },
  { t: 3395 },
  { t: 3396 },
  { t: 3397 },
  { t: 3398 },
  { t: 3399 },
  { t: 3400 },
  { t: 3401 },
  { t: 3402 },
  { t: 3403 },
  { t: 3404 },
  { t: 3405 },
  { t: 3406 },
  { t: 3407 },
  { t: 3408 }
]

describe('physics: walkThenSneak_w5_s10', () => {
  it('matches recorded client state per tick', () => {
    const h = makeHarness({ version: "1.26.10", scenario: 'walkThenSneak_w5_s10', softFailures: true })
    h.runScenario({ name: 'walkThenSneak_w5_s10', ticks: TICKS })
  })
})
