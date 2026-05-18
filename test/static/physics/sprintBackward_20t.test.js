'use strict'

// Generated from .proxy.bin recording — do not edit by hand.
// Scenario: 1.21.0_sprintBackward_20t
// Frames: 34  (ticks 1106..1139)
//
// Each entry is a PAI diff. The first entry diffs from DEFAULT_PAI in
// _helpers.js; every subsequent entry diffs from the previous tick's
// full PAI. The harness reconstructs full PAI per tick and validates.

const { makeHarness } = require('./_helpers')

const TICKS = [
  { t: 1106, position: { x: 0.5, y: 1.6200100183486938, z: -31.5 }, yaw: 90, headYaw: 90, delta: { y: -0.07840000092983246 }, inputs: { blockBreakingDelayEnabled: true, verticalCollision: true } },
  { t: 1107 },
  { t: 1108 },
  { t: 1109 },
  { t: 1110 },
  { t: 1111 },
  { t: 1112 },
  { t: 1113 },
  { t: 1114 },
  { t: 1115 },
  { t: 1116 },
  { t: 1117 },
  { t: 1118 },
  { t: 1119 },
  { t: 1120 },
  { t: 1121 },
  { t: 1122 },
  { t: 1123 },
  { t: 1124 },
  { t: 1125 },
  { t: 1126 },
  { t: 1127 },
  { t: 1128 },
  { t: 1129 },
  { t: 1130 },
  { t: 1131 },
  { t: 1132 },
  { t: 1133 },
  { t: 1134 },
  { t: 1135 },
  { t: 1136 },
  { t: 1137 },
  { t: 1138 },
  { t: 1139 }
]

describe('physics: sprintBackward_20t', () => {
  it('matches recorded client state per tick', () => {
    const h = makeHarness({ version: "1.26.10", scenario: 'sprintBackward_20t', softFailures: true })
    h.runScenario({ name: 'sprintBackward_20t', ticks: TICKS })
  })
})
