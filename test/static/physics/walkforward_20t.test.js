'use strict'

// Generated from .proxy.bin recording — do not edit by hand.
// Scenario: 1.21.0_walkForward_20t
// Frames: 34  (ticks 2410..2443)
//
// Each entry is a PAI diff. The first entry diffs from DEFAULT_PAI in
// _helpers.js; every subsequent entry diffs from the previous tick's
// full PAI. The harness reconstructs full PAI per tick and validates.

const { makeHarness } = require('./_helpers')

const TICKS = [
  { t: 2410, position: { x: 0.5, y: 1.6200100183486938, z: -31.5 }, yaw: 133.81640625, pitch: -89.89998626708984, headYaw: 133.81640625, delta: { y: -0.07840000092983246 }, inputs: { blockBreakingDelayEnabled: true, verticalCollision: true } },
  { t: 2411 },
  { t: 2412 },
  { t: 2413 },
  { t: 2414 },
  { t: 2415 },
  { t: 2416 },
  { t: 2417 },
  { t: 2418 },
  { t: 2419 },
  { t: 2420 },
  { t: 2421 },
  { t: 2422 },
  { t: 2423 },
  { t: 2424 },
  { t: 2425 },
  { t: 2426 },
  { t: 2427 },
  { t: 2428 },
  { t: 2429 },
  { t: 2430 },
  { t: 2431 },
  { t: 2432 },
  { t: 2433 },
  { t: 2434 },
  { t: 2435 },
  { t: 2436 },
  { t: 2437 },
  { t: 2438 },
  { t: 2439 },
  { t: 2440 },
  { t: 2441 },
  { t: 2442 },
  { t: 2443 }
]

describe('physics: walkForward_20t', () => {
  it('matches recorded client state per tick', () => {
    const h = makeHarness({ version: "1.26.10", scenario: 'walkForward_20t', softFailures: true })
    h.runScenario({ name: 'walkForward_20t', ticks: TICKS })
  })
})
