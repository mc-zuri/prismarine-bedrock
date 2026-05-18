'use strict'

// Generated from .proxy.bin recording — do not edit by hand.
// Scenario: 1.21.0_ground_sprint_diagonal
// Frames: 34  (ticks 4450..4483)
//
// Each entry is a PAI diff. The first entry diffs from DEFAULT_PAI in
// _helpers.js; every subsequent entry diffs from the previous tick's
// full PAI. The harness reconstructs full PAI per tick and validates.

const { makeHarness } = require('./_helpers')

const TICKS = [
  { t: 4450, position: { x: 0.5, y: 1.6200100183486938, z: 0.5 }, yaw: -0.000030517578125, headYaw: -0.000030517578125, delta: { y: -0.07840000092983246 }, inputs: { blockBreakingDelayEnabled: true, verticalCollision: true } },
  { t: 4451 },
  { t: 4452 },
  { t: 4453 },
  { t: 4454, yaw: 0, delta: { y: 0 }, inputs: { handledTeleport: true } },
  { t: 4455, yaw: -0.000030517578125, delta: { y: -0.07840000092983246 }, inputs: { handledTeleport: false, verticalCollision: false } },
  { t: 4456, inputs: { verticalCollision: true } },
  { t: 4457 },
  { t: 4458 },
  { t: 4459 },
  { t: 4460 },
  { t: 4461 },
  { t: 4462 },
  { t: 4463 },
  { t: 4464 },
  { t: 4465 },
  { t: 4466 },
  { t: 4467 },
  { t: 4468 },
  { t: 4469 },
  { t: 4470 },
  { t: 4471 },
  { t: 4472 },
  { t: 4473 },
  { t: 4474 },
  { t: 4475 },
  { t: 4476 },
  { t: 4477 },
  { t: 4478 },
  { t: 4479 },
  { t: 4480 },
  { t: 4481 },
  { t: 4482 },
  { t: 4483 }
]

describe('physics: ground_sprint_diagonal', () => {
  it('matches recorded client state per tick', () => {
    const h = makeHarness({ version: "1.26.10", scenario: 'ground_sprint_diagonal', softFailures: true })
    h.runScenario({ name: 'ground_sprint_diagonal', ticks: TICKS })
  })
})
