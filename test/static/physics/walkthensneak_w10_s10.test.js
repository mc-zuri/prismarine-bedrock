'use strict'

// Generated from .proxy.bin recording — do not edit by hand.
// Scenario: 1.21.0_walkThenSneak_w10_s10
// Frames: 34  (ticks 3590..3623)
//
// Each entry is a PAI diff. The first entry diffs from DEFAULT_PAI in
// _helpers.js; every subsequent entry diffs from the previous tick's
// full PAI. The harness reconstructs full PAI per tick and validates.

const { makeHarness } = require('./_helpers')

const TICKS = [
  { t: 3590, position: { x: 0.5, y: 1.6200100183486938, z: -31.5 }, yaw: 133.81640625, pitch: -89.89998626708984, headYaw: 133.81640625, delta: { y: -0.07840000092983246 }, inputs: { blockBreakingDelayEnabled: true, verticalCollision: true } },
  { t: 3591 },
  { t: 3592 },
  { t: 3593 },
  { t: 3594 },
  { t: 3595 },
  { t: 3596 },
  { t: 3597 },
  { t: 3598 },
  { t: 3599 },
  { t: 3600 },
  { t: 3601 },
  { t: 3602 },
  { t: 3603 },
  { t: 3604 },
  { t: 3605 },
  { t: 3606 },
  { t: 3607 },
  { t: 3608 },
  { t: 3609 },
  { t: 3610 },
  { t: 3611 },
  { t: 3612 },
  { t: 3613 },
  { t: 3614 },
  { t: 3615 },
  { t: 3616 },
  { t: 3617 },
  { t: 3618 },
  { t: 3619 },
  { t: 3620 },
  { t: 3621 },
  { t: 3622 },
  { t: 3623 }
]

describe('physics: walkThenSneak_w10_s10', () => {
  it('matches recorded client state per tick', () => {
    const h = makeHarness({ version: "1.26.10", scenario: 'walkThenSneak_w10_s10', softFailures: true })
    h.runScenario({ name: 'walkThenSneak_w10_s10', ticks: TICKS })
  })
})
