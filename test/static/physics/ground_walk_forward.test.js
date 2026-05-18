'use strict'

// Generated from .proxy.bin recording — do not edit by hand.
// Scenario: 1.21.0_ground_walk_forward
// Frames: 34  (ticks 4140..4173)
//
// Each entry is a PAI diff. The first entry diffs from DEFAULT_PAI in
// _helpers.js; every subsequent entry diffs from the previous tick's
// full PAI. The harness reconstructs full PAI per tick and validates.

const { makeHarness } = require('./_helpers')

const TICKS = [
  { t: 4140, position: { x: 0.5, y: 1.6200100183486938, z: -31.5 }, yaw: -0.000030517578125, headYaw: -0.000030517578125, delta: { y: -0.07840000092983246 }, inputs: { blockBreakingDelayEnabled: true, verticalCollision: true } },
  { t: 4141 },
  { t: 4142 },
  { t: 4143 },
  { t: 4144 },
  { t: 4145 },
  { t: 4146, position: { z: 0.5 }, delta: { y: 0 }, inputs: { handledTeleport: true } },
  { t: 4147, delta: { y: -0.07840000092983246 }, inputs: { handledTeleport: false, verticalCollision: false } },
  { t: 4148, inputs: { verticalCollision: true } },
  { t: 4149 },
  { t: 4150 },
  { t: 4151 },
  { t: 4152 },
  { t: 4153 },
  { t: 4154 },
  { t: 4155 },
  { t: 4156 },
  { t: 4157 },
  { t: 4158 },
  { t: 4159 },
  { t: 4160 },
  { t: 4161 },
  { t: 4162 },
  { t: 4163 },
  { t: 4164 },
  { t: 4165 },
  { t: 4166 },
  { t: 4167 },
  { t: 4168 },
  { t: 4169 },
  { t: 4170 },
  { t: 4171 },
  { t: 4172 },
  { t: 4173 }
]

describe('physics: ground_walk_forward', () => {
  it('matches recorded client state per tick', () => {
    const h = makeHarness({ version: "1.26.10", scenario: 'ground_walk_forward', softFailures: true })
    h.runScenario({ name: 'ground_walk_forward', ticks: TICKS })
  })
})
