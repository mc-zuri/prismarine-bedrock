'use strict'

// Generated from .proxy.bin recording — do not edit by hand.
// Scenario: 1.21.0_soul_speed_3_sprint_sand
// Frames: 39  (ticks 14169..14207)
//
// Each entry is a PAI diff. The first entry diffs from DEFAULT_PAI in
// _helpers.js; every subsequent entry diffs from the previous tick's
// full PAI. The harness reconstructs full PAI per tick and validates.

const { makeHarness } = require('./_helpers')

const TICKS = [
  { t: 14169, position: { x: 0.5, y: 1.4950100183486938, z: 900.5 }, yaw: -0.000030517578125, headYaw: -0.000030517578125, delta: { y: -0.07840000092983246 }, inputs: { blockBreakingDelayEnabled: true, verticalCollision: true } },
  { t: 14170 },
  { t: 14171 },
  { t: 14172 },
  { t: 14173 },
  { t: 14174, position: { y: 1.6200100183486938 }, yaw: 0, delta: { y: 0 }, inputs: { handledTeleport: true } },
  { t: 14175, yaw: -0.000030517578125, delta: { y: -0.07840000092983246 }, inputs: { handledTeleport: false, verticalCollision: false } },
  { t: 14176, position: { y: 1.5416100025177002 }, delta: { y: -0.1552319973707199 } },
  { t: 14177, position: { y: 1.4950100183486938 }, delta: { y: -0.07840000092983246 }, inputs: { verticalCollision: true } },
  { t: 14178 },
  { t: 14179 },
  { t: 14180 },
  { t: 14181 },
  { t: 14182 },
  { t: 14183 },
  { t: 14184 },
  { t: 14185 },
  { t: 14186 },
  { t: 14187 },
  { t: 14188 },
  { t: 14189 },
  { t: 14190 },
  { t: 14191 },
  { t: 14192 },
  { t: 14193 },
  { t: 14194 },
  { t: 14195 },
  { t: 14196 },
  { t: 14197 },
  { t: 14198 },
  { t: 14199 },
  { t: 14200 },
  { t: 14201 },
  { t: 14202 },
  { t: 14203 },
  { t: 14204 },
  { t: 14205 },
  { t: 14206 },
  { t: 14207 }
]

describe('physics: soul_speed_3_sprint_sand', () => {
  it('matches recorded client state per tick', () => {
    const h = makeHarness({ version: "1.26.10", scenario: 'soul_speed_3_sprint_sand', softFailures: true })
    h.runScenario({ name: 'soul_speed_3_sprint_sand', ticks: TICKS })
  })
})
