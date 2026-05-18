'use strict'

// Generated from .proxy.bin recording — do not edit by hand.
// Scenario: 1.21.0_lava_walk_to_sprint
// Frames: 39  (ticks 24174..24212)
//
// Each entry is a PAI diff. The first entry diffs from DEFAULT_PAI in
// _helpers.js; every subsequent entry diffs from the previous tick's
// full PAI. The harness reconstructs full PAI per tick and validates.

const { makeHarness } = require('./_helpers')

const TICKS = [
  { t: 24174, position: { x: 0.5, y: -8.379989624023438, z: 300.5 }, yaw: -0.000030517578125, headYaw: -0.000030517578125, delta: { y: -0.019999999552965164 }, inputs: { blockBreakingDelayEnabled: true, verticalCollision: true } },
  { t: 24175 },
  { t: 24176 },
  { t: 24177 },
  { t: 24178 },
  { t: 24179 },
  { t: 24180 },
  { t: 24181 },
  { t: 24182 },
  { t: 24183 },
  { t: 24184 },
  { t: 24185 },
  { t: 24186 },
  { t: 24187 },
  { t: 24188 },
  { t: 24189 },
  { t: 24190 },
  { t: 24191 },
  { t: 24192 },
  { t: 24193 },
  { t: 24194 },
  { t: 24195 },
  { t: 24196 },
  { t: 24197 },
  { t: 24198 },
  { t: 24199 },
  { t: 24200 },
  { t: 24201 },
  { t: 24202 },
  { t: 24203 },
  { t: 24204 },
  { t: 24205 },
  { t: 24206 },
  { t: 24207 },
  { t: 24208 },
  { t: 24209 },
  { t: 24210 },
  { t: 24211 },
  { t: 24212 }
]

describe('physics: lava_walk_to_sprint', () => {
  it('matches recorded client state per tick', () => {
    const h = makeHarness({ version: "1.26.10", scenario: 'lava_walk_to_sprint', softFailures: true })
    h.runScenario({ name: 'lava_walk_to_sprint', ticks: TICKS })
  })
})
