'use strict'

// Generated from .proxy.bin recording — do not edit by hand.
// Scenario: 1.21.0_sneakForward_20t
// Frames: 34  (ticks 1196..1229)
//
// Each entry is a PAI diff. The first entry diffs from DEFAULT_PAI in
// _helpers.js; every subsequent entry diffs from the previous tick's
// full PAI. The harness reconstructs full PAI per tick and validates.

const { makeHarness } = require('./_helpers')

const TICKS = [
  { t: 1196, position: { x: 0.5, y: 1.6200100183486938, z: -31.5 }, yaw: 90, headYaw: 90, delta: { y: -0.07840000092983246 }, inputs: { blockBreakingDelayEnabled: true, verticalCollision: true } },
  { t: 1197 },
  { t: 1198 },
  { t: 1199 },
  { t: 1200 },
  { t: 1201 },
  { t: 1202 },
  { t: 1203 },
  { t: 1204 },
  { t: 1205 },
  { t: 1206 },
  { t: 1207 },
  { t: 1208 },
  { t: 1209 },
  { t: 1210 },
  { t: 1211 },
  { t: 1212 },
  { t: 1213 },
  { t: 1214 },
  { t: 1215 },
  { t: 1216 },
  { t: 1217 },
  { t: 1218 },
  { t: 1219 },
  { t: 1220 },
  { t: 1221 },
  { t: 1222 },
  { t: 1223 },
  { t: 1224 },
  { t: 1225 },
  { t: 1226 },
  { t: 1227 },
  { t: 1228 },
  { t: 1229 }
]

describe('physics: sneakForward_20t', () => {
  it('matches recorded client state per tick', () => {
    const h = makeHarness({ version: "1.26.10", scenario: 'sneakForward_20t', softFailures: true })
    h.runScenario({ name: 'sneakForward_20t', ticks: TICKS })
  })
})
