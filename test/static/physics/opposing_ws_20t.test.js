'use strict'

// Generated from .proxy.bin recording — do not edit by hand.
// Scenario: 1.21.0_opposing_ws_20t
// Frames: 34  (ticks 11394..11427)
//
// Each entry is a PAI diff. The first entry diffs from DEFAULT_PAI in
// _helpers.js; every subsequent entry diffs from the previous tick's
// full PAI. The harness reconstructs full PAI per tick and validates.

const { makeHarness } = require('./_helpers')

const TICKS = [
  { t: 11394, position: { x: -5.011765480041504, y: 1.6200100183486938, z: -23.289506912231445 }, yaw: -81.50204467773438, pitch: -14.291732788085938, headYaw: -81.50204467773438, delta: { x: 0.000003969701538153458, y: -0.07840000092983246, z: 5.931304940531845e-7 }, inputs: { blockBreakingDelayEnabled: true, verticalCollision: true } },
  { t: 11395, position: { x: -5.011761665344238 }, yaw: -81.50205993652344, headYaw: -81.50205993652344, delta: { x: 0.000002167457296309294, z: 3.2384929227191606e-7 } },
  { t: 11396, position: { x: -5.011759281158447 }, yaw: -81.5020523071289, headYaw: -81.5020523071289, delta: { x: 0.000001183431777462829, z: 1.7682172881450242e-7 } },
  { t: 11397, position: { x: -5.011758327484131 }, yaw: -81.50204467773438, headYaw: -81.50204467773438, delta: { x: 6.461538077928708e-7, z: 9.654467447717252e-8 } },
  { t: 11398, position: { x: -5.011757850646973 }, yaw: -81.5020523071289, headYaw: -81.5020523071289, delta: { x: 3.5280001497994817e-7, z: 0 } },
  { t: 11399, position: { x: -5.0117573738098145 }, yaw: -81.50204467773438, headYaw: -81.50204467773438, delta: { x: 1.926288319964442e-7 } },
  { t: 11400, delta: { x: 1.0517535287135615e-7 } },
  { t: 11401, delta: { x: 0 } },
  { t: 11402, yaw: -81.50205993652344, headYaw: -81.50205993652344 },
  { t: 11403, yaw: -81.5020523071289, headYaw: -81.5020523071289 },
  { t: 11404, inputs: { up: true, down: true } },
  { t: 11405 },
  { t: 11406 },
  { t: 11407 },
  { t: 11408 },
  { t: 11409, pitch: -14.031890869140625 },
  { t: 11410, pitch: -9.094711303710938, headYaw: -80.72249603271484 },
  { t: 11411, yaw: -80.72248077392578, pitch: -0.7794647216796875, headYaw: -80.72248077392578 },
  { t: 11412 },
  { t: 11413 },
  { t: 11414, yaw: -80.72249603271484, pitch: 0.000091552734375, headYaw: -80.72249603271484 },
  { t: 11415, yaw: -80.72248840332031, headYaw: -80.72248840332031 },
  { t: 11416, yaw: -80.72247314453125, headYaw: -80.72247314453125 },
  { t: 11417, yaw: -80.72248840332031, headYaw: -80.72248840332031 },
  { t: 11418 },
  { t: 11419, yaw: -80.72247314453125, headYaw: -80.72247314453125 },
  { t: 11420 },
  { t: 11421, yaw: -82.80130004882812, headYaw: -84.10055541992188 },
  { t: 11422, yaw: -85.91950988769531, headYaw: -87.4786148071289 },
  { t: 11423, yaw: -87.47863006591797, headYaw: -87.99832916259766, inputs: { up: false, down: false } },
  { t: 11424, yaw: -87.99832153320312, headYaw: -88.51802062988281 },
  { t: 11425, yaw: -88.51802825927734, headYaw: -88.51802825927734 },
  { t: 11426, yaw: -88.51801300048828, headYaw: -88.51801300048828 },
  { t: 11427 }
]

describe('physics: opposing_ws_20t', () => {
  it('matches recorded client state per tick', () => {
    const h = makeHarness({ version: "1.26.10", scenario: 'opposing_ws_20t', softFailures: true })
    h.runScenario({ name: 'opposing_ws_20t', ticks: TICKS })
  })
})
