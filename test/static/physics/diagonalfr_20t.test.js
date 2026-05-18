'use strict'

// Generated from .proxy.bin recording — do not edit by hand.
// Scenario: 1.21.0_diagonalFR_20t
// Frames: 34  (ticks 1016..1049)
//
// Each entry is a PAI diff. The first entry diffs from DEFAULT_PAI in
// _helpers.js; every subsequent entry diffs from the previous tick's
// full PAI. The harness reconstructs full PAI per tick and validates.

const { makeHarness } = require('./_helpers')

const TICKS = [
  { t: 1016, position: { x: 0.5, y: 1.6200100183486938, z: -31.5 }, yaw: 90, headYaw: 90, delta: { y: -0.07840000092983246 }, inputs: { blockBreakingDelayEnabled: true, verticalCollision: true } },
  { t: 1017 },
  { t: 1018 },
  { t: 1019 },
  { t: 1020 },
  { t: 1021 },
  { t: 1022 },
  { t: 1023 },
  { t: 1024 },
  { t: 1025 },
  { t: 1026 },
  { t: 1027 },
  { t: 1028 },
  { t: 1029 },
  { t: 1030 },
  { t: 1031 },
  { t: 1032 },
  { t: 1033 },
  { t: 1034 },
  { t: 1035 },
  { t: 1036 },
  { t: 1037 },
  { t: 1038 },
  { t: 1039 },
  { t: 1040 },
  { t: 1041 },
  { t: 1042 },
  { t: 1043 },
  { t: 1044 },
  { t: 1045 },
  { t: 1046 },
  { t: 1047 },
  { t: 1048 },
  { t: 1049 }
]

describe('physics: diagonalFR_20t', () => {
  it('matches recorded client state per tick', () => {
    const h = makeHarness({ version: "1.26.10", scenario: 'diagonalFR_20t', softFailures: true })
    h.runScenario({ name: 'diagonalFR_20t', ticks: TICKS })
  })
})
