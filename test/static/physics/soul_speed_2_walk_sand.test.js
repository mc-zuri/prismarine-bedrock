'use strict'

// Generated from .proxy.bin recording — do not edit by hand.
// Scenario: 1.21.0_soul_speed_2_walk_sand
// Frames: 39  (ticks 13977..14015)
//
// Each entry is a PAI diff. The first entry diffs from DEFAULT_PAI in
// _helpers.js; every subsequent entry diffs from the previous tick's
// full PAI. The harness reconstructs full PAI per tick and validates.

const { makeHarness } = require('./_helpers')

const TICKS = [
  { t: 13977, position: { x: 0.5, y: 1.4950100183486938, z: 900.5 }, yaw: -0.000030517578125, headYaw: -0.000030517578125, delta: { y: -0.07840000092983246 }, inputs: { blockBreakingDelayEnabled: true, verticalCollision: true } },
  { t: 13978 },
  { t: 13979 },
  { t: 13980 },
  { t: 13981 },
  { t: 13982, position: { y: 1.6200100183486938 }, delta: { y: 0 }, inputs: { handledTeleport: true } },
  { t: 13983, delta: { y: -0.07840000092983246 }, inputs: { handledTeleport: false, verticalCollision: false } },
  { t: 13984, position: { y: 1.5416100025177002 }, delta: { y: -0.1552319973707199 } },
  { t: 13985, position: { y: 1.4950100183486938 }, delta: { y: -0.07840000092983246 }, inputs: { verticalCollision: true } },
  { t: 13986 },
  { t: 13987 },
  { t: 13988 },
  { t: 13989 },
  { t: 13990 },
  { t: 13991 },
  { t: 13992 },
  { t: 13993 },
  { t: 13994 },
  { t: 13995 },
  { t: 13996 },
  { t: 13997 },
  { t: 13998 },
  { t: 13999 },
  { t: 14000 },
  { t: 14001 },
  { t: 14002 },
  { t: 14003 },
  { t: 14004 },
  { t: 14005 },
  { t: 14006 },
  { t: 14007 },
  { t: 14008 },
  { t: 14009 },
  { t: 14010 },
  { t: 14011 },
  { t: 14012 },
  { t: 14013 },
  { t: 14014 },
  { t: 14015 }
]

describe('physics: soul_speed_2_walk_sand', () => {
  it('matches recorded client state per tick', () => {
    const h = makeHarness({ version: "1.26.10", scenario: 'soul_speed_2_walk_sand', softFailures: true })
    h.runScenario({ name: 'soul_speed_2_walk_sand', ticks: TICKS })
  })
})
