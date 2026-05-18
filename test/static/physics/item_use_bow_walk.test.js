'use strict'

// Generated from .proxy.bin recording — do not edit by hand.
// Scenario: 1.21.0_item_use_bow_walk
// Frames: 54  (ticks 15709..15762)
//
// Each entry is a PAI diff. The first entry diffs from DEFAULT_PAI in
// _helpers.js; every subsequent entry diffs from the previous tick's
// full PAI. The harness reconstructs full PAI per tick and validates.

const { makeHarness } = require('./_helpers')

const TICKS = [
  { t: 15709, position: { x: 0.5, y: 1.6200100183486938, z: -31.5 }, yaw: -0.000030517578125, headYaw: -0.000030517578125, delta: { y: -0.07840000092983246 }, inputs: { blockBreakingDelayEnabled: true, verticalCollision: true } },
  { t: 15710 },
  { t: 15711 },
  { t: 15712 },
  { t: 15713 },
  { t: 15714, position: { z: 0.5 }, yaw: 0, delta: { y: 0 }, inputs: { handledTeleport: true } },
  { t: 15715, yaw: -0.000030517578125, delta: { y: -0.07840000092983246 }, inputs: { handledTeleport: false, verticalCollision: false } },
  { t: 15716, inputs: { verticalCollision: true } },
  { t: 15717 },
  { t: 15718 },
  { t: 15719 },
  { t: 15720 },
  { t: 15721 },
  { t: 15722 },
  { t: 15723 },
  { t: 15724 },
  { t: 15725 },
  { t: 15726 },
  { t: 15727 },
  { t: 15728 },
  { t: 15729 },
  { t: 15730 },
  { t: 15731 },
  { t: 15732 },
  { t: 15733 },
  { t: 15734 },
  { t: 15735 },
  { t: 15736 },
  { t: 15737 },
  { t: 15738 },
  { t: 15739 },
  { t: 15740 },
  { t: 15741 },
  { t: 15742 },
  { t: 15743 },
  { t: 15744 },
  { t: 15745 },
  { t: 15746 },
  { t: 15747 },
  { t: 15748 },
  { t: 15749 },
  { t: 15750 },
  { t: 15751 },
  { t: 15752 },
  { t: 15753 },
  { t: 15754 },
  { t: 15755 },
  { t: 15756 },
  { t: 15757 },
  { t: 15758 },
  { t: 15759 },
  { t: 15760 },
  { t: 15761 },
  { t: 15762 }
]

describe('physics: item_use_bow_walk', () => {
  it('matches recorded client state per tick', () => {
    const h = makeHarness({ version: "1.26.10", scenario: 'item_use_bow_walk', softFailures: true })
    h.runScenario({ name: 'item_use_bow_walk', ticks: TICKS })
  })
})
