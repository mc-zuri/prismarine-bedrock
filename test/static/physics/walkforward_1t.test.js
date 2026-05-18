'use strict'

// Generated from .proxy.bin recording — do not edit by hand.
// Scenario: 1.21.0_walkForward_1t
// Frames: 15  (ticks 11738..11752)
//
// Each entry is a PAI diff. The first entry diffs from DEFAULT_PAI in
// _helpers.js; every subsequent entry diffs from the previous tick's
// full PAI. The harness reconstructs full PAI per tick and validates.

const { makeHarness } = require('./_helpers')

const TICKS = [
  { t: 11738, position: { x: 23.11567497253418, y: 1.6200100183486938, z: -22.129966735839844 }, yaw: -88.51802062988281, pitch: 0.000091552734375, headYaw: -88.51802062988281, delta: { x: 0.000005217183570493944, y: -0.07840000092983246, z: 1.3497385964456043e-7 }, inputs: { blockBreakingDelayEnabled: true, verticalCollision: true } },
  { t: 11739, position: { x: 23.115680694580078 }, delta: { x: 0.0000028485826533142244, z: 7.369573751248026e-8 } },
  { t: 11740, position: { x: 23.11568260192871 }, delta: { x: 0.000001555326321067696, z: 0 } },
  { t: 11741, position: { x: 23.115684509277344 }, delta: { x: 8.492082770317211e-7 } },
  { t: 11742, yaw: -88.51802825927734, headYaw: -88.51802825927734, delta: { x: 4.636677601865813e-7 } },
  { t: 11743, delta: { x: 2.531626250856789e-7 } },
  { t: 11744, delta: { x: 1.3822680955399846e-7 } },
  { t: 11745, delta: { x: 7.5471845661923e-8 } },
  { t: 11746, delta: { x: 0 } },
  { t: 11747, position: { x: 23.213651657104492, z: -22.127431869506836 }, moveVector: { z: 1 }, delta: { x: 0.053490106016397476, z: 0.0013838425511494279 }, inputs: { up: true } },
  { t: 11748, position: { x: 23.365108489990234, z: -22.12351417541504 }, delta: { x: 0.08269570767879486, z: 0.0021394207142293453 } },
  { t: 11749, position: { x: 23.447803497314453, z: -22.121374130249023 }, moveVector: { z: 0 }, delta: { x: 0.04515186324715614, z: 0.0011681237956508994 }, inputs: { up: false } },
  { t: 11750, position: { x: 23.492956161499023, z: -22.120206832885742 }, yaw: -88.51801300048828, headYaw: -88.51801300048828, delta: { x: 0.02465292066335678, z: 0.0006377956597134471 } },
  { t: 11751, position: { x: 23.517608642578125, z: -22.119569778442383 }, delta: { x: 0.013460496440529823, z: 0.0003482364700175822 } },
  { t: 11752, position: { x: 23.531068801879883, z: -22.119220733642578 }, yaw: -88.51802825927734, headYaw: -88.51802825927734, delta: { x: 0.0073494319804012775, z: 0.0001901371288113296 } }
]

describe('physics: walkForward_1t', () => {
  it('matches recorded client state per tick', () => {
    const h = makeHarness({ version: "1.26.10", scenario: 'walkForward_1t', softFailures: true })
    h.runScenario({ name: 'walkForward_1t', ticks: TICKS })
  })
})
