'use strict'

// Generated from .proxy.bin recording — do not edit by hand.
// Scenario: 1.21.0_walkForward_7t
// Frames: 21  (ticks 11909..11929)
//
// Each entry is a PAI diff. The first entry diffs from DEFAULT_PAI in
// _helpers.js; every subsequent entry diffs from the previous tick's
// full PAI. The harness reconstructs full PAI per tick and validates.

const { makeHarness } = require('./_helpers')

const TICKS = [
  { t: 11909, position: { x: 27.64718246459961, y: 1.6200100183486938, z: -22.012731552124023 }, yaw: -88.51802062988281, pitch: 0.000091552734375, headYaw: -88.51802062988281, delta: { x: 0.000007243899290187983, y: -0.07840000092983246, z: 1.8740799134775443e-7 }, inputs: { blockBreakingDelayEnabled: true, verticalCollision: true } },
  { t: 11910, position: { x: 27.64719009399414 }, yaw: -88.51800537109375, headYaw: -88.51800537109375, delta: { x: 0.0000039551696318085305, z: 1.0232477620775171e-7 } },
  { t: 11911, position: { x: 27.647193908691406 }, yaw: -88.51802825927734, headYaw: -88.51802825927734, delta: { x: 0.000002159522864531027, z: 0 } },
  { t: 11912, position: { x: 27.64719581604004 }, delta: { x: 0.000001179099626824609 } },
  { t: 11913, position: { x: 27.647197723388672 }, delta: { x: 6.437884962906537e-7 } },
  { t: 11914, delta: { x: 3.5150856092514005e-7 } },
  { t: 11915, delta: { x: 1.919237035963306e-7 } },
  { t: 11916, delta: { x: 1.047903523954119e-7 } },
  { t: 11917, delta: { x: 0 } },
  { t: 11918 },
  { t: 11919, position: { x: 27.74516487121582, z: -22.010196685791016 }, moveVector: { z: 1 }, delta: { x: 0.053490106016397476, z: 0.0013838425511494279 }, inputs: { up: true } },
  { t: 11920, position: { x: 27.896621704101562, z: -22.00627899169922 }, delta: { x: 0.08269570767879486, z: 0.0021394207142293453 } },
  { t: 11921, position: { x: 28.07728385925293, z: -22.001605987548828 }, yaw: -88.51801300048828, headYaw: -88.51801300048828, delta: { x: 0.09864196926355362, z: 0.0025519791524857283 } },
  { t: 11922, position: { x: 28.273893356323242, z: -21.996519088745117 }, yaw: -88.51802825927734, headYaw: -88.51802825927734, delta: { x: 0.10734862834215164, z: 0.00277722324244678 } },
  { t: 11923, position: { x: 28.479209899902344, z: -21.991207122802734 }, delta: { x: 0.1121024638414383, z: 0.0029002067167311907 } },
  { t: 11924, position: { x: 28.689279556274414, z: -21.98577308654785 }, delta: { x: 0.11469805985689163, z: 0.002967355540022254 } },
  { t: 11925, position: { x: 28.901945114135742, z: -21.980270385742188 }, yaw: -88.51802062988281, headYaw: -88.51802062988281, delta: { x: 0.1161152645945549, z: 0.0030040189158171415 } },
  { t: 11926, position: { x: 29.0180606842041, z: -21.977266311645508 }, yaw: -88.51802825927734, headYaw: -88.51802825927734, moveVector: { z: 0 }, delta: { x: 0.06339894235134125, z: 0.0016401945613324642 }, inputs: { up: false } },
  { t: 11927, position: { x: 29.081459045410156, z: -21.97562599182129 }, yaw: -88.51802062988281, headYaw: -88.51802062988281, delta: { x: 0.03461582586169243, z: 0.0008955463417805731 } },
  { t: 11928, position: { x: 29.11607551574707, z: -21.974729537963867 }, delta: { x: 0.018900243565440178, z: 0.0004889683332294226 } },
  { t: 11929, position: { x: 29.13497543334961, z: -21.974241256713867 }, yaw: -88.51802825927734, headYaw: -88.51802825927734, delta: { x: 0.010319533757865429, z: 0.0002669767418410629 } }
]

describe('physics: walkForward_7t', () => {
  it('matches recorded client state per tick', () => {
    const h = makeHarness({ version: "1.26.10", scenario: 'walkForward_7t', softFailures: true })
    h.runScenario({ name: 'walkForward_7t', ticks: TICKS })
  })
})
