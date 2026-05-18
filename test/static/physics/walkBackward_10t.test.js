'use strict'

// Generated from .proxy.bin recording — do not edit by hand.
// Scenario: 1.21.0_walkBackward_10t
// Frames: 24  (ticks 866..889)
//
// Each entry is a PAI diff. The first entry diffs from DEFAULT_PAI in
// _helpers.js; every subsequent entry diffs from the previous tick's
// full PAI. The harness reconstructs full PAI per tick and validates.

const { makeHarness } = require('./_helpers')

const TICKS = [
  { t: 866, position: { x: 0.5, y: 1.6200100183486938, z: -31.5 }, yaw: 90, headYaw: 90, delta: { y: -0.07840000092983246 }, inputs: { blockBreakingDelayEnabled: true, verticalCollision: true } },
  { t: 867 },
  { t: 868 },
  { t: 869 },
  { t: 870 },
  { t: 871 },
  { t: 872 },
  { t: 873 },
  { t: 874 },
  { t: 875 },
  { t: 876 },
  { t: 877 },
  { t: 878 },
  { t: 879 },
  { t: 880 },
  { t: 881 },
  { t: 882 },
  { t: 883 },
  { t: 884 },
  { t: 885 },
  { t: 886 },
  { t: 887 },
  { t: 888 },
  { t: 889 }
]

describe('physics: walkBackward_10t', () => {
  it('matches recorded client state per tick', () => {
    const h = makeHarness({ version: "1.26.10", scenario: 'walkBackward_10t', softFailures: true })
    h.runScenario({ name: 'walkBackward_10t', ticks: TICKS })
  })
})
