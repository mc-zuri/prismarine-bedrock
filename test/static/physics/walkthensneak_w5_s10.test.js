'use strict'

// Generated from .proxy.bin recording — do not edit by hand.
// Scenario: 1.21.0_walkThenSneak_w5_s10
// Frames: 29  (ticks 13373..13401)
//
// Each entry is a PAI diff. The first entry diffs from DEFAULT_PAI in
// _helpers.js; every subsequent entry diffs from the previous tick's
// full PAI. The harness reconstructs full PAI per tick and validates.

const { makeHarness } = require('./_helpers')

const TICKS = [
  { t: 13373, position: { x: 157.6373748779297, y: 1.6200100183486938, z: -18.64972496032715 }, yaw: -88.51802825927734, pitch: 0.000091552734375, headYaw: -88.51802825927734, delta: { x: 0.0000012090440577594563, y: -0.07840000092983246 }, inputs: { blockBreakingDelayEnabled: true, verticalCollision: true } },
  { t: 13374, delta: { x: 6.601381414839125e-7 } },
  { t: 13375, delta: { x: 3.604354787967168e-7 } },
  { t: 13376, delta: { x: 1.9679779938996944e-7 } },
  { t: 13377, delta: { x: 1.0745161205250042e-7 } },
  { t: 13378, yaw: -88.51801300048828, headYaw: -88.51801300048828, delta: { x: 0 } },
  { t: 13379, yaw: -88.51802825927734, headYaw: -88.51802825927734 },
  { t: 13380, yaw: -88.51801300048828, headYaw: -88.51801300048828 },
  { t: 13381 },
  { t: 13382, position: { x: 157.73533630371094, z: -18.64719009399414 }, moveVector: { z: 1 }, delta: { x: 0.053490109741687775, z: 0.0013838553568348289 }, inputs: { up: true } },
  { t: 13383, position: { x: 157.8867950439453, z: -18.643272399902344 }, yaw: -88.51802825927734, headYaw: -88.51802825927734, delta: { x: 0.08269570767879486, z: 0.002139427699148655 } },
  { t: 13384, position: { x: 158.0674591064453, z: -18.63859748840332 }, yaw: -88.51801300048828, headYaw: -88.51801300048828, delta: { x: 0.09864196926355362, z: 0.0025519831106066704 } },
  { t: 13385, position: { x: 158.26406860351562, z: -18.63351058959961 }, delta: { x: 0.10734863579273224, z: 0.0027772383764386177 } },
  { t: 13386, position: { x: 158.46939086914062, z: -18.628198623657227 }, yaw: -88.51802825927734, headYaw: -88.51802825927734, delta: { x: 0.11210247129201889, z: 0.0029002148658037186 } },
  { t: 13387, position: { x: 158.6108856201172, z: -18.62453842163086 }, yaw: -88.51802062988281, headYaw: -88.51802062988281, moveVector: { z: 0.30000001192092896 }, delta: { x: 0.07725498825311661, z: 0.0019986703991889954 }, inputs: { sneaking: true, sneakDown: true, wantDown: true, startSneaking: true, sneakPressedRaw: true, sneakCurrentRaw: true } },
  { t: 13388, position: { x: 158.717529296875, z: -18.62177848815918 }, delta: { x: 0.0582282654941082, z: 0.0015064270701259375 }, inputs: { startSneaking: false, sneakPressedRaw: false } },
  { t: 13389, position: { x: 158.80514526367188, z: -18.6195125579834 }, delta: { x: 0.04783967137336731, z: 0.0012376620434224606 } },
  { t: 13390, position: { x: 158.8823699951172, z: -18.61751365661621 }, delta: { x: 0.04216749966144562, z: 0.0010909164557233453 } },
  { t: 13391, position: { x: 158.9539337158203, z: -18.61566162109375 }, delta: { x: 0.0390704944729805, z: 0.001010793261229992 } },
  { t: 13392, position: { x: 159.02239990234375, z: -18.613889694213867 }, delta: { x: 0.03737952932715416, z: 0.0009670460131019354 } },
  { t: 13393, position: { x: 159.08917236328125, z: -18.61216163635254 }, delta: { x: 0.03645625710487366, z: 0.0009431599755771458 } },
  { t: 13394, position: { x: 159.15501403808594, z: -18.610458374023438 }, delta: { x: 0.03595215454697609, z: 0.0009301182581111789 } },
  { t: 13395, position: { x: 159.22035217285156, z: -18.608768463134766 }, delta: { x: 0.03567691147327423, z: 0.0009229974239133298 } },
  { t: 13396, position: { x: 159.28541564941406, z: -18.607084274291992 }, delta: { x: 0.03552662953734398, z: 0.0009191094432026148 } },
  { t: 13397, position: { x: 159.32093811035156, z: -18.606164932250977 }, moveVector: { z: 0 }, delta: { x: 0.019397541880607605, z: 0.0005018337978981435 }, inputs: { sneaking: false, sneakDown: false, up: false, wantDown: false, stopSneaking: true, sneakReleasedRaw: true, sneakCurrentRaw: false } },
  { t: 13398, position: { x: 159.34033203125, z: -18.605663299560547 }, delta: { x: 0.010591058991849422, z: 0.0002740012714639306 }, inputs: { stopSneaking: false, sneakReleasedRaw: false } },
  { t: 13399, position: { x: 159.35092163085938, z: -18.605388641357422 }, delta: { x: 0.005782718770205975, z: 0.0001496047043474391 } },
  { t: 13400, position: { x: 159.35670471191406, z: -18.605239868164062 }, yaw: -88.51800537109375, headYaw: -88.51800537109375, delta: { x: 0.0031573649030178785, z: 0.00008168417843990028 } },
  { t: 13401, position: { x: 159.35986328125, z: -18.60515785217285 }, yaw: -88.51802062988281, headYaw: -88.51802062988281, delta: { x: 0.0017239213921129704, z: 0.0000445995683548972 } }
]

describe('physics: walkThenSneak_w5_s10', () => {
  it('matches recorded client state per tick', () => {
    const h = makeHarness({ version: "1.26.10", scenario: 'walkThenSneak_w5_s10', softFailures: true })
    h.runScenario({ name: 'walkThenSneak_w5_s10', ticks: TICKS })
  })
})
