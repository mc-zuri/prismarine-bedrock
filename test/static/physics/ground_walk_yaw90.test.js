'use strict'

// Generated from .proxy.bin recording — do not edit by hand.
// Scenario: 1.21.0_ground_walk_yaw90
// Frames: 34  (ticks 4637..4670)
//
// Each entry is a PAI diff. The first entry diffs from DEFAULT_PAI in
// _helpers.js; every subsequent entry diffs from the previous tick's
// full PAI. The harness reconstructs full PAI per tick and validates.

const { makeHarness } = require('./_helpers')

const TICKS = [
  { t: 4637, position: { x: 0.5, y: 1.6200100183486938, z: 0.5 }, yaw: -0.000030517578125, headYaw: -0.000030517578125, delta: { y: -0.07840000092983246 }, inputs: { blockBreakingDelayEnabled: true, verticalCollision: true } },
  { t: 4638 },
  { t: 4639 },
  { t: 4640 },
  { t: 4641 },
  { t: 4642, yaw: 90, delta: { y: 0 }, inputs: { handledTeleport: true } },
  { t: 4643, headYaw: 90, delta: { y: -0.07840000092983246 }, inputs: { handledTeleport: false, verticalCollision: false } },
  { t: 4644, inputs: { verticalCollision: true } },
  { t: 4645 },
  { t: 4646 },
  { t: 4647 },
  { t: 4648 },
  { t: 4649 },
  { t: 4650 },
  { t: 4651 },
  { t: 4652 },
  { t: 4653 },
  { t: 4654 },
  { t: 4655 },
  { t: 4656 },
  { t: 4657 },
  { t: 4658 },
  { t: 4659 },
  { t: 4660 },
  { t: 4661 },
  { t: 4662 },
  { t: 4663 },
  { t: 4664 },
  { t: 4665 },
  { t: 4666 },
  { t: 4667 },
  { t: 4668 },
  { t: 4669 },
  { t: 4670 }
]

describe('physics: ground_walk_yaw90', () => {
  it('matches recorded client state per tick', () => {
    const h = makeHarness({ version: "1.26.10", scenario: 'ground_walk_yaw90', softFailures: true })
    h.runScenario({ name: 'ground_walk_yaw90', ticks: TICKS })
  })
})
