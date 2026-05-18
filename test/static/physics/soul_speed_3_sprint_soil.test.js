'use strict'

// Generated from .proxy.bin recording — do not edit by hand.
// Scenario: 1.21.0_soul_speed_3_sprint_soil
// Frames: 39  (ticks 14412..14450)
//
// Each entry is a PAI diff. The first entry diffs from DEFAULT_PAI in
// _helpers.js; every subsequent entry diffs from the previous tick's
// full PAI. The harness reconstructs full PAI per tick and validates.

const { makeHarness } = require('./_helpers')

const TICKS = [
  { t: 14412, position: { x: 0.5, y: 1.6200100183486938, z: 1000.5 }, yaw: -0.000030517578125, headYaw: -0.000030517578125, delta: { y: -0.07840000092983246 }, inputs: { blockBreakingDelayEnabled: true, verticalCollision: true } },
  { t: 14413 },
  { t: 14414 },
  { t: 14415 },
  { t: 14416 },
  { t: 14417 },
  { t: 14418, yaw: 0, delta: { y: 0 }, inputs: { handledTeleport: true } },
  { t: 14419, yaw: -0.000030517578125, delta: { y: -0.07840000092983246 }, inputs: { handledTeleport: false, verticalCollision: false } },
  { t: 14420, inputs: { verticalCollision: true } },
  { t: 14421 },
  { t: 14422 },
  { t: 14423 },
  { t: 14424 },
  { t: 14425 },
  { t: 14426 },
  { t: 14427 },
  { t: 14428 },
  { t: 14429 },
  { t: 14430 },
  { t: 14431 },
  { t: 14432 },
  { t: 14433 },
  { t: 14434 },
  { t: 14435 },
  { t: 14436 },
  { t: 14437 },
  { t: 14438 },
  { t: 14439 },
  { t: 14440 },
  { t: 14441 },
  { t: 14442 },
  { t: 14443 },
  { t: 14444 },
  { t: 14445 },
  { t: 14446 },
  { t: 14447 },
  { t: 14448 },
  { t: 14449 },
  { t: 14450 }
]

describe('physics: soul_speed_3_sprint_soil', () => {
  it('matches recorded client state per tick', () => {
    const h = makeHarness({ version: "1.26.10", scenario: 'soul_speed_3_sprint_soil', softFailures: true })
    h.runScenario({ name: 'soul_speed_3_sprint_soil', ticks: TICKS })
  })
})
