'use strict'

// Generated from .proxy.bin recording — do not edit by hand.
// Scenario: 1.21.0_walkThenSprint_w1_s10
// Frames: 26  (ticks 13628..13653)
//
// Each entry is a PAI diff. The first entry diffs from DEFAULT_PAI in
// _helpers.js; every subsequent entry diffs from the previous tick's
// full PAI. The harness reconstructs full PAI per tick and validates.

const { makeHarness } = require('./_helpers')

const TICKS = [
  { t: 13628, position: { x: 171.08079528808594, y: 1.6200100183486938, z: -18.301929473876953 }, yaw: -88.51802825927734, pitch: 0.000091552734375, headYaw: -88.51802825927734, delta: { x: 0.0000012105598443667986, y: -0.07840000092983246 }, inputs: { blockBreakingDelayEnabled: true, verticalCollision: true } },
  { t: 13629, delta: { x: 6.60965724819107e-7 } },
  { t: 13630, delta: { x: 3.6088732713324134e-7 } },
  { t: 13631, yaw: -88.51801300048828, headYaw: -88.51801300048828, delta: { x: 1.9704449982782535e-7 } },
  { t: 13632, yaw: -88.51802825927734, headYaw: -88.51802825927734, delta: { x: 1.0758630963891846e-7 } },
  { t: 13633, delta: { x: 0 } },
  { t: 13634, yaw: -88.51801300048828, headYaw: -88.51801300048828 },
  { t: 13635 },
  { t: 13636, yaw: -88.51802825927734, headYaw: -88.51802825927734 },
  { t: 13637, position: { x: 171.1787567138672, z: -18.299394607543945 }, moveVector: { z: 1 }, delta: { x: 0.053490106016397476, z: 0.0013838425511494279 }, inputs: { up: true } },
  { t: 13638, position: { x: 171.35960388183594, z: -18.294715881347656 }, yaw: -88.51801300048828, headYaw: -88.51801300048828, delta: { x: 0.09874273836612701, z: 0.002554589882493019 }, inputs: { sprintDown: true, sprinting: true, startSprinting: true } },
  { t: 13639, position: { x: 171.58570861816406, z: -18.28886604309082 }, delta: { x: 0.12345068156719208, z: 0.0031938180327415466 }, inputs: { startSprinting: false } },
  { t: 13640, position: { x: 171.83651733398438, z: -18.282377243041992 }, yaw: -88.51802825927734, headYaw: -88.51802825927734, delta: { x: 0.13694120943546295, z: 0.0035428202245384455 } },
  { t: 13641, position: { x: 172.10081481933594, z: -18.27553939819336 }, yaw: -88.51802062988281, headYaw: -88.51802062988281, delta: { x: 0.14430704712867737, z: 0.0037333753425627947 } },
  { t: 13642, position: { x: 172.3724822998047, z: -18.268510818481445 }, yaw: -88.51801300048828, headYaw: -88.51801300048828, delta: { x: 0.14832879602909088, z: 0.0038374350406229496 } },
  { t: 13643, position: { x: 172.64816284179688, z: -18.26137924194336 }, yaw: -88.51802825927734, headYaw: -88.51802825927734, delta: { x: 0.15052467584609985, z: 0.0038942350074648857 } },
  { t: 13644, position: { x: 172.92604064941406, z: -18.25419044494629 }, yaw: -88.51801300048828, headYaw: -88.51801300048828, delta: { x: 0.15172360837459564, z: 0.003925264347344637 } },
  { t: 13645, position: { x: 173.2051239013672, z: -18.246971130371094 }, yaw: -88.51802062988281, headYaw: -88.51802062988281, delta: { x: 0.15237823128700256, z: 0.003942189738154411 } },
  { t: 13646, position: { x: 173.48486328125, z: -18.239734649658203 }, delta: { x: 0.1527356654405594, z: 0.003951431252062321 } },
  { t: 13647, position: { x: 173.76495361328125, z: -18.23248863220215 }, delta: { x: 0.1529308259487152, z: 0.003956477157771587 } },
  { t: 13648, position: { x: 174.0452423095703, z: -18.225236892700195 }, yaw: -88.51801300048828, headYaw: -88.51801300048828, delta: { x: 0.15303738415241241, z: 0.003959248773753643 } },
  { t: 13649, position: { x: 174.19827270507812, z: -18.221277236938477 }, moveVector: { z: 0 }, delta: { x: 0.08355841785669327, z: 0.002161750104278326 }, inputs: { sprintDown: false, up: false, sprinting: false, stopSprinting: true } },
  { t: 13650, position: { x: 174.28182983398438, z: -18.2191162109375 }, yaw: -88.51802062988281, headYaw: -88.51802062988281, delta: { x: 0.04562290012836456, z: 0.0011803157394751906 }, inputs: { stopSprinting: false } },
  { t: 13651, position: { x: 174.32745361328125, z: -18.21793556213379 }, yaw: -88.51801300048828, headYaw: -88.51801300048828, delta: { x: 0.024910107254981995, z: 0.000644452462438494 } },
  { t: 13652, position: { x: 174.3523712158203, z: -18.2172908782959 }, yaw: -88.51802825927734, headYaw: -88.51802825927734, delta: { x: 0.01360092032700777, z: 0.0003518710727803409 } },
  { t: 13653, position: { x: 174.365966796875, z: -18.21693992614746 }, yaw: -88.51802062988281, headYaw: -88.51802062988281, delta: { x: 0.007426103577017784, z: 0.0001921216316986829 } }
]

describe('physics: walkThenSprint_w1_s10', () => {
  it('matches recorded client state per tick', () => {
    const h = makeHarness({ version: "1.26.10", scenario: 'walkThenSprint_w1_s10', softFailures: true })
    h.runScenario({ name: 'walkThenSprint_w1_s10', ticks: TICKS })
  })
})
