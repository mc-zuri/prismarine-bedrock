'use strict'

// Generated from .proxy.bin recording — do not edit by hand.
// Scenario: 1.21.0_freeze_immune_leather_stand
// Frames: 48  (ticks 15407..15454)
//
// Each entry is a PAI diff. The first entry diffs from DEFAULT_PAI in
// _helpers.js; every subsequent entry diffs from the previous tick's
// full PAI. The harness reconstructs full PAI per tick and validates.

const { makeHarness } = require('./_helpers')

const TICKS = [
  { t: 15407, position: { x: 0.5, y: 1.6200100183486938, z: 1595.5 }, yaw: -0.000030517578125, headYaw: -0.000030517578125, delta: { y: -0.07840000092983246 }, inputs: { blockBreakingDelayEnabled: true, verticalCollision: true } },
  { t: 15408 },
  { t: 15409 },
  { t: 15410 },
  { t: 15411 },
  { t: 15412, position: { y: 2.6200098991394043, z: 1600.5 }, yaw: 0, delta: { y: 0 }, inputs: { handledTeleport: true } },
  { t: 15413, yaw: -0.000030517578125, delta: { y: -0.07840000092983246 }, inputs: { handledTeleport: false, verticalCollision: false } },
  { t: 15414, inputs: { verticalCollision: true } },
  { t: 15415 },
  { t: 15416 },
  { t: 15417 },
  { t: 15418 },
  { t: 15419 },
  { t: 15420 },
  { t: 15421 },
  { t: 15422 },
  { t: 15423 },
  { t: 15424 },
  { t: 15425 },
  { t: 15426 },
  { t: 15427 },
  { t: 15428 },
  { t: 15429 },
  { t: 15430 },
  { t: 15431 },
  { t: 15432 },
  { t: 15433 },
  { t: 15434 },
  { t: 15435 },
  { t: 15436 },
  { t: 15437 },
  { t: 15438 },
  { t: 15439 },
  { t: 15440 },
  { t: 15441 },
  { t: 15442 },
  { t: 15443 },
  { t: 15444 },
  { t: 15445 },
  { t: 15446 },
  { t: 15447 },
  { t: 15448 },
  { t: 15449 },
  { t: 15450 },
  { t: 15451 },
  { t: 15452 },
  { t: 15453 },
  { t: 15454 }
]

describe('physics: freeze_immune_leather_stand', () => {
  it('matches recorded client state per tick', () => {
    const h = makeHarness({ version: "1.26.10", scenario: 'freeze_immune_leather_stand', softFailures: true })
    h.runScenario({ name: 'freeze_immune_leather_stand', ticks: TICKS })
  })
})
