'use strict'

// Generated from .proxy.bin recording — do not edit by hand.
// Scenario: 1.21.0_walkForward_11t
// Frames: 25  (ticks 2050..2074)
//
// Each entry is a PAI diff. The first entry diffs from DEFAULT_PAI in
// _helpers.js; every subsequent entry diffs from the previous tick's
// full PAI. The harness reconstructs full PAI per tick and validates.

const { makeHarness } = require('./_helpers')

const TICKS = [
  { t: 2050, position: { x: 0.5, y: 1.6200100183486938, z: -31.5 }, yaw: 133.81640625, pitch: -89.89998626708984, headYaw: 133.81640625, delta: { y: -0.07840000092983246 }, inputs: { blockBreakingDelayEnabled: true, verticalCollision: true } },
  { t: 2051 },
  { t: 2052 },
  { t: 2053 },
  { t: 2054 },
  { t: 2055 },
  { t: 2056 },
  { t: 2057 },
  { t: 2058 },
  { t: 2059 },
  { t: 2060 },
  { t: 2061 },
  { t: 2062 },
  { t: 2063 },
  { t: 2064 },
  { t: 2065 },
  { t: 2066 },
  { t: 2067 },
  { t: 2068 },
  { t: 2069 },
  { t: 2070 },
  { t: 2071 },
  { t: 2072 },
  { t: 2073 },
  { t: 2074 }
]

describe('physics: walkForward_11t', () => {
  it('matches recorded client state per tick', () => {
    const h = makeHarness({ version: "1.26.10", scenario: 'walkForward_11t', softFailures: true })
    h.runScenario({ name: 'walkForward_11t', ticks: TICKS })
  })
})
