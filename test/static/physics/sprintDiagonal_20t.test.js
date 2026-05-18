'use strict'

// Generated from .proxy.bin recording — do not edit by hand.
// Scenario: 1.21.0_sprintDiagonal_20t
// Frames: 34  (ticks 1151..1184)
//
// Each entry is a PAI diff. The first entry diffs from DEFAULT_PAI in
// _helpers.js; every subsequent entry diffs from the previous tick's
// full PAI. The harness reconstructs full PAI per tick and validates.

const { makeHarness } = require('./_helpers')

const TICKS = [
  { t: 1151, position: { x: 0.5, y: 1.6200100183486938, z: -31.5 }, yaw: 90, headYaw: 90, delta: { y: -0.07840000092983246 }, inputs: { blockBreakingDelayEnabled: true, verticalCollision: true } },
  { t: 1152 },
  { t: 1153 },
  { t: 1154 },
  { t: 1155 },
  { t: 1156 },
  { t: 1157 },
  { t: 1158 },
  { t: 1159 },
  { t: 1160 },
  { t: 1161 },
  { t: 1162 },
  { t: 1163 },
  { t: 1164 },
  { t: 1165 },
  { t: 1166 },
  { t: 1167 },
  { t: 1168 },
  { t: 1169 },
  { t: 1170 },
  { t: 1171 },
  { t: 1172 },
  { t: 1173 },
  { t: 1174 },
  { t: 1175 },
  { t: 1176 },
  { t: 1177 },
  { t: 1178 },
  { t: 1179 },
  { t: 1180 },
  { t: 1181 },
  { t: 1182 },
  { t: 1183 },
  { t: 1184 }
]

describe('physics: sprintDiagonal_20t', () => {
  it('matches recorded client state per tick', () => {
    const h = makeHarness({ version: "1.26.10", scenario: 'sprintDiagonal_20t', softFailures: true })
    h.runScenario({ name: 'sprintDiagonal_20t', ticks: TICKS })
  })
})
