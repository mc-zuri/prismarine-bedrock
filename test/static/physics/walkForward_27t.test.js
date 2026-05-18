'use strict'

// Generated from .proxy.bin recording — do not edit by hand.
// Scenario: 1.21.0_walkForward_27t
// Frames: 41  (ticks 2746..2786)
//
// Each entry is a PAI diff. The first entry diffs from DEFAULT_PAI in
// _helpers.js; every subsequent entry diffs from the previous tick's
// full PAI. The harness reconstructs full PAI per tick and validates.

const { makeHarness } = require('./_helpers')

const TICKS = [
  { t: 2746, position: { x: 0.5, y: 1.6200100183486938, z: -31.5 }, yaw: 133.81640625, pitch: -89.89998626708984, headYaw: 133.81640625, delta: { y: -0.07840000092983246 }, inputs: { blockBreakingDelayEnabled: true, verticalCollision: true } },
  { t: 2747 },
  { t: 2748 },
  { t: 2749 },
  { t: 2750 },
  { t: 2751 },
  { t: 2752 },
  { t: 2753 },
  { t: 2754 },
  { t: 2755 },
  { t: 2756 },
  { t: 2757 },
  { t: 2758 },
  { t: 2759 },
  { t: 2760 },
  { t: 2761 },
  { t: 2762 },
  { t: 2763 },
  { t: 2764 },
  { t: 2765 },
  { t: 2766 },
  { t: 2767 },
  { t: 2768 },
  { t: 2769 },
  { t: 2770 },
  { t: 2771 },
  { t: 2772 },
  { t: 2773 },
  { t: 2774 },
  { t: 2775 },
  { t: 2776 },
  { t: 2777 },
  { t: 2778 },
  { t: 2779 },
  { t: 2780 },
  { t: 2781 },
  { t: 2782 },
  { t: 2783 },
  { t: 2784 },
  { t: 2785 },
  { t: 2786 }
]

describe('physics: walkForward_27t', () => {
  it('matches recorded client state per tick', () => {
    const h = makeHarness({ version: "1.26.10", scenario: 'walkForward_27t', softFailures: true })
    h.runScenario({ name: 'walkForward_27t', ticks: TICKS })
  })
})
