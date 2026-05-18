'use strict'

// Generated from .proxy.bin recording — do not edit by hand.
// Scenario: 1.21.0_soul_speed_1_walk_sand
// Frames: 39  (ticks 13849..13887)
//
// Each entry is a PAI diff. The first entry diffs from DEFAULT_PAI in
// _helpers.js; every subsequent entry diffs from the previous tick's
// full PAI. The harness reconstructs full PAI per tick and validates.

const { makeHarness } = require('./_helpers')

const TICKS = [
  { t: 13849, position: { x: 0.5, y: 1.6200100183486938, z: 888.5 }, yaw: -0.000030517578125, headYaw: -0.000030517578125, delta: { y: -0.07840000092983246 }, inputs: { blockBreakingDelayEnabled: true, verticalCollision: true } },
  { t: 13850 },
  { t: 13851 },
  { t: 13852 },
  { t: 13853 },
  { t: 13854 },
  { t: 13855, position: { z: 900.5 }, delta: { y: 0 }, inputs: { handledTeleport: true } },
  { t: 13856, delta: { y: -0.07840000092983246 }, inputs: { handledTeleport: false, verticalCollision: false } },
  { t: 13857, position: { y: 1.5416100025177002 }, delta: { y: -0.1552319973707199 } },
  { t: 13858, position: { y: 1.4950100183486938 }, delta: { y: -0.07840000092983246 }, inputs: { verticalCollision: true } },
  { t: 13859 },
  { t: 13860 },
  { t: 13861 },
  { t: 13862 },
  { t: 13863 },
  { t: 13864 },
  { t: 13865 },
  { t: 13866 },
  { t: 13867 },
  { t: 13868 },
  { t: 13869 },
  { t: 13870 },
  { t: 13871 },
  { t: 13872 },
  { t: 13873 },
  { t: 13874 },
  { t: 13875 },
  { t: 13876 },
  { t: 13877 },
  { t: 13878 },
  { t: 13879 },
  { t: 13880 },
  { t: 13881 },
  { t: 13882 },
  { t: 13883 },
  { t: 13884 },
  { t: 13885 },
  { t: 13886 },
  { t: 13887 }
]

describe('physics: soul_speed_1_walk_sand', () => {
  it('matches recorded client state per tick', () => {
    const h = makeHarness({ version: "1.26.10", scenario: 'soul_speed_1_walk_sand', softFailures: true })
    h.runScenario({ name: 'soul_speed_1_walk_sand', ticks: TICKS })
  })
})
