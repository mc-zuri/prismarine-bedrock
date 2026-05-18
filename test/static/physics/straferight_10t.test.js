'use strict'

// Generated from .proxy.bin recording — do not edit by hand.
// Scenario: 1.21.0_strafeRight_10t
// Frames: 24  (ticks 936..959)
//
// Each entry is a PAI diff. The first entry diffs from DEFAULT_PAI in
// _helpers.js; every subsequent entry diffs from the previous tick's
// full PAI. The harness reconstructs full PAI per tick and validates.

const { makeHarness } = require('./_helpers')

const TICKS = [
  { t: 936, position: { x: 0.5, y: 1.6200100183486938, z: -31.5 }, yaw: 90, headYaw: 90, delta: { y: -0.07840000092983246 }, inputs: { blockBreakingDelayEnabled: true, verticalCollision: true } },
  { t: 937 },
  { t: 938 },
  { t: 939 },
  { t: 940 },
  { t: 941 },
  { t: 942 },
  { t: 943 },
  { t: 944 },
  { t: 945 },
  { t: 946 },
  { t: 947 },
  { t: 948 },
  { t: 949 },
  { t: 950 },
  { t: 951 },
  { t: 952 },
  { t: 953 },
  { t: 954 },
  { t: 955 },
  { t: 956 },
  { t: 957 },
  { t: 958 },
  { t: 959 }
]

describe('physics: strafeRight_10t', () => {
  it('matches recorded client state per tick', () => {
    const h = makeHarness({ version: "1.26.10", scenario: 'strafeRight_10t', softFailures: true })
    h.runScenario({ name: 'strafeRight_10t', ticks: TICKS })
  })
})
