'use strict'

// Generated from .proxy.bin recording — do not edit by hand.
// Scenario: 1.21.0_walkForward_4t
// Frames: 18  (ticks 11819..11836)
//
// Each entry is a PAI diff. The first entry diffs from DEFAULT_PAI in
// _helpers.js; every subsequent entry diffs from the previous tick's
// full PAI. The harness reconstructs full PAI per tick and validates.

const { makeHarness } = require('./_helpers')

const TICKS = [
  { t: 11819, position: { x: 24.41038703918457, y: 1.6200100183486938, z: -22.096473693847656 }, yaw: -88.51802825927734, pitch: 0.000091552734375, headYaw: -88.51802825927734, delta: { x: 0.000006153820777399233, y: -0.07840000092983246, z: 1.5920616647235875e-7 }, inputs: { blockBreakingDelayEnabled: true, verticalCollision: true } },
  { t: 11820, position: { x: 24.41039276123047 }, delta: { x: 0.0000033599865219002822, z: 8.692657615938515e-8 } },
  { t: 11821, position: { x: 24.410396575927734 }, yaw: -88.51801300048828, headYaw: -88.51801300048828, delta: { x: 0.0000018345529042562703, z: 0 } },
  { t: 11822, position: { x: 24.410398483276367 }, delta: { x: 0.0000010016659643952153 } },
  { t: 11823, position: { x: 24.410400390625 }, delta: { x: 5.4690968909199e-7 } },
  { t: 11824, yaw: -88.51802825927734, headYaw: -88.51802825927734, delta: { x: 2.9861271855224913e-7 } },
  { t: 11825, delta: { x: 1.630425572329841e-7 } },
  { t: 11826, yaw: -88.51801300048828, headYaw: -88.51801300048828, delta: { x: 8.902124903897857e-8 } },
  { t: 11827, yaw: -88.51802825927734, headYaw: -88.51802825927734, delta: { x: 0 } },
  { t: 11828 },
  { t: 11829, position: { x: 24.50836753845215, z: -22.09393882751465 }, moveVector: { z: 1 }, delta: { x: 0.053490106016397476, z: 0.0013838425511494279 }, inputs: { up: true } },
  { t: 11830, position: { x: 24.65982437133789, z: -22.09002113342285 }, yaw: -88.51801300048828, headYaw: -88.51801300048828, delta: { x: 0.08269570767879486, z: 0.0021394335199147463 } },
  { t: 11831, position: { x: 24.840486526489258, z: -22.08534812927246 }, yaw: -88.51802825927734, headYaw: -88.51802825927734, delta: { x: 0.09864196926355362, z: 0.002551973331719637 } },
  { t: 11832, position: { x: 24.939128875732422, z: -22.082796096801758 }, moveVector: { z: 0 }, delta: { x: 0.053858522325754166, z: 0.001393377548083663 }, inputs: { up: false } },
  { t: 11833, position: { x: 24.99298667907715, z: -22.081401824951172 }, yaw: -88.51801300048828, headYaw: -88.51801300048828, delta: { x: 0.029406756162643433, z: 0.000760784256272018 } },
  { t: 11834, position: { x: 25.02239418029785, z: -22.08064079284668 }, yaw: -88.51802825927734, headYaw: -88.51802825927734, delta: { x: 0.016056090593338013, z: 0.0004153882618993521 } },
  { t: 11835, position: { x: 25.038450241088867, z: -22.080224990844727 }, delta: { x: 0.008766626939177513, z: 0.0002268020180054009 } },
  { t: 11836, position: { x: 25.047216415405273, z: -22.079998016357422 }, yaw: -88.51801300048828, headYaw: -88.51801300048828, delta: { x: 0.004786578938364983, z: 0.0001238339173141867 } }
]

describe('physics: walkForward_4t', () => {
  it('matches recorded client state per tick', () => {
    const h = makeHarness({ version: "1.26.10", scenario: 'walkForward_4t', softFailures: true })
    h.runScenario({ name: 'walkForward_4t', ticks: TICKS })
  })
})
