'use strict'

// Generated from .proxy.bin recording — do not edit by hand.
// Scenario: 1.21.0_honey_jump
// Frames: 40  (ticks 6002..6041)
//
// Each entry is a PAI diff. The first entry diffs from DEFAULT_PAI in
// _helpers.js; every subsequent entry diffs from the previous tick's
// full PAI. The harness reconstructs full PAI per tick and validates.

const { makeHarness } = require('./_helpers')

const TICKS = [
  { t: 6002, position: { x: 0.5, y: 1.6200100183486938, z: 1100.5 }, yaw: -0.000030517578125, headYaw: -0.000030517578125, delta: { y: -0.07840000092983246 }, inputs: { blockBreakingDelayEnabled: true, verticalCollision: true } },
  { t: 6003 },
  { t: 6004 },
  { t: 6005 },
  { t: 6006 },
  { t: 6007, yaw: 0, delta: { y: 0 }, inputs: { handledTeleport: true } },
  { t: 6008, yaw: -0.000030517578125, delta: { y: -0.07840000092983246 }, inputs: { handledTeleport: false, verticalCollision: false } },
  { t: 6009, inputs: { verticalCollision: true } },
  { t: 6010 },
  { t: 6011 },
  { t: 6012 },
  { t: 6013 },
  { t: 6014 },
  { t: 6015 },
  { t: 6016 },
  { t: 6017 },
  { t: 6018 },
  { t: 6019 },
  { t: 6020 },
  { t: 6021 },
  { t: 6022 },
  { t: 6023 },
  { t: 6024 },
  { t: 6025 },
  { t: 6026 },
  { t: 6027 },
  { t: 6028 },
  { t: 6029 },
  { t: 6030 },
  { t: 6031 },
  { t: 6032 },
  { t: 6033 },
  { t: 6034 },
  { t: 6035 },
  { t: 6036 },
  { t: 6037 },
  { t: 6038 },
  { t: 6039 },
  { t: 6040 },
  { t: 6041 }
]

describe('physics: honey_jump', () => {
  it('matches recorded client state per tick', () => {
    const h = makeHarness({ version: "1.26.10", scenario: 'honey_jump', softFailures: true })
    h.runScenario({ name: 'honey_jump', ticks: TICKS })
  })
})
