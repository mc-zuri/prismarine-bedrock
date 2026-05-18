'use strict'

// Generated from .proxy.bin recording — do not edit by hand.
// Scenario: 1.21.0_walkForward_17t
// Frames: 31  (ticks 2281..2311)
//
// Each entry is a PAI diff. The first entry diffs from DEFAULT_PAI in
// _helpers.js; every subsequent entry diffs from the previous tick's
// full PAI. The harness reconstructs full PAI per tick and validates.

const { makeHarness } = require('./_helpers')

const TICKS = [
  { t: 2281, position: { x: 0.5, y: 1.6200100183486938, z: -31.5 }, yaw: 133.81640625, pitch: -89.89998626708984, headYaw: 133.81640625, delta: { y: -0.07840000092983246 }, inputs: { blockBreakingDelayEnabled: true, verticalCollision: true } },
  { t: 2282 },
  { t: 2283 },
  { t: 2284 },
  { t: 2285 },
  { t: 2286 },
  { t: 2287 },
  { t: 2288 },
  { t: 2289 },
  { t: 2290 },
  { t: 2291 },
  { t: 2292 },
  { t: 2293 },
  { t: 2294 },
  { t: 2295 },
  { t: 2296 },
  { t: 2297 },
  { t: 2298 },
  { t: 2299 },
  { t: 2300 },
  { t: 2301 },
  { t: 2302 },
  { t: 2303 },
  { t: 2304 },
  { t: 2305 },
  { t: 2306 },
  { t: 2307 },
  { t: 2308 },
  { t: 2309 },
  { t: 2310 },
  { t: 2311 }
]

describe('physics: walkForward_17t', () => {
  it('matches recorded client state per tick', () => {
    const h = makeHarness({ version: "1.26.10", scenario: 'walkForward_17t', softFailures: true })
    h.runScenario({ name: 'walkForward_17t', ticks: TICKS })
  })
})
