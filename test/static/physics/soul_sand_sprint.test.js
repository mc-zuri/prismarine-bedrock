'use strict'

// Generated from .proxy.bin recording — do not edit by hand.
// Scenario: 1.21.0_soul_sand_sprint
// Frames: 34  (ticks 5762..5795)
//
// Each entry is a PAI diff. The first entry diffs from DEFAULT_PAI in
// _helpers.js; every subsequent entry diffs from the previous tick's
// full PAI. The harness reconstructs full PAI per tick and validates.

const { makeHarness } = require('./_helpers')

const TICKS = [
  { t: 5762, position: { x: 0.5, y: 1.4950100183486938, z: 900.5 }, yaw: -0.000030517578125, headYaw: -0.000030517578125, delta: { y: -0.07840000092983246 }, inputs: { blockBreakingDelayEnabled: true, verticalCollision: true } },
  { t: 5763 },
  { t: 5764 },
  { t: 5765 },
  { t: 5766 },
  { t: 5767 },
  { t: 5768, position: { y: 1.6200100183486938 }, yaw: 0, delta: { y: 0 }, inputs: { handledTeleport: true } },
  { t: 5769, yaw: -0.000030517578125, delta: { y: -0.07840000092983246 }, inputs: { handledTeleport: false, verticalCollision: false } },
  { t: 5770, position: { y: 1.5416100025177002 }, delta: { y: -0.1552319973707199 } },
  { t: 5771, position: { y: 1.4950100183486938 }, delta: { y: -0.07840000092983246 }, inputs: { verticalCollision: true } },
  { t: 5772 },
  { t: 5773 },
  { t: 5774 },
  { t: 5775 },
  { t: 5776 },
  { t: 5777 },
  { t: 5778 },
  { t: 5779 },
  { t: 5780 },
  { t: 5781 },
  { t: 5782 },
  { t: 5783 },
  { t: 5784 },
  { t: 5785 },
  { t: 5786 },
  { t: 5787 },
  { t: 5788 },
  { t: 5789 },
  { t: 5790 },
  { t: 5791 },
  { t: 5792 },
  { t: 5793 },
  { t: 5794 },
  { t: 5795 }
]

describe('physics: soul_sand_sprint', () => {
  it('matches recorded client state per tick', () => {
    const h = makeHarness({ version: "1.26.10", scenario: 'soul_sand_sprint', softFailures: true })
    h.runScenario({ name: 'soul_sand_sprint', ticks: TICKS })
  })
})
