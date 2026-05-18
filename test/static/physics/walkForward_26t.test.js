'use strict'

// Generated from .proxy.bin recording — do not edit by hand.
// Scenario: 1.21.0_walkForward_26t
// Frames: 40  (ticks 2695..2734)
//
// Each entry is a PAI diff. The first entry diffs from DEFAULT_PAI in
// _helpers.js; every subsequent entry diffs from the previous tick's
// full PAI. The harness reconstructs full PAI per tick and validates.

const { makeHarness } = require('./_helpers')

const TICKS = [
  { t: 2695, position: { x: 0.5, y: 1.6200100183486938, z: -31.5 }, yaw: 133.81640625, pitch: -89.89998626708984, headYaw: 133.81640625, delta: { y: -0.07840000092983246 }, inputs: { blockBreakingDelayEnabled: true, verticalCollision: true } },
  { t: 2696 },
  { t: 2697 },
  { t: 2698 },
  { t: 2699 },
  { t: 2700 },
  { t: 2701 },
  { t: 2702 },
  { t: 2703 },
  { t: 2704 },
  { t: 2705 },
  { t: 2706 },
  { t: 2707 },
  { t: 2708 },
  { t: 2709 },
  { t: 2710 },
  { t: 2711 },
  { t: 2712 },
  { t: 2713 },
  { t: 2714 },
  { t: 2715 },
  { t: 2716 },
  { t: 2717 },
  { t: 2718 },
  { t: 2719 },
  { t: 2720 },
  { t: 2721 },
  { t: 2722 },
  { t: 2723 },
  { t: 2724 },
  { t: 2725 },
  { t: 2726 },
  { t: 2727 },
  { t: 2728 },
  { t: 2729 },
  { t: 2730 },
  { t: 2731 },
  { t: 2732 },
  { t: 2733 },
  { t: 2734 }
]

describe('physics: walkForward_26t', () => {
  it('matches recorded client state per tick', () => {
    const h = makeHarness({ version: "1.26.10", scenario: 'walkForward_26t', softFailures: true })
    h.runScenario({ name: 'walkForward_26t', ticks: TICKS })
  })
})
