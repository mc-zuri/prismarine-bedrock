'use strict'

// Generated from .proxy.bin recording — do not edit by hand.
// Scenario: 1.21.0_walkThenSneak_w3_s10
// Frames: 27  (ticks 13296..13322)
//
// Each entry is a PAI diff. The first entry diffs from DEFAULT_PAI in
// _helpers.js; every subsequent entry diffs from the previous tick's
// full PAI. The harness reconstructs full PAI per tick and validates.

const { makeHarness } = require('./_helpers')

const TICKS = [
  { t: 13296, position: { x: 155.04798889160156, y: 1.6200100183486938, z: -18.71671485900879 }, yaw: -88.51802825927734, pitch: 0.000091552734375, headYaw: -88.51802825927734, delta: { x: 0.0000022120241283118958, y: -0.07840000092983246 }, inputs: { blockBreakingDelayEnabled: true, verticalCollision: true } },
  { t: 13297, delta: { x: 0.0000012077653082087636 } },
  { t: 13298, delta: { x: 6.594399337700452e-7 } },
  { t: 13299, delta: { x: 3.6005425840812677e-7 } },
  { t: 13300, delta: { x: 1.9658965300095588e-7 } },
  { t: 13301, delta: { x: 1.073379607419156e-7 } },
  { t: 13302, delta: { x: 0 } },
  { t: 13303 },
  { t: 13304, yaw: -88.51801300048828, headYaw: -88.51801300048828 },
  { t: 13305 },
  { t: 13306, position: { x: 155.1459503173828, z: -18.71417999267578 }, yaw: -88.51802825927734, headYaw: -88.51802825927734, moveVector: { z: 1 }, delta: { x: 0.053490106016397476, z: 0.0013838425511494279 }, inputs: { up: true } },
  { t: 13307, position: { x: 155.2974090576172, z: -18.710262298583984 }, delta: { x: 0.08269570767879486, z: 0.0021394207142293453 } },
  { t: 13308, position: { x: 155.4780731201172, z: -18.705589294433594 }, delta: { x: 0.09864196926355362, z: 0.002551966579630971 } },
  { t: 13309, position: { x: 155.60610961914062, z: -18.7022762298584 }, yaw: -88.51802062988281, headYaw: -88.51802062988281, moveVector: { z: 0.30000001192092896 }, delta: { x: 0.06990554928779602, z: 0.0018085266929119825 }, inputs: { sneaking: true, sneakDown: true, wantDown: true, startSneaking: true, sneakPressedRaw: true, sneakCurrentRaw: true } },
  { t: 13310, position: { x: 155.7053985595703, z: -18.69970703125 }, delta: { x: 0.05421546846628189, z: 0.0014026084681972861 }, inputs: { startSneaking: false, sneakPressedRaw: false } },
  { t: 13311, position: { x: 155.78900146484375, z: -18.69754409790039 }, delta: { x: 0.04564868286252022, z: 0.0011809770949184895 } },
  { t: 13312, position: { x: 155.86404418945312, z: -18.695602416992188 }, delta: { x: 0.040971215814352036, z: 0.0010599663946777582 } },
  { t: 13313, position: { x: 155.9344024658203, z: -18.693782806396484 }, delta: { x: 0.03841732069849968, z: 0.0009938945295289159 } },
  { t: 13314, position: { x: 156.00221252441406, z: -18.692028045654297 }, delta: { x: 0.03702289238572121, z: 0.000957819283939898 } },
  { t: 13315, position: { x: 156.06861877441406, z: -18.690309524536133 }, delta: { x: 0.03626153618097305, z: 0.000938122218940407 } },
  { t: 13316, position: { x: 156.13427734375, z: -18.68861198425293 }, delta: { x: 0.035845834761857986, z: 0.000927367655094713 } },
  { t: 13317, position: { x: 156.1995086669922, z: -18.68692398071289 }, yaw: -88.51802825927734, headYaw: -88.51802825927734, delta: { x: 0.0356188602745533, z: 0.0009214956080541015 } },
  { t: 13318, position: { x: 156.26451110839844, z: -18.68524169921875 }, yaw: -88.51802062988281, headYaw: -88.51802062988281, delta: { x: 0.035494934767484665, z: 0.0009182894718833268 } },
  { t: 13319, position: { x: 156.3000030517578, z: -18.684324264526367 }, moveVector: { z: 0 }, delta: { x: 0.0193802360445261, z: 0.000501386122778058 }, inputs: { sneaking: false, sneakDown: false, up: false, wantDown: false, stopSneaking: true, sneakReleasedRaw: true, sneakCurrentRaw: false } },
  { t: 13320, position: { x: 156.3193817138672, z: -18.683822631835938 }, yaw: -88.51801300048828, headYaw: -88.51801300048828, delta: { x: 0.010581609793007374, z: 0.00027375685749575496 }, inputs: { stopSneaking: false, sneakReleasedRaw: false } },
  { t: 13321, position: { x: 156.3299560546875, z: -18.683547973632812 }, yaw: -88.51802062988281, headYaw: -88.51802062988281, delta: { x: 0.005777559708803892, z: 0.00014947126328479499 } },
  { t: 13322, position: { x: 156.3357391357422, z: -18.683399200439453 }, delta: { x: 0.0031545478850603104, z: 0.00008161131700035185 } }
]

describe('physics: walkThenSneak_w3_s10', () => {
  it('matches recorded client state per tick', () => {
    const h = makeHarness({ version: "1.26.10", scenario: 'walkThenSneak_w3_s10', softFailures: true })
    h.runScenario({ name: 'walkThenSneak_w3_s10', ticks: TICKS })
  })
})
