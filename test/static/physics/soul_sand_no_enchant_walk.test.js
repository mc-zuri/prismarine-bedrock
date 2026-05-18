'use strict'

// Generated from .proxy.bin recording — do not edit by hand.
// Scenario: 1.21.0_soul_sand_no_enchant_walk
// Frames: 34  (ticks 14579..14612)
//
// Each entry is a PAI diff. The first entry diffs from DEFAULT_PAI in
// _helpers.js; every subsequent entry diffs from the previous tick's
// full PAI. The harness reconstructs full PAI per tick and validates.

const { makeHarness } = require('./_helpers')

const TICKS = [
  { t: 14579, position: { x: 0.5, y: 1.6200100183486938, z: 888.5 }, yaw: -0.000030517578125, headYaw: -0.000030517578125, delta: { y: -0.07840000092983246 }, inputs: { blockBreakingDelayEnabled: true, verticalCollision: true } },
  { t: 14580 },
  { t: 14581 },
  { t: 14582 },
  { t: 14583 },
  { t: 14584 },
  { t: 14585, position: { z: 900.5 }, yaw: 0, delta: { y: 0 }, inputs: { handledTeleport: true } },
  { t: 14586, yaw: -0.000030517578125, delta: { y: -0.07840000092983246 }, inputs: { handledTeleport: false, verticalCollision: false } },
  { t: 14587, position: { y: 1.5416100025177002 }, delta: { y: -0.1552319973707199 } },
  { t: 14588, position: { y: 1.4950100183486938 }, delta: { y: -0.07840000092983246 }, inputs: { verticalCollision: true } },
  { t: 14589 },
  { t: 14590 },
  { t: 14591 },
  { t: 14592 },
  { t: 14593 },
  { t: 14594 },
  { t: 14595 },
  { t: 14596 },
  { t: 14597 },
  { t: 14598 },
  { t: 14599 },
  { t: 14600 },
  { t: 14601 },
  { t: 14602 },
  { t: 14603 },
  { t: 14604 },
  { t: 14605 },
  { t: 14606 },
  { t: 14607 },
  { t: 14608 },
  { t: 14609 },
  { t: 14610 },
  { t: 14611 },
  { t: 14612 }
]

describe('physics: soul_sand_no_enchant_walk', () => {
  it('matches recorded client state per tick', () => {
    const h = makeHarness({ version: "1.26.10", scenario: 'soul_sand_no_enchant_walk', softFailures: true })
    h.runScenario({ name: 'soul_sand_no_enchant_walk', ticks: TICKS })
  })
})
