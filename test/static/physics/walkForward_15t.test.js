'use strict'

// Generated from .proxy.bin recording — do not edit by hand.
// Scenario: 1.21.0_walkForward_15t
// Frames: 29  (ticks 2200..2228)
//
// Each entry is a PAI diff. The first entry diffs from DEFAULT_PAI in
// _helpers.js; every subsequent entry diffs from the previous tick's
// full PAI. The harness reconstructs full PAI per tick and validates.

const { makeHarness } = require('./_helpers')

const TICKS = [
  { t: 2200, position: { x: 0.5, y: 1.6200100183486938, z: -31.5 }, yaw: 133.81640625, pitch: -89.89998626708984, headYaw: 133.81640625, delta: { y: -0.07840000092983246 }, inputs: { blockBreakingDelayEnabled: true, verticalCollision: true } },
  { t: 2201 },
  { t: 2202 },
  { t: 2203 },
  { t: 2204 },
  { t: 2205 },
  { t: 2206 },
  { t: 2207 },
  { t: 2208 },
  { t: 2209 },
  { t: 2210 },
  { t: 2211 },
  { t: 2212 },
  { t: 2213 },
  { t: 2214 },
  { t: 2215 },
  { t: 2216 },
  { t: 2217 },
  { t: 2218 },
  { t: 2219 },
  { t: 2220 },
  { t: 2221 },
  { t: 2222 },
  { t: 2223 },
  { t: 2224 },
  { t: 2225 },
  { t: 2226 },
  { t: 2227 },
  { t: 2228 }
]

describe('physics: walkForward_15t', () => {
  it('matches recorded client state per tick', () => {
    const h = makeHarness({ version: "1.26.10", scenario: 'walkForward_15t', softFailures: true })
    h.runScenario({ name: 'walkForward_15t', ticks: TICKS })
  })
})
