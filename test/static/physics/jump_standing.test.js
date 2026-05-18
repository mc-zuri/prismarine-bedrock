'use strict'

// Generated from .proxy.bin recording — do not edit by hand.
// Scenario: 1.21.0_jump_standing
// Frames: 40  (ticks 4701..4740)
//
// Each entry is a PAI diff. The first entry diffs from DEFAULT_PAI in
// _helpers.js; every subsequent entry diffs from the previous tick's
// full PAI. The harness reconstructs full PAI per tick and validates.

const { makeHarness } = require('./_helpers')

const TICKS = [
  { t: 4701, position: { x: 0.5, y: 1.6200100183486938, z: 0.5 }, yaw: 90, headYaw: 90, delta: { y: -0.07840000092983246 }, inputs: { blockBreakingDelayEnabled: true, verticalCollision: true } },
  { t: 4702 },
  { t: 4703 },
  { t: 4704 },
  { t: 4705 },
  { t: 4706, yaw: 0, delta: { y: 0 }, inputs: { handledTeleport: true } },
  { t: 4707, yaw: -0.000030517578125, headYaw: -0.000030517578125, delta: { y: -0.07840000092983246 }, inputs: { handledTeleport: false, verticalCollision: false } },
  { t: 4708, inputs: { verticalCollision: true } },
  { t: 4709 },
  { t: 4710 },
  { t: 4711 },
  { t: 4712 },
  { t: 4713 },
  { t: 4714 },
  { t: 4715 },
  { t: 4716 },
  { t: 4717 },
  { t: 4718 },
  { t: 4719 },
  { t: 4720 },
  { t: 4721 },
  { t: 4722 },
  { t: 4723 },
  { t: 4724 },
  { t: 4725 },
  { t: 4726 },
  { t: 4727 },
  { t: 4728 },
  { t: 4729 },
  { t: 4730 },
  { t: 4731 },
  { t: 4732 },
  { t: 4733 },
  { t: 4734 },
  { t: 4735 },
  { t: 4736 },
  { t: 4737 },
  { t: 4738 },
  { t: 4739 },
  { t: 4740 }
]

describe('physics: jump_standing', () => {
  it('matches recorded client state per tick', () => {
    const h = makeHarness({ version: "1.26.10", scenario: 'jump_standing', softFailures: true })
    h.runScenario({ name: 'jump_standing', ticks: TICKS })
  })
})
