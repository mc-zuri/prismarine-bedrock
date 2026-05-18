'use strict'

// Generated from .proxy.bin recording — do not edit by hand.
// Scenario: 1.21.0_walkForward_14t
// Frames: 28  (ticks 2161..2188)
//
// Each entry is a PAI diff. The first entry diffs from DEFAULT_PAI in
// _helpers.js; every subsequent entry diffs from the previous tick's
// full PAI. The harness reconstructs full PAI per tick and validates.

const { makeHarness } = require('./_helpers')

const TICKS = [
  { t: 2161, position: { x: 0.5, y: 1.6200100183486938, z: -31.5 }, yaw: 133.81640625, pitch: -89.89998626708984, headYaw: 133.81640625, delta: { y: -0.07840000092983246 }, inputs: { blockBreakingDelayEnabled: true, verticalCollision: true } },
  { t: 2162 },
  { t: 2163 },
  { t: 2164 },
  { t: 2165 },
  { t: 2166 },
  { t: 2167 },
  { t: 2168 },
  { t: 2169 },
  { t: 2170 },
  { t: 2171 },
  { t: 2172 },
  { t: 2173 },
  { t: 2174 },
  { t: 2175 },
  { t: 2176 },
  { t: 2177 },
  { t: 2178 },
  { t: 2179 },
  { t: 2180 },
  { t: 2181 },
  { t: 2182 },
  { t: 2183 },
  { t: 2184 },
  { t: 2185 },
  { t: 2186 },
  { t: 2187 },
  { t: 2188 }
]

describe('physics: walkForward_14t', () => {
  it('matches recorded client state per tick', () => {
    const h = makeHarness({ version: "1.26.10", scenario: 'walkForward_14t', softFailures: true })
    h.runScenario({ name: 'walkForward_14t', ticks: TICKS })
  })
})
