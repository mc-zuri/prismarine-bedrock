'use strict'

// Generated from .proxy.bin recording — do not edit by hand.
// Scenario: 1.21.0_walkThenSneak_w7_s10
// Frames: 31  (ticks 13454..13484)
//
// Each entry is a PAI diff. The first entry diffs from DEFAULT_PAI in
// _helpers.js; every subsequent entry diffs from the previous tick's
// full PAI. The harness reconstructs full PAI per tick and validates.

const { makeHarness } = require('./_helpers')

const TICKS = [
  { t: 13454, position: { x: 161.37046813964844, y: 1.6200100183486938, z: -18.55314064025879 }, yaw: -88.51802825927734, pitch: 0.000091552734375, headYaw: -88.51802825927734, delta: { x: 0.0000022114325020083925, y: -0.07840000092983246 }, inputs: { blockBreakingDelayEnabled: true, verticalCollision: true } },
  { t: 13455, delta: { x: 0.0000012074423239027965 } },
  { t: 13456, delta: { x: 6.592636054847389e-7 } },
  { t: 13457, delta: { x: 3.5995796565657656e-7 } },
  { t: 13458, yaw: -88.51801300048828, headYaw: -88.51801300048828, delta: { x: 1.9653707283850963e-7 } },
  { t: 13459, yaw: -88.51802825927734, headYaw: -88.51802825927734, delta: { x: 1.0730925481539089e-7 } },
  { t: 13460, delta: { x: 0 } },
  { t: 13461 },
  { t: 13462 },
  { t: 13463, yaw: -88.51801300048828, headYaw: -88.51801300048828 },
  { t: 13464, position: { x: 161.4684295654297, z: -18.55060577392578 }, moveVector: { z: 1 }, delta: { x: 0.053490109741687775, z: 0.0013838553568348289 }, inputs: { up: true } },
  { t: 13465, position: { x: 161.61988830566406, z: -18.546688079833984 }, yaw: -88.51802825927734, headYaw: -88.51802825927734, delta: { x: 0.08269570767879486, z: 0.002139427699148655 } },
  { t: 13466, position: { x: 161.80055236816406, z: -18.542015075683594 }, delta: { x: 0.09864196926355362, z: 0.0025519700720906258 } },
  { t: 13467, position: { x: 161.99716186523438, z: -18.536928176879883 }, delta: { x: 0.10734862834215164, z: 0.0027772183530032635 } },
  { t: 13468, position: { x: 162.20248413085938, z: -18.5316162109375 }, yaw: -88.51802062988281, headYaw: -88.51802062988281, delta: { x: 0.11210247129201889, z: 0.0029002041555941105 } },
  { t: 13469, position: { x: 162.4125518798828, z: -18.526182174682617 }, delta: { x: 0.11469805985689163, z: 0.0029673543758690357 } },
  { t: 13470, position: { x: 162.62521362304688, z: -18.520679473876953 }, yaw: -88.51801300048828, headYaw: -88.51801300048828, delta: { x: 0.1161152645945549, z: 0.0030040310230106115 } },
  { t: 13471, position: { x: 162.77072143554688, z: -18.51691436767578 }, yaw: -88.51802062988281, headYaw: -88.51802062988281, moveVector: { z: 0.30000001192092896 }, delta: { x: 0.0794459730386734, z: 0.0020553539507091045 }, inputs: { sneaking: true, sneakDown: true, wantDown: true, startSneaking: true, sneakPressedRaw: true, sneakCurrentRaw: true } },
  { t: 13472, position: { x: 162.8795623779297, z: -18.51409912109375 }, delta: { x: 0.059424541890621185, z: 0.0015373763162642717 }, inputs: { startSneaking: false, sneakPressedRaw: false } },
  { t: 13473, position: { x: 162.9683837890625, z: -18.51180076599121 }, delta: { x: 0.04849283769726753, z: 0.0012545603094622493 } },
  { t: 13474, position: { x: 163.0462646484375, z: -18.50978660583496 }, yaw: -88.51802825927734, headYaw: -88.51802825927734, delta: { x: 0.042524125427007675, z: 0.0011001428356394172 } },
  { t: 13475, position: { x: 163.11817932128906, z: -18.50792694091797 }, delta: { x: 0.03926520794630051, z: 0.0010158309014514089 } },
  { t: 13476, position: { x: 163.18682861328125, z: -18.50615119934082 }, delta: { x: 0.03748583793640137, z: 0.0009697965579107404 } },
  { t: 13477, position: { x: 163.2537078857422, z: -18.50442123413086 }, yaw: -88.51802062988281, headYaw: -88.51802062988281, delta: { x: 0.03651430457830429, z: 0.0009446617914363742 } },
  { t: 13478, position: { x: 163.31961059570312, z: -18.502716064453125 }, yaw: -88.51802825927734, headYaw: -88.51802825927734, delta: { x: 0.035983845591545105, z: 0.0009309382294304669 } },
  { t: 13479, position: { x: 163.38497924804688, z: -18.50102424621582 }, yaw: -88.51802062988281, headYaw: -88.51802062988281, delta: { x: 0.03569421544671059, z: 0.0009234451572410762 } },
  { t: 13480, position: { x: 163.45005798339844, z: -18.499340057373047 }, delta: { x: 0.03553607687354088, z: 0.0009193539153784513 } },
  { t: 13481, position: { x: 163.485595703125, z: -18.49842071533203 }, yaw: -88.51802825927734, headYaw: -88.51802825927734, moveVector: { z: 0 }, delta: { x: 0.019402699545025826, z: 0.0005019672680646181 }, inputs: { sneaking: false, sneakDown: false, up: false, wantDown: false, stopSneaking: true, sneakReleasedRaw: true, sneakCurrentRaw: false } },
  { t: 13482, position: { x: 163.5050048828125, z: -18.4979190826416 }, yaw: -88.51801300048828, headYaw: -88.51801300048828, delta: { x: 0.01059387531131506, z: 0.00027407414745539427 }, inputs: { stopSneaking: false, sneakReleasedRaw: false } },
  { t: 13483, position: { x: 163.51559448242188, z: -18.497644424438477 }, yaw: -88.51800537109375, headYaw: -88.51800537109375, delta: { x: 0.005784256383776665, z: 0.0001496445038355887 } },
  { t: 13484, position: { x: 163.52137756347656, z: -18.497495651245117 }, yaw: -88.51802062988281, headYaw: -88.51802062988281, delta: { x: 0.0031582042574882507, z: 0.00008170591172529384 } }
]

describe('physics: walkThenSneak_w7_s10', () => {
  it('matches recorded client state per tick', () => {
    const h = makeHarness({ version: "1.26.10", scenario: 'walkThenSneak_w7_s10', softFailures: true })
    h.runScenario({ name: 'walkThenSneak_w7_s10', ticks: TICKS })
  })
})
