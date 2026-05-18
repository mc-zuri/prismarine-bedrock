'use strict'

// Generated from .proxy.bin recording — do not edit by hand.
// Scenario: 1.21.0_walkForward_13t
// Frames: 27  (ticks 2123..2149)
//
// Each entry is a PAI diff. The first entry diffs from DEFAULT_PAI in
// _helpers.js; every subsequent entry diffs from the previous tick's
// full PAI. The harness reconstructs full PAI per tick and validates.

const { makeHarness } = require('./_helpers')

const TICKS = [
  { t: 2123, position: { x: 0.5, y: 1.6200100183486938, z: -31.5 }, yaw: 133.81640625, pitch: -89.89998626708984, headYaw: 133.81640625, delta: { y: -0.07840000092983246 }, inputs: { blockBreakingDelayEnabled: true, verticalCollision: true } },
  { t: 2124 },
  { t: 2125 },
  { t: 2126 },
  { t: 2127 },
  { t: 2128 },
  { t: 2129 },
  { t: 2130 },
  { t: 2131 },
  { t: 2132 },
  { t: 2133 },
  { t: 2134 },
  { t: 2135 },
  { t: 2136 },
  { t: 2137 },
  { t: 2138 },
  { t: 2139 },
  { t: 2140 },
  { t: 2141 },
  { t: 2142 },
  { t: 2143 },
  { t: 2144 },
  { t: 2145 },
  { t: 2146 },
  { t: 2147 },
  { t: 2148 },
  { t: 2149 }
]

describe('physics: walkForward_13t', () => {
  it('matches recorded client state per tick', () => {
    const h = makeHarness({ version: "1.26.10", scenario: 'walkForward_13t', softFailures: true })
    h.runScenario({ name: 'walkForward_13t', ticks: TICKS })
  })
})
