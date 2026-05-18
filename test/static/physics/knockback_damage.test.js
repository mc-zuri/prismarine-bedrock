'use strict'

// Generated from .proxy.bin recording — do not edit by hand.
// Scenario: 1.21.0_knockback_damage
// Frames: 14  (ticks 10089..10102)
//
// Each entry is a PAI diff. The first entry diffs from DEFAULT_PAI in
// _helpers.js; every subsequent entry diffs from the previous tick's
// full PAI. The harness reconstructs full PAI per tick and validates.

const { makeHarness } = require('./_helpers')

const TICKS = [
  { t: 10089, position: { x: 0.5, y: 1.6200100183486938, z: -31.5 }, yaw: -0.000030517578125, headYaw: -0.000030517578125, delta: { y: -0.07840000092983246 }, inputs: { blockBreakingDelayEnabled: true, verticalCollision: true } },
  { t: 10090 },
  { t: 10091 },
  { t: 10092 },
  { t: 10093 },
  { t: 10094 },
  { t: 10095, position: { z: 0.5 }, yaw: 0, delta: { y: 0 }, inputs: { handledTeleport: true } },
  { t: 10096, yaw: -0.000030517578125, delta: { y: -0.07840000092983246 }, inputs: { handledTeleport: false, verticalCollision: false } },
  { t: 10097, inputs: { verticalCollision: true } },
  { t: 10098 },
  { t: 10099 },
  { t: 10100 },
  { t: 10101 },
  { t: 10102 }
]

describe('physics: knockback_damage', () => {
  it('matches recorded client state per tick', () => {
    const h = makeHarness({ version: "1.26.10", scenario: 'knockback_damage', softFailures: true })
    h.runScenario({ name: 'knockback_damage', ticks: TICKS })
  })
})
