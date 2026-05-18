'use strict'

// Generated from .proxy.bin recording — do not edit by hand.
// Scenario: 1.21.0_walkForward_2t
// Frames: 16  (ticks 11764..11779)
//
// Each entry is a PAI diff. The first entry diffs from DEFAULT_PAI in
// _helpers.js; every subsequent entry diffs from the previous tick's
// full PAI. The harness reconstructs full PAI per tick and validates.

const { makeHarness } = require('./_helpers')

const TICKS = [
  { t: 11764, position: { x: 23.547245025634766, y: 1.6200100183486938, z: -22.118803024291992 }, yaw: -88.51802825927734, pitch: 0.000091552734375, headYaw: -88.51802825927734, delta: { x: 0.000005159007287147688, y: -0.07840000092983246, z: 1.3346864591312624e-7 }, inputs: { blockBreakingDelayEnabled: true, verticalCollision: true } },
  { t: 11765, position: { x: 23.547250747680664 }, yaw: -88.51801300048828, headYaw: -88.51801300048828, delta: { x: 0.0000028168183234811295, z: 7.287388825716334e-8 } },
  { t: 11766, position: { x: 23.547252655029297 }, yaw: -88.51802825927734, headYaw: -88.51802825927734, delta: { x: 0.0000015379829392259126, z: 0 } },
  { t: 11767, position: { x: 23.54725456237793 }, yaw: -88.51801300048828, headYaw: -88.51801300048828, delta: { x: 8.397387887271179e-7 } },
  { t: 11768, delta: { x: 4.5849742491554935e-7 } },
  { t: 11769, delta: { x: 2.503396103747946e-7 } },
  { t: 11770, yaw: -88.51802825927734, headYaw: -88.51802825927734, delta: { x: 1.366854434081688e-7 } },
  { t: 11771, delta: { x: 7.463025752940666e-8 } },
  { t: 11772, yaw: -88.51801300048828, headYaw: -88.51801300048828, delta: { x: 0 } },
  { t: 11773, yaw: -88.51802825927734, headYaw: -88.51802825927734 },
  { t: 11774, position: { x: 23.645221710205078, z: -22.116268157958984 }, yaw: -88.51801300048828, headYaw: -88.51801300048828, moveVector: { z: 1 }, delta: { x: 0.053490109741687775, z: 0.0013838553568348289 }, inputs: { up: true } },
  { t: 11775, position: { x: 23.698711395263672, z: -22.114883422851562 }, moveVector: { z: 0 }, delta: { x: 0.029205603525042534, z: 0.0007555850897915661 }, inputs: { up: false } },
  { t: 11776, position: { x: 23.727916717529297, z: -22.11412811279297 }, yaw: -88.51802825927734, headYaw: -88.51802825927734, delta: { x: 0.01594626158475876, z: 0.0004125495033804327 } },
  { t: 11777, position: { x: 23.74386215209961, z: -22.11371612548828 }, delta: { x: 0.008706660009920597, z: 0.00022525204985868186 } },
  { t: 11778, position: { x: 23.7525691986084, z: -22.11349105834961 }, delta: { x: 0.0047538368962705135, z: 0.0001229876361321658 } },
  { t: 11779, position: { x: 23.757322311401367, z: -22.11336898803711 }, delta: { x: 0.0025955953169614077, z: 0.00006715126073686406 } }
]

describe('physics: walkForward_2t', () => {
  it('matches recorded client state per tick', () => {
    const h = makeHarness({ version: "1.26.10", scenario: 'walkForward_2t', softFailures: true })
    h.runScenario({ name: 'walkForward_2t', ticks: TICKS })
  })
})
