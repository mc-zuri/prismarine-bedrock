'use strict'

// Generated from .proxy.bin recording — do not edit by hand.
// Scenario: 1.21.0_walkThenSprint_w2_s10
// Frames: 26  (ticks 13665..13690)
//
// Each entry is a PAI diff. The first entry diffs from DEFAULT_PAI in
// _helpers.js; every subsequent entry diffs from the previous tick's
// full PAI. The harness reconstructs full PAI per tick and validates.

const { makeHarness } = require('./_helpers')

const TICKS = [
  { t: 13665, position: { x: 174.38232421875, y: 1.6200100183486938, z: -18.21651840209961 }, yaw: -88.51800537109375, pitch: 0.000091552734375, headYaw: -88.51800537109375, delta: { x: 0.000005212827090872452, y: -0.07840000092983246, z: 1.3486167915743863e-7 }, inputs: { blockBreakingDelayEnabled: true, verticalCollision: true } },
  { t: 13666, yaw: -88.51802062988281, headYaw: -88.51802062988281, delta: { x: 0.0000028462038699217374, z: 7.363448872865774e-8 } },
  { t: 13667, yaw: -88.51802825927734, headYaw: -88.51802825927734, delta: { x: 0.0000015540274489467265, z: 0 } },
  { t: 13668, delta: { x: 8.484990985380136e-7 } },
  { t: 13669, delta: { x: 4.632805712390109e-7 } },
  { t: 13670, delta: { x: 2.5295122441093554e-7 } },
  { t: 13671, delta: { x: 1.381113889920016e-7 } },
  { t: 13672, yaw: -88.51801300048828, headYaw: -88.51801300048828, delta: { x: 7.540882762668843e-8 } },
  { t: 13673, yaw: -88.51802825927734, headYaw: -88.51802825927734, delta: { x: 0 } },
  { t: 13674, position: { x: 174.48028564453125, z: -18.2139835357666 }, moveVector: { z: 1 }, delta: { x: 0.053490106016397476, z: 0.0013838425511494279 }, inputs: { up: true } },
  { t: 13675, position: { x: 174.63174438476562, z: -18.210065841674805 }, yaw: -88.51801300048828, headYaw: -88.51801300048828, delta: { x: 0.08269570767879486, z: 0.0021394335199147463 } },
  { t: 13676, position: { x: 174.841796875, z: -18.204631805419922 }, yaw: -88.51802825927734, headYaw: -88.51802825927734, delta: { x: 0.11468899995088577, z: 0.0029671259690076113 }, inputs: { sprintDown: true, sprinting: true, startSprinting: true } },
  { t: 13677, position: { x: 175.08384704589844, z: -18.1983699798584 }, delta: { x: 0.1321573406457901, z: 0.0034190460573881865 }, inputs: { startSprinting: false } },
  { t: 13678, position: { x: 175.34336853027344, z: -18.1916561126709 }, yaw: -88.51802062988281, headYaw: -88.51802062988281, delta: { x: 0.1416950523853302, z: 0.003665794851258397 } },
  { t: 13679, position: { x: 175.6124267578125, z: -18.184696197509766 }, delta: { x: 0.1469026505947113, z: 0.003800519509240985 } },
  { t: 13680, position: { x: 175.88668823242188, z: -18.177600860595703 }, yaw: -88.51801300048828, headYaw: -88.51801300048828, delta: { x: 0.14974600076675415, z: 0.0038740956224501133 } },
  { t: 13681, position: { x: 176.16378784179688, z: -18.17043113708496 }, delta: { x: 0.15129844844341278, z: 0.003914268221706152 } },
  { t: 13682, position: { x: 176.44244384765625, z: -18.16322135925293 }, yaw: -88.51802825927734, headYaw: -88.51802825927734, delta: { x: 0.1521461009979248, z: 0.003936185967177153 } },
  { t: 13683, position: { x: 176.72195434570312, z: -18.155990600585938 }, delta: { x: 0.15260891616344452, z: 0.003948152996599674 } },
  { t: 13684, position: { x: 177.00192260742188, z: -18.14874839782715 }, delta: { x: 0.1528616100549698, z: 0.003954687155783176 } },
  { t: 13685, position: { x: 177.28213500976562, z: -18.141498565673828 }, yaw: -88.51802062988281, headYaw: -88.51802062988281, delta: { x: 0.15299957990646362, z: 0.003958254586905241 } },
  { t: 13686, position: { x: 177.4351348876953, z: -18.137540817260742 }, moveVector: { z: 0 }, delta: { x: 0.08353777974843979, z: 0.002161207143217325 }, inputs: { sprintDown: false, up: false, sprinting: false, stopSprinting: true } },
  { t: 13687, position: { x: 177.5186767578125, z: -18.135379791259766 }, delta: { x: 0.045611634850502014, z: 0.0011800192296504974 }, inputs: { stopSprinting: false } },
  { t: 13688, position: { x: 177.5642852783203, z: -18.134199142456055 }, delta: { x: 0.024903954938054085, z: 0.0006442905869334936 } },
  { t: 13689, position: { x: 177.5891876220703, z: -18.133554458618164 }, yaw: -88.51801300048828, headYaw: -88.51801300048828, delta: { x: 0.013597561046481133, z: 0.00035178271355107427 } },
  { t: 13690, position: { x: 177.602783203125, z: -18.133203506469727 }, yaw: -88.51802062988281, headYaw: -88.51802062988281, delta: { x: 0.007424269337207079, z: 0.00019207337754778564 } }
]

describe('physics: walkThenSprint_w2_s10', () => {
  it('matches recorded client state per tick', () => {
    const h = makeHarness({ version: "1.26.10", scenario: 'walkThenSprint_w2_s10', softFailures: true })
    h.runScenario({ name: 'walkThenSprint_w2_s10', ticks: TICKS })
  })
})
