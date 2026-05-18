'use strict'

// Generated from .proxy.bin recording — do not edit by hand.
// Scenario: 1.21.0_strafeLeft_10t
// Frames: 24  (ticks 901..924)
//
// Each entry is a PAI diff. The first entry diffs from DEFAULT_PAI in
// _helpers.js; every subsequent entry diffs from the previous tick's
// full PAI. The harness reconstructs full PAI per tick and validates.

const { makeHarness } = require('./_helpers')

const TICKS = [
  { t: 901, position: { x: 0.5, y: 1.6200100183486938, z: -31.5 }, yaw: 90, headYaw: 90, delta: { y: -0.07840000092983246 }, inputs: { blockBreakingDelayEnabled: true, verticalCollision: true } },
  { t: 902 },
  { t: 903 },
  { t: 904 },
  { t: 905 },
  { t: 906 },
  { t: 907 },
  { t: 908 },
  { t: 909 },
  { t: 910 },
  { t: 911 },
  { t: 912 },
  { t: 913 },
  { t: 914 },
  { t: 915 },
  { t: 916 },
  { t: 917 },
  { t: 918 },
  { t: 919 },
  { t: 920 },
  { t: 921 },
  { t: 922 },
  { t: 923 },
  { t: 924 }
]

describe('physics: strafeLeft_10t', () => {
  it('matches recorded client state per tick', () => {
    const h = makeHarness({ version: "1.26.10", scenario: 'strafeLeft_10t', softFailures: true })
    h.runScenario({ name: 'strafeLeft_10t', ticks: TICKS })
  })
})
