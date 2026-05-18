'use strict'

// Generated from .proxy.bin recording — do not edit by hand.
// Scenario: 1.21.0_walkForward_10t
// Frames: 24  (ticks 2015..2038)
//
// Each entry is a PAI diff. The first entry diffs from DEFAULT_PAI in
// _helpers.js; every subsequent entry diffs from the previous tick's
// full PAI. The harness reconstructs full PAI per tick and validates.

const { makeHarness } = require('./_helpers')

const TICKS = [
  { t: 2015, position: { x: 0.5, y: 1.6200100183486938, z: -31.5 }, yaw: 133.81640625, pitch: -89.89998626708984, headYaw: 133.81640625, delta: { y: -0.07840000092983246 }, inputs: { blockBreakingDelayEnabled: true, verticalCollision: true } },
  { t: 2016 },
  { t: 2017 },
  { t: 2018 },
  { t: 2019 },
  { t: 2020 },
  { t: 2021 },
  { t: 2022 },
  { t: 2023 },
  { t: 2024 },
  { t: 2025 },
  { t: 2026 },
  { t: 2027 },
  { t: 2028 },
  { t: 2029 },
  { t: 2030 },
  { t: 2031 },
  { t: 2032 },
  { t: 2033 },
  { t: 2034 },
  { t: 2035 },
  { t: 2036 },
  { t: 2037 },
  { t: 2038 }
]

describe('physics: walkForward_10t', () => {
  it('matches recorded client state per tick', () => {
    const h = makeHarness({ version: "1.26.10", scenario: 'walkForward_10t', softFailures: true })
    h.runScenario({ name: 'walkForward_10t', ticks: TICKS })
  })
})
