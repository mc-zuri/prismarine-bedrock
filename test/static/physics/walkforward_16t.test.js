'use strict'

// Generated from .proxy.bin recording — do not edit by hand.
// Scenario: 1.21.0_walkForward_16t
// Frames: 30  (ticks 2240..2269)
//
// Each entry is a PAI diff. The first entry diffs from DEFAULT_PAI in
// _helpers.js; every subsequent entry diffs from the previous tick's
// full PAI. The harness reconstructs full PAI per tick and validates.

const { makeHarness } = require('./_helpers')

const TICKS = [
  { t: 2240, position: { x: 0.5, y: 1.6200100183486938, z: -31.5 }, yaw: 133.81640625, pitch: -89.89998626708984, headYaw: 133.81640625, delta: { y: -0.07840000092983246 }, inputs: { blockBreakingDelayEnabled: true, verticalCollision: true } },
  { t: 2241 },
  { t: 2242 },
  { t: 2243 },
  { t: 2244 },
  { t: 2245 },
  { t: 2246 },
  { t: 2247 },
  { t: 2248 },
  { t: 2249 },
  { t: 2250 },
  { t: 2251 },
  { t: 2252 },
  { t: 2253 },
  { t: 2254 },
  { t: 2255 },
  { t: 2256 },
  { t: 2257 },
  { t: 2258 },
  { t: 2259 },
  { t: 2260 },
  { t: 2261 },
  { t: 2262 },
  { t: 2263 },
  { t: 2264 },
  { t: 2265 },
  { t: 2266 },
  { t: 2267 },
  { t: 2268 },
  { t: 2269 }
]

describe('physics: walkForward_16t', () => {
  it('matches recorded client state per tick', () => {
    const h = makeHarness({ version: "1.26.10", scenario: 'walkForward_16t', softFailures: true })
    h.runScenario({ name: 'walkForward_16t', ticks: TICKS })
  })
})
