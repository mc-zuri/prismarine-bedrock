'use strict'

// Generated from .proxy.bin recording — do not edit by hand.
// Scenario: 1.21.0_walkForward_25t
// Frames: 39  (ticks 2645..2683)
//
// Each entry is a PAI diff. The first entry diffs from DEFAULT_PAI in
// _helpers.js; every subsequent entry diffs from the previous tick's
// full PAI. The harness reconstructs full PAI per tick and validates.

const { makeHarness } = require('./_helpers')

const TICKS = [
  { t: 2645, position: { x: 0.5, y: 1.6200100183486938, z: -31.5 }, yaw: 133.81640625, pitch: -89.89998626708984, headYaw: 133.81640625, delta: { y: -0.07840000092983246 }, inputs: { blockBreakingDelayEnabled: true, verticalCollision: true } },
  { t: 2646 },
  { t: 2647 },
  { t: 2648 },
  { t: 2649 },
  { t: 2650 },
  { t: 2651 },
  { t: 2652 },
  { t: 2653 },
  { t: 2654 },
  { t: 2655 },
  { t: 2656 },
  { t: 2657 },
  { t: 2658 },
  { t: 2659 },
  { t: 2660 },
  { t: 2661 },
  { t: 2662 },
  { t: 2663 },
  { t: 2664 },
  { t: 2665 },
  { t: 2666 },
  { t: 2667 },
  { t: 2668 },
  { t: 2669 },
  { t: 2670 },
  { t: 2671 },
  { t: 2672 },
  { t: 2673 },
  { t: 2674 },
  { t: 2675 },
  { t: 2676 },
  { t: 2677 },
  { t: 2678 },
  { t: 2679 },
  { t: 2680 },
  { t: 2681 },
  { t: 2682 },
  { t: 2683 }
]

describe('physics: walkForward_25t', () => {
  it('matches recorded client state per tick', () => {
    const h = makeHarness({ version: "1.26.10", scenario: 'walkForward_25t', softFailures: true })
    h.runScenario({ name: 'walkForward_25t', ticks: TICKS })
  })
})
