'use strict'

// Generated from .proxy.bin recording — do not edit by hand.
// Scenario: 1.21.0_walkForward_24t
// Frames: 38  (ticks 2596..2633)
//
// Each entry is a PAI diff. The first entry diffs from DEFAULT_PAI in
// _helpers.js; every subsequent entry diffs from the previous tick's
// full PAI. The harness reconstructs full PAI per tick and validates.

const { makeHarness } = require('./_helpers')

const TICKS = [
  { t: 2596, position: { x: 0.5, y: 1.6200100183486938, z: -31.5 }, yaw: 133.81640625, pitch: -89.89998626708984, headYaw: 133.81640625, delta: { y: -0.07840000092983246 }, inputs: { blockBreakingDelayEnabled: true, verticalCollision: true } },
  { t: 2597 },
  { t: 2598 },
  { t: 2599 },
  { t: 2600 },
  { t: 2601 },
  { t: 2602 },
  { t: 2603 },
  { t: 2604 },
  { t: 2605 },
  { t: 2606 },
  { t: 2607 },
  { t: 2608 },
  { t: 2609 },
  { t: 2610 },
  { t: 2611 },
  { t: 2612 },
  { t: 2613 },
  { t: 2614 },
  { t: 2615 },
  { t: 2616 },
  { t: 2617 },
  { t: 2618 },
  { t: 2619 },
  { t: 2620 },
  { t: 2621 },
  { t: 2622 },
  { t: 2623 },
  { t: 2624 },
  { t: 2625 },
  { t: 2626 },
  { t: 2627 },
  { t: 2628 },
  { t: 2629 },
  { t: 2630 },
  { t: 2631 },
  { t: 2632 },
  { t: 2633 }
]

describe('physics: walkForward_24t', () => {
  it('matches recorded client state per tick', () => {
    const h = makeHarness({ version: "1.26.10", scenario: 'walkForward_24t', softFailures: true })
    h.runScenario({ name: 'walkForward_24t', ticks: TICKS })
  })
})
