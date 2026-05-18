'use strict'

// Generated from .proxy.bin recording — do not edit by hand.
// Scenario: 1.21.0_edge_opposing_ws
// Frames: 29  (ticks 10960..10988)
//
// Each entry is a PAI diff. The first entry diffs from DEFAULT_PAI in
// _helpers.js; every subsequent entry diffs from the previous tick's
// full PAI. The harness reconstructs full PAI per tick and validates.

const { makeHarness } = require('./_helpers')

const TICKS = [
  { t: 10960, position: { x: 0.5, y: 1.6200100183486938, z: -31.5 }, yaw: -0.000030517578125, headYaw: -0.000030517578125, delta: { y: -0.07840000092983246 }, inputs: { blockBreakingDelayEnabled: true, verticalCollision: true } },
  { t: 10961 },
  { t: 10962 },
  { t: 10963 },
  { t: 10964 },
  { t: 10965, position: { z: 0.5 }, yaw: 0, delta: { y: 0 }, inputs: { handledTeleport: true } },
  { t: 10966, yaw: -0.000030517578125, delta: { y: -0.07840000092983246 }, inputs: { handledTeleport: false, verticalCollision: false } },
  { t: 10967, inputs: { verticalCollision: true } },
  { t: 10968 },
  { t: 10969 },
  { t: 10970 },
  { t: 10971 },
  { t: 10972 },
  { t: 10973 },
  { t: 10974 },
  { t: 10975 },
  { t: 10976 },
  { t: 10977 },
  { t: 10978 },
  { t: 10979 },
  { t: 10980 },
  { t: 10981 },
  { t: 10982 },
  { t: 10983 },
  { t: 10984 },
  { t: 10985 },
  { t: 10986 },
  { t: 10987 },
  { t: 10988 }
]

describe('physics: edge_opposing_ws', () => {
  it('matches recorded client state per tick', () => {
    const h = makeHarness({ version: "1.26.10", scenario: 'edge_opposing_ws', softFailures: true })
    h.runScenario({ name: 'edge_opposing_ws', ticks: TICKS })
  })
})
