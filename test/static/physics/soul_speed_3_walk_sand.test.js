'use strict'

// Generated from .proxy.bin recording — do not edit by hand.
// Scenario: 1.21.0_soul_speed_3_walk_sand
// Frames: 39  (ticks 14105..14143)
//
// Each entry is a PAI diff. The first entry diffs from DEFAULT_PAI in
// _helpers.js; every subsequent entry diffs from the previous tick's
// full PAI. The harness reconstructs full PAI per tick and validates.

const { makeHarness } = require('./_helpers')

const TICKS = [
  { t: 14105, position: { x: 0.5, y: 1.4950100183486938, z: 900.5 }, yaw: -0.000030517578125, headYaw: -0.000030517578125, delta: { y: -0.07840000092983246 }, inputs: { blockBreakingDelayEnabled: true, verticalCollision: true } },
  { t: 14106 },
  { t: 14107 },
  { t: 14108 },
  { t: 14109, position: { y: 1.6200100183486938 }, yaw: 0, delta: { y: 0 }, inputs: { handledTeleport: true } },
  { t: 14110, yaw: -0.000030517578125, delta: { y: -0.07840000092983246 }, inputs: { handledTeleport: false, verticalCollision: false } },
  { t: 14111, position: { y: 1.5416100025177002 }, delta: { y: -0.1552319973707199 } },
  { t: 14112, position: { y: 1.4950100183486938 }, delta: { y: -0.07840000092983246 }, inputs: { verticalCollision: true } },
  { t: 14113 },
  { t: 14114 },
  { t: 14115 },
  { t: 14116 },
  { t: 14117 },
  { t: 14118 },
  { t: 14119 },
  { t: 14120 },
  { t: 14121 },
  { t: 14122 },
  { t: 14123 },
  { t: 14124 },
  { t: 14125 },
  { t: 14126 },
  { t: 14127 },
  { t: 14128 },
  { t: 14129 },
  { t: 14130 },
  { t: 14131 },
  { t: 14132 },
  { t: 14133 },
  { t: 14134 },
  { t: 14135 },
  { t: 14136 },
  { t: 14137 },
  { t: 14138 },
  { t: 14139 },
  { t: 14140 },
  { t: 14141 },
  { t: 14142 },
  { t: 14143 }
]

describe('physics: soul_speed_3_walk_sand', () => {
  it('matches recorded client state per tick', () => {
    const h = makeHarness({ version: "1.26.10", scenario: 'soul_speed_3_walk_sand', softFailures: true })
    h.runScenario({ name: 'soul_speed_3_walk_sand', ticks: TICKS })
  })
})
