'use strict'

// Generated from .proxy.bin recording — do not edit by hand.
// Scenario: 1.21.0_walkThenSneak_w1_s10
// Frames: 25  (ticks 13223..13247)
//
// Each entry is a PAI diff. The first entry diffs from DEFAULT_PAI in
// _helpers.js; every subsequent entry diffs from the previous tick's
// full PAI. The harness reconstructs full PAI per tick and validates.

const { makeHarness } = require('./_helpers')

const TICKS = [
  { t: 13223, position: { x: 152.8900909423828, y: 1.6200100183486938, z: -18.772539138793945 }, yaw: -88.51802062988281, pitch: 0.000091552734375, headYaw: -88.51802062988281, delta: { x: 0.000005217156285652891, y: -0.07840000092983246, z: 1.3497319173438882e-7 }, inputs: { blockBreakingDelayEnabled: true, verticalCollision: true } },
  { t: 13224, delta: { x: 0.000002848567646651645, z: 7.369536803025767e-8 } },
  { t: 13225, delta: { x: 0.00000155531813561538, z: 0 } },
  { t: 13226, delta: { x: 8.492037864016311e-7 } },
  { t: 13227, delta: { x: 4.636653159195703e-7 } },
  { t: 13228, yaw: -88.51800537109375, headYaw: -88.51800537109375, delta: { x: 2.5316128926533565e-7 } },
  { t: 13229, yaw: -88.51802825927734, headYaw: -88.51802825927734, delta: { x: 1.38226084800408e-7 } },
  { t: 13230, delta: { x: 7.547144775799097e-8 } },
  { t: 13231, delta: { x: 0 } },
  { t: 13232, position: { x: 152.98805236816406, z: -18.770004272460938 }, moveVector: { z: 1 }, delta: { x: 0.053490106016397476, z: 0.0013838425511494279 }, inputs: { up: true } },
  { t: 13233, position: { x: 153.13951110839844, z: -18.76608657836914 }, delta: { x: 0.08269570767879486, z: 0.0021394207142293453 } },
  { t: 13234, position: { x: 153.25160217285156, z: -18.763187408447266 }, moveVector: { z: 0.30000001192092896 }, delta: { x: 0.061198897659778595, z: 0.0015832767821848392 }, inputs: { sneaking: true, sneakDown: true, wantDown: true, startSneaking: true, sneakPressedRaw: true, sneakCurrentRaw: true } },
  { t: 13235, position: { x: 153.34219360351562, z: -18.76084327697754 }, delta: { x: 0.04946163296699524, z: 0.00127962208352983 }, inputs: { startSneaking: false, sneakPressedRaw: false } },
  { t: 13236, position: { x: 153.42105102539062, z: -18.75880241394043 }, delta: { x: 0.04305309057235718, z: 0.0011138265253975987 } },
  { t: 13237, position: { x: 153.49349975585938, z: -18.756927490234375 }, yaw: -88.51802062988281, headYaw: -88.51802062988281, delta: { x: 0.03955402597784996, z: 0.0010233022039756179 } },
  { t: 13238, position: { x: 153.56243896484375, z: -18.755144119262695 }, yaw: -88.51800537109375, headYaw: -88.51800537109375, delta: { x: 0.03764353320002556, z: 0.0009738834924064577 } },
  { t: 13239, position: { x: 153.6294708251953, z: -18.75341033935547 }, yaw: -88.51802062988281, headYaw: -88.51802062988281, delta: { x: 0.03660040348768234, z: 0.0009468932403251529 } },
  { t: 13240, position: { x: 153.69546508789062, z: -18.7517032623291 }, delta: { x: 0.036030858755111694, z: 0.0009321565739810467 } },
  { t: 13241, position: { x: 153.76087951660156, z: -18.750011444091797 }, delta: { x: 0.03571988642215729, z: 0.0009241103543899953 } },
  { t: 13242, position: { x: 153.82598876953125, z: -18.748327255249023 }, delta: { x: 0.03555009514093399, z: 0.0009197170729748905 } },
  { t: 13243, position: { x: 153.89093017578125, z: -18.746646881103516 }, delta: { x: 0.035457391291856766, z: 0.0009173183352686465 } },
  { t: 13244, position: { x: 153.9263916015625, z: -18.745729446411133 }, moveVector: { z: 0 }, delta: { x: 0.019359737634658813, z: 0.0005008558509871364 }, inputs: { sneaking: false, sneakDown: false, up: false, wantDown: false, stopSneaking: true, sneakReleasedRaw: true, sneakCurrentRaw: false } },
  { t: 13245, position: { x: 153.9457550048828, z: -18.745227813720703 }, delta: { x: 0.01057041808962822, z: 0.00027346733259037137 }, inputs: { stopSneaking: false, sneakReleasedRaw: false } },
  { t: 13246, position: { x: 153.95632934570312, z: -18.74495506286621 }, yaw: -88.51802825927734, headYaw: -88.51802825927734, delta: { x: 0.005771448835730553, z: 0.00014931318582966924 } },
  { t: 13247, position: { x: 153.96209716796875, z: -18.74480628967285 }, yaw: -88.51801300048828, headYaw: -88.51801300048828, delta: { x: 0.0031512114219367504, z: 0.0000815250095911324 } }
]

describe('physics: walkThenSneak_w1_s10', () => {
  it('matches recorded client state per tick', () => {
    const h = makeHarness({ version: "1.26.10", scenario: 'walkThenSneak_w1_s10', softFailures: true })
    h.runScenario({ name: 'walkThenSneak_w1_s10', ticks: TICKS })
  })
})
