'use strict'

// Generated from .proxy.bin recording — do not edit by hand.
// Scenario: 1.21.0_walkForward_18t
// Frames: 32  (ticks 2323..2354)
//
// Each entry is a PAI diff. The first entry diffs from DEFAULT_PAI in
// _helpers.js; every subsequent entry diffs from the previous tick's
// full PAI. The harness reconstructs full PAI per tick and validates.

const { makeHarness } = require('./_helpers')

const TICKS = [
  { t: 2323, position: { x: 0.5, y: 1.6200100183486938, z: -31.5 }, yaw: 133.81640625, pitch: -89.89998626708984, headYaw: 133.81640625, delta: { y: -0.07840000092983246 }, inputs: { blockBreakingDelayEnabled: true, verticalCollision: true } },
  { t: 2324 },
  { t: 2325 },
  { t: 2326 },
  { t: 2327 },
  { t: 2328 },
  { t: 2329 },
  { t: 2330 },
  { t: 2331 },
  { t: 2332 },
  { t: 2333 },
  { t: 2334 },
  { t: 2335 },
  { t: 2336 },
  { t: 2337 },
  { t: 2338 },
  { t: 2339 },
  { t: 2340 },
  { t: 2341 },
  { t: 2342 },
  { t: 2343 },
  { t: 2344 },
  { t: 2345 },
  { t: 2346 },
  { t: 2347 },
  { t: 2348 },
  { t: 2349 },
  { t: 2350 },
  { t: 2351 },
  { t: 2352 },
  { t: 2353 },
  { t: 2354 }
]

describe('physics: walkForward_18t', () => {
  it('matches recorded client state per tick', () => {
    const h = makeHarness({ version: "1.26.10", scenario: 'walkForward_18t', softFailures: true })
    h.runScenario({ name: 'walkForward_18t', ticks: TICKS })
  })
})
