'use strict'

// Generated from .proxy.bin recording — do not edit by hand.
// Scenario: 1.21.0_sprintForward_20t
// Frames: 34  (ticks 1061..1094)
//
// Each entry is a PAI diff. The first entry diffs from DEFAULT_PAI in
// _helpers.js; every subsequent entry diffs from the previous tick's
// full PAI. The harness reconstructs full PAI per tick and validates.

const { makeHarness } = require('./_helpers')

const TICKS = [
  { t: 1061, position: { x: 0.5, y: 1.6200100183486938, z: -31.5 }, yaw: 90, headYaw: 90, delta: { y: -0.07840000092983246 }, inputs: { blockBreakingDelayEnabled: true, verticalCollision: true } },
  { t: 1062 },
  { t: 1063 },
  { t: 1064 },
  { t: 1065 },
  { t: 1066 },
  { t: 1067 },
  { t: 1068 },
  { t: 1069 },
  { t: 1070 },
  { t: 1071 },
  { t: 1072 },
  { t: 1073 },
  { t: 1074 },
  { t: 1075 },
  { t: 1076 },
  { t: 1077 },
  { t: 1078 },
  { t: 1079 },
  { t: 1080 },
  { t: 1081 },
  { t: 1082 },
  { t: 1083 },
  { t: 1084 },
  { t: 1085 },
  { t: 1086 },
  { t: 1087 },
  { t: 1088 },
  { t: 1089 },
  { t: 1090 },
  { t: 1091 },
  { t: 1092 },
  { t: 1093 },
  { t: 1094 }
]

describe('physics: sprintForward_20t', () => {
  it('matches recorded client state per tick', () => {
    const h = makeHarness({ version: "1.26.10", scenario: 'sprintForward_20t', softFailures: true })
    h.runScenario({ name: 'sprintForward_20t', ticks: TICKS })
  })
})
