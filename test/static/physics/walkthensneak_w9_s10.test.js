'use strict'

// Generated from .proxy.bin recording — do not edit by hand.
// Scenario: 1.21.0_walkThenSneak_w9_s10
// Frames: 33  (ticks 13539..13571)
//
// Each entry is a PAI diff. The first entry diffs from DEFAULT_PAI in
// _helpers.js; every subsequent entry diffs from the previous tick's
// full PAI. The harness reconstructs full PAI per tick and validates.

const { makeHarness } = require('./_helpers')

const TICKS = [
  { t: 13539, position: { x: 165.83721923828125, y: 1.6200100183486938, z: -18.437585830688477 }, yaw: -88.51802825927734, pitch: 0.000091552734375, headYaw: -88.51802825927734, delta: { x: 0.0000012159457583038602, y: -0.07840000092983246 }, inputs: { blockBreakingDelayEnabled: true, verticalCollision: true } },
  { t: 13540, yaw: -88.51801300048828, headYaw: -88.51801300048828, delta: { x: 6.63906462250452e-7 } },
  { t: 13541, yaw: -88.51802825927734, headYaw: -88.51802825927734, delta: { x: 3.624929831858026e-7 } },
  { t: 13542, delta: { x: 1.979211958769156e-7 } },
  { t: 13543, delta: { x: 1.0806498806914533e-7 } },
  { t: 13544, delta: { x: 0 } },
  { t: 13545 },
  { t: 13546 },
  { t: 13547 },
  { t: 13548, yaw: -88.51801300048828, headYaw: -88.51801300048828 },
  { t: 13549, position: { x: 165.9351806640625, z: -18.43505096435547 }, moveVector: { z: 1 }, delta: { x: 0.053490109741687775, z: 0.0013838553568348289 }, inputs: { up: true } },
  { t: 13550, position: { x: 166.08663940429688, z: -18.431133270263672 }, delta: { x: 0.08269571512937546, z: 0.002139440504834056 } },
  { t: 13551, position: { x: 166.26730346679688, z: -18.42646026611328 }, yaw: -88.51802825927734, headYaw: -88.51802825927734, delta: { x: 0.09864196926355362, z: 0.002551977289840579 } },
  { t: 13552, position: { x: 166.4639129638672, z: -18.42137336730957 }, delta: { x: 0.10734862834215164, z: 0.0027772223111242056 } },
  { t: 13553, position: { x: 166.6692352294922, z: -18.416061401367188 }, delta: { x: 0.1121024638414383, z: 0.0029002060182392597 } },
  { t: 13554, position: { x: 166.87930297851562, z: -18.410627365112305 }, yaw: -88.51802062988281, headYaw: -88.51802062988281, delta: { x: 0.11469805985689163, z: 0.0029673553071916103 } },
  { t: 13555, position: { x: 167.0919647216797, z: -18.40512466430664 }, yaw: -88.51801300048828, headYaw: -88.51801300048828, delta: { x: 0.1161152645945549, z: 0.003004031488671899 } },
  { t: 13556, position: { x: 167.30604553222656, z: -18.399585723876953 }, yaw: -88.51802062988281, headYaw: -88.51802062988281, delta: { x: 0.11688904464244843, z: 0.00302404398098588 } },
  { t: 13557, position: { x: 167.45233154296875, z: -18.395801544189453 }, yaw: -88.51802825927734, headYaw: -88.51802825927734, moveVector: { z: 0.30000001192092896 }, delta: { x: 0.07986845821142197, z: 0.002066281158477068 }, inputs: { sneaking: true, sneakDown: true, wantDown: true, startSneaking: true, sneakPressedRaw: true, sneakCurrentRaw: true } },
  { t: 13558, position: { x: 167.56158447265625, z: -18.392974853515625 }, yaw: -88.51802062988281, headYaw: -88.51802062988281, delta: { x: 0.059655219316482544, z: 0.0015433424850925803 }, inputs: { startSneaking: false, sneakPressedRaw: false } },
  { t: 13559, position: { x: 167.650634765625, z: -18.390670776367188 }, delta: { x: 0.04861878976225853, z: 0.0012578179594129324 } },
  { t: 13560, position: { x: 167.7286376953125, z: -18.388652801513672 }, yaw: -88.51801300048828, headYaw: -88.51801300048828, delta: { x: 0.04259289428591728, z: 0.0011019253870472312 } },
  { t: 13561, position: { x: 167.8006134033203, z: -18.386791229248047 }, delta: { x: 0.039302755147218704, z: 0.0010168079752475023 } },
  { t: 13562, position: { x: 167.8693084716797, z: -18.385013580322266 }, yaw: -88.51802062988281, headYaw: -88.51802062988281, delta: { x: 0.0375063419342041, z: 0.0009703300311230123 } },
  { t: 13563, position: { x: 167.9362030029297, z: -18.383283615112305 }, delta: { x: 0.03652549907565117, z: 0.0009449530625715852 } },
  { t: 13564, position: { x: 168.0021209716797, z: -18.38157844543457 }, delta: { x: 0.03598995879292488, z: 0.0009310972527600825 } },
  { t: 13565, position: { x: 168.0675048828125, z: -18.379886627197266 }, delta: { x: 0.03569755330681801, z: 0.0009235320030711591 } },
  { t: 13566, position: { x: 168.13259887695312, z: -18.378202438354492 }, delta: { x: 0.035537898540496826, z: 0.0009194012964144349 } },
  { t: 13567, position: { x: 168.19752502441406, z: -18.376522064208984 }, yaw: -88.51802825927734, headYaw: -88.51802825927734, delta: { x: 0.035450730472803116, z: 0.0009171459823846817 } },
  { t: 13568, position: { x: 168.23297119140625, z: -18.3756046295166 }, moveVector: { z: 0 }, delta: { x: 0.019356101751327515, z: 0.0005007617874071002 }, inputs: { sneaking: false, sneakDown: false, up: false, wantDown: false, stopSneaking: true, sneakReleasedRaw: true, sneakCurrentRaw: false } },
  { t: 13569, position: { x: 168.25233459472656, z: -18.375102996826172 }, yaw: -88.51802062988281, headYaw: -88.51802062988281, delta: { x: 0.01056843250989914, z: 0.00027341596432961524 }, inputs: { stopSneaking: false, sneakReleasedRaw: false } },
  { t: 13570, position: { x: 168.26290893554688, z: -18.37483024597168 }, delta: { x: 0.0057703647762537, z: 0.00014928512973710895 } },
  { t: 13571, position: { x: 168.2686767578125, z: -18.37468147277832 }, yaw: -88.51802825927734, headYaw: -88.51802825927734, delta: { x: 0.0031506195664405823, z: 0.00008150969370035455 } }
]

describe('physics: walkThenSneak_w9_s10', () => {
  it('matches recorded client state per tick', () => {
    const h = makeHarness({ version: "1.26.10", scenario: 'walkThenSneak_w9_s10', softFailures: true })
    h.runScenario({ name: 'walkThenSneak_w9_s10', ticks: TICKS })
  })
})
