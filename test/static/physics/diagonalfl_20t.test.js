'use strict'

// Generated from .proxy.bin recording — do not edit by hand.
// Scenario: 1.21.0_diagonalFL_20t
// Frames: 34  (ticks 971..1004)
//
// Each entry is a PAI diff. The first entry diffs from DEFAULT_PAI in
// _helpers.js; every subsequent entry diffs from the previous tick's
// full PAI. The harness reconstructs full PAI per tick and validates.

const { makeHarness } = require('./_helpers')

const TICKS = [
  { t: 971, position: { x: 0.5, y: 1.6200100183486938, z: -31.5 }, yaw: 90, headYaw: 90, delta: { y: -0.07840000092983246 }, inputs: { blockBreakingDelayEnabled: true, verticalCollision: true } },
  { t: 972 },
  { t: 973 },
  { t: 974 },
  { t: 975 },
  { t: 976 },
  { t: 977 },
  { t: 978 },
  { t: 979 },
  { t: 980 },
  { t: 981 },
  { t: 982 },
  { t: 983 },
  { t: 984 },
  { t: 985 },
  { t: 986 },
  { t: 987 },
  { t: 988 },
  { t: 989 },
  { t: 990 },
  { t: 991 },
  { t: 992 },
  { t: 993 },
  { t: 994 },
  { t: 995 },
  { t: 996 },
  { t: 997 },
  { t: 998 },
  { t: 999 },
  { t: 1000 },
  { t: 1001 },
  { t: 1002 },
  { t: 1003 },
  { t: 1004 }
]

describe('physics: diagonalFL_20t', () => {
  it('matches recorded client state per tick', () => {
    const h = makeHarness({ version: "1.26.10", scenario: 'diagonalFL_20t', softFailures: true })
    h.runScenario({ name: 'diagonalFL_20t', ticks: TICKS })
  })
})
