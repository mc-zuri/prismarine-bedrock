'use strict'

// Generated from .proxy.bin recording — do not edit by hand.
// Scenario: 1.21.0_jump_bunny_hop
// Frames: 79  (ticks 4944..5022)
//
// Each entry is a PAI diff. The first entry diffs from DEFAULT_PAI in
// _helpers.js; every subsequent entry diffs from the previous tick's
// full PAI. The harness reconstructs full PAI per tick and validates.

const { makeHarness } = require('./_helpers')

const TICKS = [
  { t: 4944, position: { x: 0.5, y: 1.6200100183486938, z: 0.5 }, yaw: -0.000030517578125, headYaw: -0.000030517578125, delta: { y: -0.07840000092983246 }, inputs: { blockBreakingDelayEnabled: true, verticalCollision: true } },
  { t: 4945 },
  { t: 4946 },
  { t: 4947 },
  { t: 4948, yaw: 0, delta: { y: 0 }, inputs: { handledTeleport: true } },
  { t: 4949, yaw: -0.000030517578125, delta: { y: -0.07840000092983246 }, inputs: { handledTeleport: false, verticalCollision: false } },
  { t: 4950, inputs: { verticalCollision: true } },
  { t: 4951 },
  { t: 4952 },
  { t: 4953 },
  { t: 4954 },
  { t: 4955 },
  { t: 4956 },
  { t: 4957 },
  { t: 4958 },
  { t: 4959 },
  { t: 4960 },
  { t: 4961 },
  { t: 4962 },
  { t: 4963 },
  { t: 4964 },
  { t: 4965 },
  { t: 4966 },
  { t: 4967 },
  { t: 4968 },
  { t: 4969 },
  { t: 4970 },
  { t: 4971 },
  { t: 4972 },
  { t: 4973 },
  { t: 4974 },
  { t: 4975 },
  { t: 4976 },
  { t: 4977 },
  { t: 4978 },
  { t: 4979 },
  { t: 4980 },
  { t: 4981 },
  { t: 4982 },
  { t: 4983 },
  { t: 4984 },
  { t: 4985 },
  { t: 4986 },
  { t: 4987 },
  { t: 4988 },
  { t: 4989 },
  { t: 4990 },
  { t: 4991 },
  { t: 4992 },
  { t: 4993 },
  { t: 4994 },
  { t: 4995 },
  { t: 4996 },
  { t: 4997 },
  { t: 4998 },
  { t: 4999 },
  { t: 5000 },
  { t: 5001 },
  { t: 5002 },
  { t: 5003 },
  { t: 5004 },
  { t: 5005 },
  { t: 5006 },
  { t: 5007 },
  { t: 5008 },
  { t: 5009 },
  { t: 5010 },
  { t: 5011 },
  { t: 5012 },
  { t: 5013 },
  { t: 5014 },
  { t: 5015 },
  { t: 5016 },
  { t: 5017 },
  { t: 5018 },
  { t: 5019 },
  { t: 5020 },
  { t: 5021 },
  { t: 5022 }
]

describe('physics: jump_bunny_hop', () => {
  it('matches recorded client state per tick', () => {
    const h = makeHarness({ version: "1.26.10", scenario: 'jump_bunny_hop', softFailures: true })
    h.runScenario({ name: 'jump_bunny_hop', ticks: TICKS })
  })
})
