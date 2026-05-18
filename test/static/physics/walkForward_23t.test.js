'use strict'

// Generated from .proxy.bin recording — do not edit by hand.
// Scenario: 1.21.0_walkForward_23t
// Frames: 37  (ticks 2548..2584)
//
// Each entry is a PAI diff. The first entry diffs from DEFAULT_PAI in
// _helpers.js; every subsequent entry diffs from the previous tick's
// full PAI. The harness reconstructs full PAI per tick and validates.

const { makeHarness } = require('./_helpers')

const TICKS = [
  { t: 2548, position: { x: 0.5, y: 1.6200100183486938, z: -31.5 }, yaw: 133.81640625, pitch: -89.89998626708984, headYaw: 133.81640625, delta: { y: -0.07840000092983246 }, inputs: { blockBreakingDelayEnabled: true, verticalCollision: true } },
  { t: 2549 },
  { t: 2550 },
  { t: 2551 },
  { t: 2552 },
  { t: 2553 },
  { t: 2554 },
  { t: 2555 },
  { t: 2556 },
  { t: 2557 },
  { t: 2558 },
  { t: 2559 },
  { t: 2560 },
  { t: 2561 },
  { t: 2562 },
  { t: 2563 },
  { t: 2564 },
  { t: 2565 },
  { t: 2566 },
  { t: 2567 },
  { t: 2568 },
  { t: 2569 },
  { t: 2570 },
  { t: 2571 },
  { t: 2572 },
  { t: 2573 },
  { t: 2574 },
  { t: 2575 },
  { t: 2576 },
  { t: 2577 },
  { t: 2578 },
  { t: 2579 },
  { t: 2580 },
  { t: 2581 },
  { t: 2582 },
  { t: 2583 },
  { t: 2584 }
]

describe('physics: walkForward_23t', () => {
  it('matches recorded client state per tick', () => {
    const h = makeHarness({ version: "1.26.10", scenario: 'walkForward_23t', softFailures: true })
    h.runScenario({ name: 'walkForward_23t', ticks: TICKS })
  })
})
