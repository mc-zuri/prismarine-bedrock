'use strict'

// Generated from .proxy.bin recording — do not edit by hand.
// Scenario: 1.21.0_walkThenSneak_w4_s10
// Frames: 28  (ticks 13334..13361)
//
// Each entry is a PAI diff. The first entry diffs from DEFAULT_PAI in
// _helpers.js; every subsequent entry diffs from the previous tick's
// full PAI. The harness reconstructs full PAI per tick and validates.

const { makeHarness } = require('./_helpers')

const TICKS = [
  { t: 13334, position: { x: 156.34268188476562, y: 1.6200100183486938, z: -18.68321990966797 }, yaw: -88.51802825927734, pitch: 0.000091552734375, headYaw: -88.51802825927734, delta: { x: 0.000002214366077168961, y: -0.07840000092983246 }, inputs: { blockBreakingDelayEnabled: true, verticalCollision: true } },
  { t: 13335, delta: { x: 0.0000012090440577594563 } },
  { t: 13336, delta: { x: 6.601381414839125e-7 } },
  { t: 13337, delta: { x: 3.604354787967168e-7 } },
  { t: 13338, yaw: -88.51801300048828, headYaw: -88.51801300048828, delta: { x: 1.9679779938996944e-7 } },
  { t: 13339, yaw: -88.51802825927734, headYaw: -88.51802825927734, delta: { x: 1.0745161205250042e-7 } },
  { t: 13340, yaw: -88.51801300048828, headYaw: -88.51801300048828, delta: { x: 0 } },
  { t: 13341 },
  { t: 13342 },
  { t: 13343, yaw: -88.51802825927734, headYaw: -88.51802825927734 },
  { t: 13344, position: { x: 156.44064331054688, z: -18.68068504333496 }, yaw: -88.51801300048828, headYaw: -88.51801300048828, moveVector: { z: 1 }, delta: { x: 0.053490109741687775, z: 0.0013838553568348289 }, inputs: { up: true } },
  { t: 13345, position: { x: 156.59210205078125, z: -18.676767349243164 }, yaw: -88.51802825927734, headYaw: -88.51802825927734, delta: { x: 0.08269570767879486, z: 0.002139427699148655 } },
  { t: 13346, position: { x: 156.77276611328125, z: -18.672094345092773 }, delta: { x: 0.09864196926355362, z: 0.0025519700720906258 } },
  { t: 13347, position: { x: 156.9008026123047, z: -18.668781280517578 }, yaw: -88.51802062988281, headYaw: -88.51802062988281, moveVector: { z: 0.30000001192092896 }, delta: { x: 0.06990554928779602, z: 0.0018085286719724536 }, inputs: { sneaking: true, sneakDown: true, wantDown: true, startSneaking: true, sneakPressedRaw: true, sneakCurrentRaw: true } },
  { t: 13348, position: { x: 157.00009155273438, z: -18.66621208190918 }, delta: { x: 0.05421546846628189, z: 0.0014026096323505044 }, inputs: { startSneaking: false, sneakPressedRaw: false } },
  { t: 13349, position: { x: 157.0836944580078, z: -18.66404914855957 }, delta: { x: 0.04564868286252022, z: 0.0011809777934104204 } },
  { t: 13350, position: { x: 157.1587371826172, z: -18.662107467651367 }, delta: { x: 0.040971215814352036, z: 0.0010599667439237237 } },
  { t: 13351, position: { x: 157.22909545898438, z: -18.660287857055664 }, yaw: -88.51801300048828, headYaw: -88.51801300048828, delta: { x: 0.03841732069849968, z: 0.000993898487649858 } },
  { t: 13352, position: { x: 157.29690551757812, z: -18.658533096313477 }, delta: { x: 0.03702289238572121, z: 0.0009578252793289721 } },
  { t: 13353, position: { x: 157.36331176757812, z: -18.656814575195312 }, delta: { x: 0.03626153618097305, z: 0.0009381293202750385 } },
  { t: 13354, position: { x: 157.42897033691406, z: -18.65511703491211 }, delta: { x: 0.035845834761857986, z: 0.0009273753385059536 } },
  { t: 13355, position: { x: 157.49420166015625, z: -18.65342903137207 }, yaw: -88.51802062988281, headYaw: -88.51802062988281, delta: { x: 0.0356188602745533, z: 0.0009214997990056872 } },
  { t: 13356, position: { x: 157.5592041015625, z: -18.65174674987793 }, yaw: -88.51801300048828, headYaw: -88.51801300048828, delta: { x: 0.035494934767484665, z: 0.0009182955836877227 } },
  { t: 13357, position: { x: 157.59469604492188, z: -18.650829315185547 }, yaw: -88.51802062988281, headYaw: -88.51802062988281, moveVector: { z: 0 }, delta: { x: 0.0193802360445261, z: 0.0005013894406147301 }, inputs: { sneaking: false, sneakDown: false, up: false, wantDown: false, stopSneaking: true, sneakReleasedRaw: true, sneakCurrentRaw: false } },
  { t: 13358, position: { x: 157.61407470703125, z: -18.650327682495117 }, delta: { x: 0.010581609793007374, z: 0.0002737586619332433 }, inputs: { stopSneaking: false, sneakReleasedRaw: false } },
  { t: 13359, position: { x: 157.62464904785156, z: -18.650053024291992 }, yaw: -88.51801300048828, headYaw: -88.51801300048828, delta: { x: 0.005777559708803892, z: 0.00014947225281503052 } },
  { t: 13360, position: { x: 157.63043212890625, z: -18.649904251098633 }, yaw: -88.51802062988281, headYaw: -88.51802062988281, delta: { x: 0.0031545478850603104, z: 0.00008161186269717291 } },
  { t: 13361, position: { x: 157.6335906982422, z: -18.649822235107422 }, delta: { x: 0.0017223833128809929, z: 0.00004456008173292503 } }
]

describe('physics: walkThenSneak_w4_s10', () => {
  it('matches recorded client state per tick', () => {
    const h = makeHarness({ version: "1.26.10", scenario: 'walkThenSneak_w4_s10', softFailures: true })
    h.runScenario({ name: 'walkThenSneak_w4_s10', ticks: TICKS })
  })
})
