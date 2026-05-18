'use strict'

// Generated from .proxy.bin recording — do not edit by hand.
// Scenario: 1.21.0_ladder_sneak_hold
// Frames: 48  (ticks 8431..8478)
//
// Each entry is a PAI diff. The first entry diffs from DEFAULT_PAI in
// _helpers.js; every subsequent entry diffs from the previous tick's
// full PAI. The harness reconstructs full PAI per tick and validates.

const { makeHarness } = require('./_helpers')

const TICKS = [
  { t: 8431, position: { x: 0.5, y: 1.6200100183486938, z: 1302.5 }, yaw: -0.000030517578125, headYaw: -0.000030517578125, delta: { y: -0.07840000092983246 }, inputs: { blockBreakingDelayEnabled: true, verticalCollision: true } },
  { t: 8432 },
  { t: 8433 },
  { t: 8434 },
  { t: 8435 },
  { t: 8436 },
  { t: 8437, yaw: 0, delta: { y: 0 }, inputs: { handledTeleport: true } },
  { t: 8438, yaw: -0.000030517578125, delta: { y: -0.07840000092983246 }, inputs: { handledTeleport: false, verticalCollision: false } },
  { t: 8439, inputs: { verticalCollision: true } },
  { t: 8440 },
  { t: 8441 },
  { t: 8442 },
  { t: 8443 },
  { t: 8444 },
  { t: 8445 },
  { t: 8446 },
  { t: 8447 },
  { t: 8448 },
  { t: 8449 },
  { t: 8450 },
  { t: 8451 },
  { t: 8452 },
  { t: 8453 },
  { t: 8454 },
  { t: 8455 },
  { t: 8456 },
  { t: 8457 },
  { t: 8458 },
  { t: 8459 },
  { t: 8460 },
  { t: 8461 },
  { t: 8462 },
  { t: 8463 },
  { t: 8464 },
  { t: 8465 },
  { t: 8466 },
  { t: 8467 },
  { t: 8468 },
  { t: 8469 },
  { t: 8470 },
  { t: 8471 },
  { t: 8472 },
  { t: 8473 },
  { t: 8474 },
  { t: 8475 },
  { t: 8476 },
  { t: 8477 },
  { t: 8478 }
]

describe('physics: ladder_sneak_hold', () => {
  it('matches recorded client state per tick', () => {
    const h = makeHarness({ version: "1.26.10", scenario: 'ladder_sneak_hold', softFailures: true })
    h.runScenario({ name: 'ladder_sneak_hold', ticks: TICKS })
  })
})
