'use strict'

// Generated from .proxy.bin recording — do not edit by hand.
// Scenario: 1.21.0_walkForward_5t
// Frames: 19  (ticks 11848..11866)
//
// Each entry is a PAI diff. The first entry diffs from DEFAULT_PAI in
// _helpers.js; every subsequent entry diffs from the previous tick's
// full PAI. The harness reconstructs full PAI per tick and validates.

const { makeHarness } = require('./_helpers')

const TICKS = [
  { t: 11848, position: { x: 25.057750701904297, y: 1.6200100183486938, z: -22.07972526550293 }, yaw: -88.51802825927734, pitch: 0.000091552734375, headYaw: -88.51802825927734, delta: { x: 0.0000033599865219002822, y: -0.07840000092983246, z: 8.692644826169271e-8 }, inputs: { blockBreakingDelayEnabled: true, verticalCollision: true } },
  { t: 11849, position: { x: 25.057754516601562 }, yaw: -88.51801300048828, headYaw: -88.51801300048828, delta: { x: 0.0000018345529042562703, z: 0 } },
  { t: 11850, position: { x: 25.057756423950195 }, delta: { x: 0.0000010016659643952153 } },
  { t: 11851, position: { x: 25.057758331298828 }, delta: { x: 5.4690968909199e-7 } },
  { t: 11852, yaw: -88.51802825927734, headYaw: -88.51802825927734, delta: { x: 2.9861271855224913e-7 } },
  { t: 11853, delta: { x: 1.630425572329841e-7 } },
  { t: 11854, yaw: -88.51801300048828, headYaw: -88.51801300048828, delta: { x: 8.902124903897857e-8 } },
  { t: 11855, yaw: -88.51802825927734, headYaw: -88.51802825927734, delta: { x: 0 } },
  { t: 11856 },
  { t: 11857, position: { x: 25.155725479125977, z: -22.077190399169922 }, moveVector: { z: 1 }, delta: { x: 0.053490106016397476, z: 0.0013838425511494279 }, inputs: { up: true } },
  { t: 11858, position: { x: 25.30718231201172, z: -22.073272705078125 }, delta: { x: 0.08269570767879486, z: 0.0021394207142293453 } },
  { t: 11859, position: { x: 25.487844467163086, z: -22.068599700927734 }, delta: { x: 0.09864196926355362, z: 0.002551966579630971 } },
  { t: 11860, position: { x: 25.6844539642334, z: -22.063512802124023 }, delta: { x: 0.10734862834215164, z: 0.0027772164903581142 } },
  { t: 11861, position: { x: 25.8897705078125, z: -22.05820083618164 }, yaw: -88.51802062988281, headYaw: -88.51802062988281, delta: { x: 0.11210247129201889, z: 0.0029002029914408922 } },
  { t: 11862, position: { x: 26.001873016357422, z: -22.055299758911133 }, moveVector: { z: 0 }, delta: { x: 0.061207957565784454, z: 0.001583511009812355 }, inputs: { up: false } },
  { t: 11863, position: { x: 26.063081741333008, z: -22.0537166595459 }, delta: { x: 0.03341954946517944, z: 0.0008645970956422389 } },
  { t: 11864, position: { x: 26.096500396728516, z: -22.052852630615234 }, yaw: -88.51802825927734, headYaw: -88.51802825927734, delta: { x: 0.018247075378894806, z: 0.00047207006718963385 } },
  { t: 11865, position: { x: 26.114748001098633, z: -22.052379608154297 }, yaw: -88.51802062988281, headYaw: -88.51802062988281, delta: { x: 0.009962904267013073, z: 0.00025775027461349964 } },
  { t: 11866, position: { x: 26.124710083007812, z: -22.052122116088867 }, yaw: -88.51801300048828, headYaw: -88.51801300048828, delta: { x: 0.00543974619358778, z: 0.0001407316594850272 } }
]

describe('physics: walkForward_5t', () => {
  it('matches recorded client state per tick', () => {
    const h = makeHarness({ version: "1.26.10", scenario: 'walkForward_5t', softFailures: true })
    h.runScenario({ name: 'walkForward_5t', ticks: TICKS })
  })
})
