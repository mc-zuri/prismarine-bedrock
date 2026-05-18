'use strict'

// Generated from .proxy.bin recording — do not edit by hand.
// Scenario: 1.21.0_ice_sprint
// Frames: 44  (ticks 5453..5496)
//
// Each entry is a PAI diff. The first entry diffs from DEFAULT_PAI in
// _helpers.js; every subsequent entry diffs from the previous tick's
// full PAI. The harness reconstructs full PAI per tick and validates.

const { makeHarness } = require('./_helpers')

const TICKS = [
  { t: 5453, position: { x: 0.5, y: 1.6200100183486938, z: 600.5 }, yaw: -0.000030517578125, headYaw: -0.000030517578125, delta: { y: -0.07840000092983246 }, inputs: { blockBreakingDelayEnabled: true, verticalCollision: true } },
  { t: 5454 },
  { t: 5455 },
  { t: 5456 },
  { t: 5457, yaw: 0, delta: { y: 0 }, inputs: { handledTeleport: true } },
  { t: 5458, yaw: -0.000030517578125, delta: { y: -0.07840000092983246 }, inputs: { handledTeleport: false, verticalCollision: false } },
  { t: 5459, inputs: { verticalCollision: true } },
  { t: 5460 },
  { t: 5461 },
  { t: 5462 },
  { t: 5463 },
  { t: 5464 },
  { t: 5465 },
  { t: 5466 },
  { t: 5467 },
  { t: 5468 },
  { t: 5469 },
  { t: 5470 },
  { t: 5471 },
  { t: 5472 },
  { t: 5473 },
  { t: 5474 },
  { t: 5475 },
  { t: 5476 },
  { t: 5477 },
  { t: 5478 },
  { t: 5479 },
  { t: 5480 },
  { t: 5481 },
  { t: 5482 },
  { t: 5483 },
  { t: 5484 },
  { t: 5485 },
  { t: 5486 },
  { t: 5487 },
  { t: 5488 },
  { t: 5489 },
  { t: 5490 },
  { t: 5491 },
  { t: 5492 },
  { t: 5493 },
  { t: 5494 },
  { t: 5495 },
  { t: 5496 }
]

describe('physics: ice_sprint', () => {
  it('matches recorded client state per tick', () => {
    const h = makeHarness({ version: "1.26.10", scenario: 'ice_sprint', softFailures: true })
    h.runScenario({ name: 'ice_sprint', ticks: TICKS })
  })
})
