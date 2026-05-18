'use strict'

// Generated from .proxy.bin recording — do not edit by hand.
// Scenario: 1.21.0_teleport_while_walking
// Frames: 39  (ticks 10133..10171)
//
// Each entry is a PAI diff. The first entry diffs from DEFAULT_PAI in
// _helpers.js; every subsequent entry diffs from the previous tick's
// full PAI. The harness reconstructs full PAI per tick and validates.

const { makeHarness } = require('./_helpers')

const TICKS = [
  { t: 10133, position: { x: 0.5, y: 1.6200100183486938, z: 0.5 }, yaw: -0.000030517578125, headYaw: -0.000030517578125, delta: { y: -0.07840000092983246 }, inputs: { blockBreakingDelayEnabled: true, verticalCollision: true } },
  { t: 10134 },
  { t: 10135 },
  { t: 10136 },
  { t: 10137 },
  { t: 10138, yaw: 0, delta: { y: 0 }, inputs: { handledTeleport: true } },
  { t: 10139, yaw: -0.000030517578125, delta: { y: -0.07840000092983246 }, inputs: { handledTeleport: false, verticalCollision: false } },
  { t: 10140, inputs: { verticalCollision: true } },
  { t: 10141 },
  { t: 10142 },
  { t: 10143 },
  { t: 10144 },
  { t: 10145 },
  { t: 10146 },
  { t: 10147 },
  { t: 10148 },
  { t: 10149 },
  { t: 10150 },
  { t: 10151 },
  { t: 10152 },
  { t: 10153 },
  { t: 10154 },
  { t: 10155, position: { x: 10.5 }, yaw: 0, delta: { y: 0 }, inputs: { handledTeleport: true } },
  { t: 10156, yaw: -0.000030517578125, delta: { y: -0.07840000092983246 }, inputs: { handledTeleport: false, verticalCollision: false } },
  { t: 10157, inputs: { verticalCollision: true } },
  { t: 10158 },
  { t: 10159 },
  { t: 10160 },
  { t: 10161 },
  { t: 10162 },
  { t: 10163 },
  { t: 10164 },
  { t: 10165 },
  { t: 10166 },
  { t: 10167 },
  { t: 10168 },
  { t: 10169 },
  { t: 10170 },
  { t: 10171 }
]

describe('physics: teleport_while_walking', () => {
  it('matches recorded client state per tick', () => {
    const h = makeHarness({ version: "1.26.10", scenario: 'teleport_while_walking', softFailures: true })
    h.runScenario({ name: 'teleport_while_walking', ticks: TICKS })
  })
})
