'use strict'

// Generated from .proxy.bin recording — do not edit by hand.
// Scenario: 1.21.0_walkThenSneak_w6_s10
// Frames: 30  (ticks 13413..13442)
//
// Each entry is a PAI diff. The first entry diffs from DEFAULT_PAI in
// _helpers.js; every subsequent entry diffs from the previous tick's
// full PAI. The harness reconstructs full PAI per tick and validates.

const { makeHarness } = require('./_helpers')

const TICKS = [
  { t: 13413, position: { x: 159.3636474609375, y: 1.6200100183486938, z: -18.605060577392578 }, yaw: -88.51801300048828, pitch: 0.000091552734375, headYaw: -88.51801300048828, delta: { x: 0.0000012101237416572985, y: -0.07840000092983246 }, inputs: { blockBreakingDelayEnabled: true, verticalCollision: true } },
  { t: 13414, yaw: -88.51802825927734, headYaw: -88.51802825927734, delta: { x: 6.607276645809179e-7 } },
  { t: 13415, delta: { x: 3.607573546560161e-7 } },
  { t: 13416, delta: { x: 1.9697354503023234e-7 } },
  { t: 13417, yaw: -88.51801300048828, headYaw: -88.51801300048828, delta: { x: 1.0754757084896482e-7 } },
  { t: 13418, delta: { x: 0 } },
  { t: 13419 },
  { t: 13420 },
  { t: 13421, yaw: -88.51802825927734, headYaw: -88.51802825927734 },
  { t: 13422, position: { x: 159.46160888671875, z: -18.60252571105957 }, yaw: -88.51801300048828, headYaw: -88.51801300048828, moveVector: { z: 1 }, delta: { x: 0.053490109741687775, z: 0.0013838553568348289 }, inputs: { up: true } },
  { t: 13423, position: { x: 159.61306762695312, z: -18.598608016967773 }, delta: { x: 0.08269571512937546, z: 0.002139440504834056 } },
  { t: 13424, position: { x: 159.79373168945312, z: -18.593935012817383 }, yaw: -88.51802825927734, headYaw: -88.51802825927734, delta: { x: 0.09864196926355362, z: 0.002551977289840579 } },
  { t: 13425, position: { x: 159.99034118652344, z: -18.588848114013672 }, yaw: -88.51802062988281, headYaw: -88.51802062988281, delta: { x: 0.10734863579273224, z: 0.0027772223111242056 } },
  { t: 13426, position: { x: 160.19566345214844, z: -18.58353614807129 }, delta: { x: 0.11210247129201889, z: 0.0029002060182392597 } },
  { t: 13427, position: { x: 160.40573120117188, z: -18.578102111816406 }, delta: { x: 0.11469805985689163, z: 0.0029673553071916103 } },
  { t: 13428, position: { x: 160.54981994628906, z: -18.57437515258789 }, yaw: -88.51802825927734, headYaw: -88.51802825927734, moveVector: { z: 0.30000001192092896 }, delta: { x: 0.07867217808961868, z: 0.00203532911837101 }, inputs: { sneaking: true, sneakDown: true, wantDown: true, startSneaking: true, sneakPressedRaw: true, sneakCurrentRaw: true } },
  { t: 13429, position: { x: 160.6578826904297, z: -18.571578979492188 }, yaw: -88.51802062988281, headYaw: -88.51802062988281, delta: { x: 0.05900204926729202, z: 0.0015264427056536078 }, inputs: { startSneaking: false, sneakPressedRaw: false } },
  { t: 13430, position: { x: 160.74627685546875, z: -18.569292068481445 }, delta: { x: 0.048262156546115875, z: 0.0012485906481742859 } },
  { t: 13431, position: { x: 160.8239288330078, z: -18.567283630371094 }, delta: { x: 0.042398177087306976, z: 0.0010968834394589067 } },
  { t: 13432, position: { x: 160.89572143554688, z: -18.565425872802734 }, delta: { x: 0.0391964428126812, z: 0.0010140512604266405 } },
  { t: 13433, position: { x: 160.9643096923828, z: -18.56365203857422 }, delta: { x: 0.03744829446077347, z: 0.000968824839219451 } },
  { t: 13434, position: { x: 161.03114318847656, z: -18.561922073364258 }, delta: { x: 0.03649380803108215, z: 0.0009441312286071479 } },
  { t: 13435, position: { x: 161.09703063964844, z: -18.560216903686523 }, delta: { x: 0.035972658544778824, z: 0.0009306484716944396 } },
  { t: 13436, position: { x: 161.1623992919922, z: -18.55852508544922 }, yaw: -88.51802825927734, headYaw: -88.51802825927734, delta: { x: 0.03568810597062111, z: 0.0009232868906110525 } },
  { t: 13437, position: { x: 161.22747802734375, z: -18.556840896606445 }, yaw: -88.51802062988281, headYaw: -88.51802062988281, delta: { x: 0.035532742738723755, z: 0.0009192675352096558 } },
  { t: 13438, position: { x: 161.2924041748047, z: -18.555160522460938 }, delta: { x: 0.03544791415333748, z: 0.0009170729317702353 } },
  { t: 13439, position: { x: 161.32785034179688, z: -18.554243087768555 }, moveVector: { z: 0 }, delta: { x: 0.01935456320643425, z: 0.0005007218569517136 }, inputs: { sneaking: false, sneakDown: false, up: false, wantDown: false, stopSneaking: true, sneakReleasedRaw: true, sneakCurrentRaw: false } },
  { t: 13440, position: { x: 161.34719848632812, z: -18.553741455078125 }, delta: { x: 0.010567592456936836, z: 0.00027339416556060314 }, inputs: { stopSneaking: false, sneakReleasedRaw: false } },
  { t: 13441, position: { x: 161.35777282714844, z: -18.553468704223633 }, yaw: -88.51802825927734, headYaw: -88.51802825927734, delta: { x: 0.005769906099885702, z: 0.00014927322627045214 } },
  { t: 13442, position: { x: 161.36354064941406, z: -18.553319931030273 }, delta: { x: 0.0031503690406680107, z: 0.00008150318899424747 } }
]

describe('physics: walkThenSneak_w6_s10', () => {
  it('matches recorded client state per tick', () => {
    const h = makeHarness({ version: "1.26.10", scenario: 'walkThenSneak_w6_s10', softFailures: true })
    h.runScenario({ name: 'walkThenSneak_w6_s10', ticks: TICKS })
  })
})
