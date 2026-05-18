'use strict'

// Generated from .proxy.bin recording — do not edit by hand.
// Scenario: 1.21.0_sneak_10t_to_sprint_10t
// Frames: 34  (ticks 11588..11621)
//
// Each entry is a PAI diff. The first entry diffs from DEFAULT_PAI in
// _helpers.js; every subsequent entry diffs from the previous tick's
// full PAI. The harness reconstructs full PAI per tick and validates.

const { makeHarness } = require('./_helpers')

const TICKS = [
  { t: 11588, position: { x: 6.564830303192139, y: 1.6200100183486938, z: -22.55814552307129 }, yaw: -88.51802825927734, pitch: 0.000091552734375, headYaw: -88.51802825927734, delta: { x: 0.000001213382802234264, y: -0.07840000092983246 }, inputs: { blockBreakingDelayEnabled: true, verticalCollision: true } },
  { t: 11589, position: { x: 6.564831733703613 }, delta: { x: 6.625070909649367e-7 } },
  { t: 11590, position: { x: 6.5648322105407715 }, delta: { x: 3.6172892237118504e-7 } },
  { t: 11591, position: { x: 6.56483268737793 }, yaw: -88.51801300048828, headYaw: -88.51801300048828, delta: { x: 1.975040078150414e-7 } },
  { t: 11592, yaw: -88.51802825927734, headYaw: -88.51802825927734, delta: { x: 1.0783720227891536e-7 } },
  { t: 11593, yaw: -88.51801300048828, headYaw: -88.51801300048828, delta: { x: 0 } },
  { t: 11594 },
  { t: 11595, yaw: -88.51802825927734, headYaw: -88.51802825927734 },
  { t: 11596, yaw: -88.51801300048828, headYaw: -88.51801300048828 },
  { t: 11597, position: { x: 6.5942230224609375, z: -22.557384490966797 }, yaw: -88.51802825927734, headYaw: -88.51802825927734, moveVector: { z: 0.30000001192092896 }, delta: { x: 0.016047032549977303, z: 0.0004151528119109571 }, inputs: { sneaking: true, sneakDown: true, up: true, wantDown: true, startSneaking: true, sneakPressedRaw: true, sneakCurrentRaw: true } },
  { t: 11598, position: { x: 6.639660358428955, z: -22.556209564208984 }, delta: { x: 0.024808714166283607, z: 0.0006418262491934001 }, inputs: { startSneaking: false, sneakPressedRaw: false } },
  { t: 11599, position: { x: 6.693859100341797, z: -22.554807662963867 }, delta: { x: 0.029592594131827354, z: 0.0007655899389646947 } },
  { t: 11600, position: { x: 6.752841949462891, z: -22.553281784057617 }, yaw: -88.51801300048828, headYaw: -88.51801300048828, delta: { x: 0.03220459073781967, z: 0.0008331688004545867 } },
  { t: 11601, position: { x: 6.814436912536621, z: -22.55168914794922 }, yaw: -88.51802825927734, headYaw: -88.51802825927734, delta: { x: 0.033630743622779846, z: 0.0008700630278326571 } },
  { t: 11602, position: { x: 6.877457618713379, z: -22.550058364868164 }, delta: { x: 0.03440942242741585, z: 0.0008902073022909462 } },
  { t: 11603, position: { x: 6.941256999969482, z: -22.54840850830078 }, delta: { x: 0.03483457863330841, z: 0.0009012061054818332 } },
  { t: 11604, position: { x: 7.005481719970703, z: -22.5467472076416 }, yaw: -88.51801300048828, headYaw: -88.51801300048828, delta: { x: 0.035066716372966766, z: 0.0009072152315638959 } },
  { t: 11605, position: { x: 7.069938659667969, z: -22.545080184936523 }, yaw: -88.51802825927734, headYaw: -88.51802825927734, delta: { x: 0.035193461924791336, z: 0.0009104923810809851 } },
  { t: 11606, position: { x: 7.134522438049316, z: -22.54340934753418 }, yaw: -88.51801300048828, headYaw: -88.51801300048828, delta: { x: 0.03526266664266586, z: 0.0009122855844907463 } },
  { t: 11607, position: { x: 7.1991753578186035, z: -22.541736602783203 }, yaw: -88.51802825927734, headYaw: -88.51802825927734, delta: { x: 0.035300448536872864, z: 0.0009132607956416905 }, inputs: { sprintDown: true, sneaking: false, sneakDown: false, wantDown: false, sprinting: true, stopSneaking: true, sneakReleasedRaw: true, sneakCurrentRaw: false } },
  { t: 11608, position: { x: 7.361833095550537, z: -22.53752899169922 }, moveVector: { z: 1 }, delta: { x: 0.08881118148565292, z: 0.0022976358886808157 }, inputs: { startSprinting: true, stopSneaking: false, sneakReleasedRaw: false } },
  { t: 11609, position: { x: 7.578001499176025, z: -22.531936645507812 }, yaw: -88.51802062988281, headYaw: -88.51802062988281, delta: { x: 0.11802804470062256, z: 0.003053504740819335 }, inputs: { startSprinting: false } },
  { t: 11610, position: { x: 7.823387145996094, z: -22.525588989257812 }, yaw: -88.51801300048828, headYaw: -88.51801300048828, delta: { x: 0.13398045301437378, z: 0.0034662254620343447 } },
  { t: 11611, position: { x: 8.084725379943848, z: -22.518827438354492 }, yaw: -88.51802062988281, headYaw: -88.51802062988281, delta: { x: 0.14269046485424042, z: 0.0036915545351803303 } },
  { t: 11612, position: { x: 8.354772567749023, z: -22.5118408203125 }, yaw: -88.51802825927734, headYaw: -88.51802825927734, delta: { x: 0.1474461406469345, z: 0.003814584342762828 } },
  { t: 11613, position: { x: 8.629575729370117, z: -22.504732131958008 }, yaw: -88.51801300048828, headYaw: -88.51801300048828, delta: { x: 0.15004274249076843, z: 0.003881775075569749 } },
  { t: 11614, position: { x: 8.906976699829102, z: -22.497554779052734 }, delta: { x: 0.15146049857139587, z: 0.003918461501598358 } },
  { t: 11615, position: { x: 9.185794830322266, z: -22.490341186523438 }, yaw: -88.51802062988281, headYaw: -88.51802062988281, delta: { x: 0.15223458409309387, z: 0.003938475623726845 } },
  { t: 11616, position: { x: 9.465385437011719, z: -22.483108520507812 }, yaw: -88.51801300048828, headYaw: -88.51801300048828, delta: { x: 0.15265724062919617, z: 0.003949419595301151 } },
  { t: 11617, position: { x: 9.618043899536133, z: -22.479158401489258 }, yaw: -88.51802062988281, headYaw: -88.51802062988281, moveVector: { z: 0 }, delta: { x: 0.08335085958242416, z: 0.0021563833579421043 }, inputs: { sprintDown: false, up: false, sprinting: false, stopSprinting: true } },
  { t: 11618, position: { x: 9.701395034790039, z: -22.477001190185547 }, delta: { x: 0.04550957307219505, z: 0.0011773854494094849 }, inputs: { stopSprinting: false } },
  { t: 11619, position: { x: 9.746904373168945, z: -22.4758243560791 }, yaw: -88.51802825927734, headYaw: -88.51802825927734, delta: { x: 0.024848230183124542, z: 0.0006428525084629655 } },
  { t: 11620, position: { x: 9.771751403808594, z: -22.475181579589844 }, yaw: -88.51802062988281, headYaw: -88.51802062988281, delta: { x: 0.01356713566929102, z: 0.00035099752130918205 } },
  { t: 11621, position: { x: 9.785318374633789, z: -22.474830627441406 }, yaw: -88.51801300048828, headYaw: -88.51801300048828, delta: { x: 0.007407656870782375, z: 0.00019164466357324272 } }
]

describe('physics: sneak_10t_to_sprint_10t', () => {
  it('matches recorded client state per tick', () => {
    const h = makeHarness({ version: "1.26.10", scenario: 'sneak_10t_to_sprint_10t', softFailures: true })
    h.runScenario({ name: 'sneak_10t_to_sprint_10t', ticks: TICKS })
  })
})
