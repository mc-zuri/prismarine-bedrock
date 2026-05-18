'use strict'

// Generated from .proxy.bin recording — do not edit by hand.
// Scenario: 1.21.0_walkForward_9t
// Frames: 23  (ticks 11974..11996)
//
// Each entry is a PAI diff. The first entry diffs from DEFAULT_PAI in
// _helpers.js; every subsequent entry diffs from the previous tick's
// full PAI. The harness reconstructs full PAI per tick and validates.

const { makeHarness } = require('./_helpers')

const TICKS = [
  { t: 11974, position: { x: 30.88398551940918, y: 1.6200100183486938, z: -21.928991317749023 }, yaw: -88.51802062988281, pitch: 0.000091552734375, headYaw: -88.51802062988281, delta: { x: 0.000007292171630979283, y: -0.07840000092983246, z: 1.8865615913910005e-7 }, inputs: { blockBreakingDelayEnabled: true, verticalCollision: true } },
  { t: 11975, position: { x: 30.88399314880371 }, delta: { x: 0.000003981526333518559, z: 1.0300627195647394e-7 } },
  { t: 11976, position: { x: 30.883996963500977 }, yaw: -88.51802825927734, headYaw: -88.51802825927734, delta: { x: 0.0000021739135718235048, z: 0 } },
  { t: 11977, position: { x: 30.88399887084961 }, delta: { x: 0.0000011869569789269008 } },
  { t: 11978, position: { x: 30.884000778198242 }, delta: { x: 6.480785827989166e-7 } },
  { t: 11979, delta: { x: 3.538509361078468e-7 } },
  { t: 11980, delta: { x: 1.9320263788813463e-7 } },
  { t: 11981, delta: { x: 1.0548865247983485e-7 } },
  { t: 11982, delta: { x: 0 } },
  { t: 11983 },
  { t: 11984, position: { x: 30.98196792602539, z: -21.926456451416016 }, moveVector: { z: 1 }, delta: { x: 0.053490106016397476, z: 0.0013838425511494279 }, inputs: { up: true } },
  { t: 11985, position: { x: 31.133424758911133, z: -21.92253875732422 }, delta: { x: 0.08269570767879486, z: 0.0021394207142293453 } },
  { t: 11986, position: { x: 31.3140869140625, z: -21.917865753173828 }, delta: { x: 0.09864196926355362, z: 0.002551966579630971 } },
  { t: 11987, position: { x: 31.510696411132812, z: -21.912778854370117 }, delta: { x: 0.10734862834215164, z: 0.0027772164903581142 } },
  { t: 11988, position: { x: 31.716012954711914, z: -21.907466888427734 }, delta: { x: 0.1121024638414383, z: 0.0029002029914408922 } },
  { t: 11989, position: { x: 31.926082611083984, z: -21.90203285217285 }, yaw: -88.51801300048828, headYaw: -88.51801300048828, delta: { x: 0.11469805985689163, z: 0.0029673664830625057 } },
  { t: 11990, position: { x: 32.13874816894531, z: -21.896530151367188 }, yaw: -88.51802825927734, headYaw: -88.51802825927734, delta: { x: 0.1161152571439743, z: 0.0030040249694138765 } },
  { t: 11991, position: { x: 32.35282897949219, z: -21.8909912109375 }, yaw: -88.51802062988281, headYaw: -88.51802062988281, delta: { x: 0.11688904464244843, z: 0.003024040488526225 } },
  { t: 11992, position: { x: 32.46971893310547, z: -21.887968063354492 }, moveVector: { z: 0 }, delta: { x: 0.06382142752408981, z: 0.0016511263092979789 }, inputs: { up: false } },
  { t: 11993, position: { x: 32.533538818359375, z: -21.886316299438477 }, delta: { x: 0.03484650328755379, z: 0.0009015150717459619 } },
  { t: 11994, position: { x: 32.568389892578125, z: -21.885414123535156 }, delta: { x: 0.019026193767786026, z: 0.0004922272637486458 } },
  { t: 11995, position: { x: 32.58741760253906, z: -21.88492202758789 }, delta: { x: 0.010388302616775036, z: 0.00026875612093135715 } },
  { t: 11996, position: { x: 32.597801208496094, z: -21.884653091430664 }, delta: { x: 0.005672013852745295, z: 0.00014674085832666606 } }
]

describe('physics: walkForward_9t', () => {
  it('matches recorded client state per tick', () => {
    const h = makeHarness({ version: "1.26.10", scenario: 'walkForward_9t', softFailures: true })
    h.runScenario({ name: 'walkForward_9t', ticks: TICKS })
  })
})
