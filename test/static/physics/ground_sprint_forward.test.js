'use strict'

// Generated from .proxy.bin recording — do not edit by hand.
// Scenario: 1.21.0_ground_sprint_forward
// Frames: 34  (ticks 4204..4237)
//
// Each entry is a PAI diff. The first entry diffs from DEFAULT_PAI in
// _helpers.js; every subsequent entry diffs from the previous tick's
// full PAI. The harness reconstructs full PAI per tick and validates.

const { makeHarness } = require('./_helpers')

const TICKS = [
  { t: 4204, position: { x: 0.5, y: 1.6200100183486938, z: 0.5 }, yaw: -0.000030517578125, headYaw: -0.000030517578125, delta: { y: -0.07840000092983246 }, inputs: { blockBreakingDelayEnabled: true, verticalCollision: true } },
  { t: 4205 },
  { t: 4206 },
  { t: 4207 },
  { t: 4208 },
  { t: 4209, yaw: 0, delta: { y: 0 }, inputs: { handledTeleport: true } },
  { t: 4210, yaw: -0.000030517578125, delta: { y: -0.07840000092983246 }, inputs: { handledTeleport: false, verticalCollision: false } },
  { t: 4211, inputs: { verticalCollision: true } },
  { t: 4212 },
  { t: 4213 },
  { t: 4214 },
  { t: 4215 },
  { t: 4216 },
  { t: 4217 },
  { t: 4218 },
  { t: 4219 },
  { t: 4220 },
  { t: 4221 },
  { t: 4222 },
  { t: 4223 },
  { t: 4224 },
  { t: 4225 },
  { t: 4226 },
  { t: 4227 },
  { t: 4228 },
  { t: 4229 },
  { t: 4230 },
  { t: 4231 },
  { t: 4232 },
  { t: 4233 },
  { t: 4234 },
  { t: 4235 },
  { t: 4236 },
  { t: 4237 }
]

describe('physics: ground_sprint_forward', () => {
  it('matches recorded client state per tick', () => {
    const h = makeHarness({ version: "1.26.10", scenario: 'ground_sprint_forward', softFailures: true })
    h.runScenario({ name: 'ground_sprint_forward', ticks: TICKS })
  })
})
