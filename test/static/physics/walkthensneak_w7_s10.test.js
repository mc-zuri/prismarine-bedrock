'use strict'

// Generated from .proxy.bin recording — do not edit by hand.
// Scenario: 1.21.0_walkThenSneak_w7_s10
// Frames: 31  (ticks 3461..3491)
//
// Each entry is a PAI diff. The first entry diffs from DEFAULT_PAI in
// _helpers.js; every subsequent entry diffs from the previous tick's
// full PAI. The harness reconstructs full PAI per tick and validates.

const { makeHarness } = require('./_helpers')

const TICKS = [
  { t: 3461, position: { x: 0.5, y: 1.6200100183486938, z: -31.5 }, yaw: 133.81640625, pitch: -89.89998626708984, headYaw: 133.81640625, delta: { y: -0.07840000092983246 }, inputs: { blockBreakingDelayEnabled: true, verticalCollision: true } },
  { t: 3462 },
  { t: 3463 },
  { t: 3464 },
  { t: 3465 },
  { t: 3466 },
  { t: 3467 },
  { t: 3468 },
  { t: 3469 },
  { t: 3470 },
  { t: 3471 },
  { t: 3472 },
  { t: 3473 },
  { t: 3474 },
  { t: 3475 },
  { t: 3476 },
  { t: 3477 },
  { t: 3478 },
  { t: 3479 },
  { t: 3480 },
  { t: 3481 },
  { t: 3482 },
  { t: 3483 },
  { t: 3484 },
  { t: 3485 },
  { t: 3486 },
  { t: 3487 },
  { t: 3488 },
  { t: 3489 },
  { t: 3490 },
  { t: 3491 }
]

describe('physics: walkThenSneak_w7_s10', () => {
  it('matches recorded client state per tick', () => {
    const h = makeHarness({ version: "1.26.10", scenario: 'walkThenSneak_w7_s10', softFailures: true })
    h.runScenario({ name: 'walkThenSneak_w7_s10', ticks: TICKS })
  })
})
