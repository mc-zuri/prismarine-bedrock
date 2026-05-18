'use strict'

// Generated from .proxy.bin recording — do not edit by hand.
// Scenario: 1.21.0_walkForward_21t
// Frames: 35  (ticks 2455..2489)
//
// Each entry is a PAI diff. The first entry diffs from DEFAULT_PAI in
// _helpers.js; every subsequent entry diffs from the previous tick's
// full PAI. The harness reconstructs full PAI per tick and validates.

const { makeHarness } = require('./_helpers')

const TICKS = [
  { t: 2455, position: { x: 0.5, y: 1.6200100183486938, z: -31.5 }, yaw: 133.81640625, pitch: -89.89998626708984, headYaw: 133.81640625, delta: { y: -0.07840000092983246 }, inputs: { blockBreakingDelayEnabled: true, verticalCollision: true } },
  { t: 2456 },
  { t: 2457 },
  { t: 2458 },
  { t: 2459 },
  { t: 2460 },
  { t: 2461 },
  { t: 2462 },
  { t: 2463 },
  { t: 2464 },
  { t: 2465 },
  { t: 2466 },
  { t: 2467 },
  { t: 2468 },
  { t: 2469 },
  { t: 2470 },
  { t: 2471 },
  { t: 2472 },
  { t: 2473 },
  { t: 2474 },
  { t: 2475 },
  { t: 2476 },
  { t: 2477 },
  { t: 2478 },
  { t: 2479 },
  { t: 2480 },
  { t: 2481 },
  { t: 2482 },
  { t: 2483 },
  { t: 2484 },
  { t: 2485 },
  { t: 2486 },
  { t: 2487 },
  { t: 2488 },
  { t: 2489 }
]

describe('physics: walkForward_21t', () => {
  it('matches recorded client state per tick', () => {
    const h = makeHarness({ version: "1.26.10", scenario: 'walkForward_21t', softFailures: true })
    h.runScenario({ name: 'walkForward_21t', ticks: TICKS })
  })
})
