'use strict'

// Generated from .proxy.bin recording — do not edit by hand.
// Scenario: 1.21.0_soul_speed_2_sprint_sand
// Frames: 39  (ticks 14041..14079)
//
// Each entry is a PAI diff. The first entry diffs from DEFAULT_PAI in
// _helpers.js; every subsequent entry diffs from the previous tick's
// full PAI. The harness reconstructs full PAI per tick and validates.

const { makeHarness } = require('./_helpers')

const TICKS = [
  { t: 14041, position: { x: 0.5, y: 1.4950100183486938, z: 900.5 }, yaw: -0.000030517578125, headYaw: -0.000030517578125, delta: { y: -0.07840000092983246 }, inputs: { blockBreakingDelayEnabled: true, verticalCollision: true } },
  { t: 14042 },
  { t: 14043 },
  { t: 14044 },
  { t: 14045 },
  { t: 14046, position: { y: 1.6200100183486938 }, yaw: 0, delta: { y: 0 }, inputs: { handledTeleport: true } },
  { t: 14047, yaw: -0.000030517578125, delta: { y: -0.07840000092983246 }, inputs: { handledTeleport: false, verticalCollision: false } },
  { t: 14048, position: { y: 1.5416100025177002 }, delta: { y: -0.1552319973707199 } },
  { t: 14049, position: { y: 1.4950100183486938 }, delta: { y: -0.07840000092983246 }, inputs: { verticalCollision: true } },
  { t: 14050 },
  { t: 14051 },
  { t: 14052 },
  { t: 14053 },
  { t: 14054 },
  { t: 14055 },
  { t: 14056 },
  { t: 14057 },
  { t: 14058 },
  { t: 14059 },
  { t: 14060 },
  { t: 14061 },
  { t: 14062 },
  { t: 14063 },
  { t: 14064 },
  { t: 14065 },
  { t: 14066 },
  { t: 14067 },
  { t: 14068 },
  { t: 14069 },
  { t: 14070 },
  { t: 14071 },
  { t: 14072 },
  { t: 14073 },
  { t: 14074 },
  { t: 14075 },
  { t: 14076 },
  { t: 14077 },
  { t: 14078 },
  { t: 14079 }
]

describe('physics: soul_speed_2_sprint_sand', () => {
  it('matches recorded client state per tick', () => {
    const h = makeHarness({ version: "1.26.10", scenario: 'soul_speed_2_sprint_sand', softFailures: true })
    h.runScenario({ name: 'soul_speed_2_sprint_sand', ticks: TICKS })
  })
})
