'use strict'

// Generated from .proxy.bin recording — do not edit by hand.
// Scenario: 1.21.0_walkThenSneak_w2_s10
// Frames: 26  (ticks 13259..13284)
//
// Each entry is a PAI diff. The first entry diffs from DEFAULT_PAI in
// _helpers.js; every subsequent entry diffs from the previous tick's
// full PAI. The harness reconstructs full PAI per tick and validates.

const { makeHarness } = require('./_helpers')

const TICKS = [
  { t: 13259, position: { x: 153.9690399169922, y: 1.6200100183486938, z: -18.744626998901367 }, yaw: -88.51802825927734, pitch: 0.000091552734375, headYaw: -88.51802825927734, delta: { x: 0.0000022120241283118958, y: -0.07840000092983246 }, inputs: { blockBreakingDelayEnabled: true, verticalCollision: true } },
  { t: 13260, delta: { x: 0.0000012077653082087636 } },
  { t: 13261, delta: { x: 6.594399337700452e-7 } },
  { t: 13262, yaw: -88.51801300048828, headYaw: -88.51801300048828, delta: { x: 3.6005425840812677e-7 } },
  { t: 13263, delta: { x: 1.9658965300095588e-7 } },
  { t: 13264, yaw: -88.51802825927734, headYaw: -88.51802825927734, delta: { x: 1.073379607419156e-7 } },
  { t: 13265, delta: { x: 0 } },
  { t: 13266, yaw: -88.51801300048828, headYaw: -88.51801300048828 },
  { t: 13267 },
  { t: 13268 },
  { t: 13269, position: { x: 154.06700134277344, z: -18.74209213256836 }, yaw: -88.51802825927734, headYaw: -88.51802825927734, moveVector: { z: 1 }, delta: { x: 0.053490106016397476, z: 0.0013838425511494279 }, inputs: { up: true } },
  { t: 13270, position: { x: 154.2184600830078, z: -18.738174438476562 }, delta: { x: 0.08269570767879486, z: 0.0021394207142293453 } },
  { t: 13271, position: { x: 154.33055114746094, z: -18.735275268554688 }, moveVector: { z: 0.30000001192092896 }, delta: { x: 0.061198897659778595, z: 0.0015832767821848392 }, inputs: { sneaking: true, sneakDown: true, wantDown: true, startSneaking: true, sneakPressedRaw: true, sneakCurrentRaw: true } },
  { t: 13272, position: { x: 154.421142578125, z: -18.73293113708496 }, yaw: -88.51801300048828, headYaw: -88.51801300048828, delta: { x: 0.04946163669228554, z: 0.0012796259252354503 }, inputs: { startSneaking: false, sneakPressedRaw: false } },
  { t: 13273, position: { x: 154.5, z: -18.73089027404785 }, delta: { x: 0.04305309057235718, z: 0.001113832462579012 } },
  { t: 13274, position: { x: 154.57244873046875, z: -18.729015350341797 }, yaw: -88.51802825927734, headYaw: -88.51802825927734, delta: { x: 0.03955402597784996, z: 0.001023305463604629 } },
  { t: 13275, position: { x: 154.64138793945312, z: -18.727231979370117 }, yaw: -88.51801300048828, headYaw: -88.51801300048828, delta: { x: 0.03764353320002556, z: 0.0009738814551383257 } },
  { t: 13276, position: { x: 154.7084197998047, z: -18.72549819946289 }, yaw: -88.51802825927734, headYaw: -88.51802825927734, delta: { x: 0.03660040348768234, z: 0.0009468921343795955 } },
  { t: 13277, position: { x: 154.7744140625, z: -18.723791122436523 }, yaw: -88.51801300048828, headYaw: -88.51801300048828, delta: { x: 0.036030858755111694, z: 0.0009321598336100578 } },
  { t: 13278, position: { x: 154.83982849121094, z: -18.72209930419922 }, delta: { x: 0.03571988642215729, z: 0.0009241160005331039 } },
  { t: 13279, position: { x: 154.90493774414062, z: -18.720415115356445 }, yaw: -88.51802825927734, headYaw: -88.51802825927734, delta: { x: 0.03555009514093399, z: 0.0009197202161885798 } },
  { t: 13280, position: { x: 154.96987915039062, z: -18.718734741210938 }, yaw: -88.51801300048828, headYaw: -88.51801300048828, delta: { x: 0.035457391291856766, z: 0.0009173239814117551 } },
  { t: 13281, position: { x: 155.00534057617188, z: -18.717817306518555 }, yaw: -88.51802825927734, headYaw: -88.51802825927734, moveVector: { z: 0 }, delta: { x: 0.019359737634658813, z: 0.0005008589359931648 }, inputs: { sneaking: false, sneakDown: false, up: false, wantDown: false, stopSneaking: true, sneakReleasedRaw: true, sneakCurrentRaw: false } },
  { t: 13282, position: { x: 155.0247039794922, z: -18.717315673828125 }, delta: { x: 0.01057041808962822, z: 0.00027346902061253786 }, inputs: { stopSneaking: false, sneakReleasedRaw: false } },
  { t: 13283, position: { x: 155.0352783203125, z: -18.717042922973633 }, delta: { x: 0.005771448835730553, z: 0.00014931410260032862 } },
  { t: 13284, position: { x: 155.04104614257812, z: -18.716894149780273 }, delta: { x: 0.0031512114219367504, z: 0.00008152551163220778 } }
]

describe('physics: walkThenSneak_w2_s10', () => {
  it('matches recorded client state per tick', () => {
    const h = makeHarness({ version: "1.26.10", scenario: 'walkThenSneak_w2_s10', softFailures: true })
    h.runScenario({ name: 'walkThenSneak_w2_s10', ticks: TICKS })
  })
})
