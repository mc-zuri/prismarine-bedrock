'use strict'

// Generated from .proxy.bin recording — do not edit by hand.
// Scenario: 1.21.0_walkForward_12t
// Frames: 26  (ticks 2086..2111)
//
// Each entry is a PAI diff. The first entry diffs from DEFAULT_PAI in
// _helpers.js; every subsequent entry diffs from the previous tick's
// full PAI. The harness reconstructs full PAI per tick and validates.

const { makeHarness } = require('./_helpers')

const TICKS = [
  { t: 2086, position: { x: 0.5, y: 1.6200100183486938, z: -31.5 }, yaw: 133.81640625, pitch: -89.89998626708984, headYaw: 133.81640625, delta: { y: -0.07840000092983246 }, inputs: { blockBreakingDelayEnabled: true, verticalCollision: true } },
  { t: 2087 },
  { t: 2088 },
  { t: 2089 },
  { t: 2090 },
  { t: 2091 },
  { t: 2092 },
  { t: 2093 },
  { t: 2094 },
  { t: 2095 },
  { t: 2096 },
  { t: 2097 },
  { t: 2098 },
  { t: 2099 },
  { t: 2100 },
  { t: 2101 },
  { t: 2102 },
  { t: 2103 },
  { t: 2104 },
  { t: 2105 },
  { t: 2106 },
  { t: 2107 },
  { t: 2108 },
  { t: 2109 },
  { t: 2110 },
  { t: 2111 }
]

describe('physics: walkForward_12t', () => {
  it('matches recorded client state per tick', () => {
    const h = makeHarness({ version: "1.26.10", scenario: 'walkForward_12t', softFailures: true })
    h.runScenario({ name: 'walkForward_12t', ticks: TICKS })
  })
})
