'use strict'

// Generated from .proxy.bin recording — do not edit by hand.
// Scenario: 1.21.0_ground_sprint_to_sneak
// Frames: 34  (ticks 4573..4606)
//
// Each entry is a PAI diff. The first entry diffs from DEFAULT_PAI in
// _helpers.js; every subsequent entry diffs from the previous tick's
// full PAI. The harness reconstructs full PAI per tick and validates.

const { makeHarness } = require('./_helpers')

const TICKS = [
  { t: 4573, position: { x: 0.5, y: 1.6200100183486938, z: 0.5 }, yaw: -0.000030517578125, headYaw: -0.000030517578125, delta: { y: -0.07840000092983246 }, inputs: { blockBreakingDelayEnabled: true, verticalCollision: true } },
  { t: 4574 },
  { t: 4575 },
  { t: 4576 },
  { t: 4577 },
  { t: 4578 },
  { t: 4579, yaw: 0, delta: { y: 0 }, inputs: { handledTeleport: true } },
  { t: 4580, yaw: -0.000030517578125, delta: { y: -0.07840000092983246 }, inputs: { handledTeleport: false, verticalCollision: false } },
  { t: 4581, inputs: { verticalCollision: true } },
  { t: 4582 },
  { t: 4583 },
  { t: 4584 },
  { t: 4585 },
  { t: 4586 },
  { t: 4587 },
  { t: 4588 },
  { t: 4589 },
  { t: 4590 },
  { t: 4591 },
  { t: 4592 },
  { t: 4593 },
  { t: 4594 },
  { t: 4595 },
  { t: 4596 },
  { t: 4597 },
  { t: 4598 },
  { t: 4599 },
  { t: 4600 },
  { t: 4601 },
  { t: 4602 },
  { t: 4603 },
  { t: 4604 },
  { t: 4605 },
  { t: 4606 }
]

describe('physics: ground_sprint_to_sneak', () => {
  it('matches recorded client state per tick', () => {
    const h = makeHarness({ version: "1.26.10", scenario: 'ground_sprint_to_sneak', softFailures: true })
    h.runScenario({ name: 'ground_sprint_to_sneak', ticks: TICKS })
  })
})
