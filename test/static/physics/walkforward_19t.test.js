'use strict'

// Generated from .proxy.bin recording — do not edit by hand.
// Scenario: 1.21.0_walkForward_19t
// Frames: 33  (ticks 2366..2398)
//
// Each entry is a PAI diff. The first entry diffs from DEFAULT_PAI in
// _helpers.js; every subsequent entry diffs from the previous tick's
// full PAI. The harness reconstructs full PAI per tick and validates.

const { makeHarness } = require('./_helpers')

const TICKS = [
  { t: 2366, position: { x: 0.5, y: 1.6200100183486938, z: -31.5 }, yaw: 133.81640625, pitch: -89.89998626708984, headYaw: 133.81640625, delta: { y: -0.07840000092983246 }, inputs: { blockBreakingDelayEnabled: true, verticalCollision: true } },
  { t: 2367 },
  { t: 2368 },
  { t: 2369 },
  { t: 2370 },
  { t: 2371 },
  { t: 2372 },
  { t: 2373 },
  { t: 2374 },
  { t: 2375 },
  { t: 2376 },
  { t: 2377 },
  { t: 2378 },
  { t: 2379 },
  { t: 2380 },
  { t: 2381 },
  { t: 2382 },
  { t: 2383 },
  { t: 2384 },
  { t: 2385 },
  { t: 2386 },
  { t: 2387 },
  { t: 2388 },
  { t: 2389 },
  { t: 2390 },
  { t: 2391 },
  { t: 2392 },
  { t: 2393 },
  { t: 2394 },
  { t: 2395 },
  { t: 2396 },
  { t: 2397 },
  { t: 2398 }
]

describe('physics: walkForward_19t', () => {
  it('matches recorded client state per tick', () => {
    const h = makeHarness({ version: "1.26.10", scenario: 'walkForward_19t', softFailures: true })
    h.runScenario({ name: 'walkForward_19t', ticks: TICKS })
  })
})
