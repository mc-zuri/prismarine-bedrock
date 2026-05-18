'use strict'

// Generated from .proxy.bin recording — do not edit by hand.
// Scenario: 1.21.0_walkForward_22t
// Frames: 36  (ticks 2501..2536)
//
// Each entry is a PAI diff. The first entry diffs from DEFAULT_PAI in
// _helpers.js; every subsequent entry diffs from the previous tick's
// full PAI. The harness reconstructs full PAI per tick and validates.

const { makeHarness } = require('./_helpers')

const TICKS = [
  { t: 2501, position: { x: 0.5, y: 1.6200100183486938, z: -31.5 }, yaw: 133.81640625, pitch: -89.89998626708984, headYaw: 133.81640625, delta: { y: -0.07840000092983246 }, inputs: { blockBreakingDelayEnabled: true, verticalCollision: true } },
  { t: 2502 },
  { t: 2503 },
  { t: 2504 },
  { t: 2505 },
  { t: 2506 },
  { t: 2507 },
  { t: 2508 },
  { t: 2509 },
  { t: 2510 },
  { t: 2511 },
  { t: 2512 },
  { t: 2513 },
  { t: 2514 },
  { t: 2515 },
  { t: 2516 },
  { t: 2517 },
  { t: 2518 },
  { t: 2519 },
  { t: 2520 },
  { t: 2521 },
  { t: 2522 },
  { t: 2523 },
  { t: 2524 },
  { t: 2525 },
  { t: 2526 },
  { t: 2527 },
  { t: 2528 },
  { t: 2529 },
  { t: 2530 },
  { t: 2531 },
  { t: 2532 },
  { t: 2533 },
  { t: 2534 },
  { t: 2535 },
  { t: 2536 }
]

describe('physics: walkForward_22t', () => {
  it('matches recorded client state per tick', () => {
    const h = makeHarness({ version: "1.26.10", scenario: 'walkForward_22t', softFailures: true })
    h.runScenario({ name: 'walkForward_22t', ticks: TICKS })
  })
})
