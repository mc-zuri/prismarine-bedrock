'use strict'

// Generated from .proxy.bin recording — do not edit by hand.
// Scenario: 1.21.0_sprint_10t_to_sneak_10t
// Frames: 34  (ticks 11543..11576)
//
// Each entry is a PAI diff. The first entry diffs from DEFAULT_PAI in
// _helpers.js; every subsequent entry diffs from the previous tick's
// full PAI. The harness reconstructs full PAI per tick and validates.

const { makeHarness } = require('./_helpers')

const TICKS = [
  { t: 11543, position: { x: 3.176966905593872, y: 1.6200100183486938, z: -22.645790100097656 }, yaw: -88.51802062988281, pitch: 0.000091552734375, headYaw: -88.51802062988281, delta: { x: 0.00000521719175594626, y: -0.07840000092983246, z: 1.349749538803735e-7 }, inputs: { blockBreakingDelayEnabled: true, verticalCollision: true } },
  { t: 11544, position: { x: 3.1769721508026123 }, delta: { x: 0.000002848586973414058, z: 7.36963343683783e-8 } },
  { t: 11545, position: { x: 3.1769750118255615 }, delta: { x: 0.0000015553287084912881, z: 0 } },
  { t: 11546, position: { x: 3.1769766807556152 }, delta: { x: 8.492095844303549e-7 } },
  { t: 11547, position: { x: 3.1769776344299316 }, delta: { x: 4.636684991510265e-7 } },
  { t: 11548, position: { x: 3.17697811126709 }, delta: { x: 2.531630229896109e-7 } },
  { t: 11549, position: { x: 3.176978349685669 }, yaw: -88.51802825927734, headYaw: -88.51802825927734, delta: { x: 1.382270227168192e-7 } },
  { t: 11550, position: { x: 3.176978588104248 }, yaw: -88.51801300048828, headYaw: -88.51801300048828, delta: { x: 7.547196645418808e-8 } },
  { t: 11551, yaw: -88.51802825927734, headYaw: -88.51802825927734, delta: { x: 0 } },
  { t: 11552, position: { x: 3.2749457359313965, z: -22.64325523376465 }, moveVector: { z: 1 }, delta: { x: 0.053490106016397476, z: 0.0013838425511494279 }, inputs: { sprintDown: true, up: true, sprinting: true, startSprinting: true, stopSprinting: true } },
  { t: 11553, position: { x: 3.4557931423187256, z: -22.63857650756836 }, yaw: -88.51801300048828, headYaw: -88.51801300048828, delta: { x: 0.09874273836612701, z: 0.002554589882493019 }, inputs: { stopSprinting: false } },
  { t: 11554, position: { x: 3.6818933486938477, z: -22.632726669311523 }, delta: { x: 0.12345068156719208, z: 0.0031938180327415466 }, inputs: { startSprinting: false } },
  { t: 11555, position: { x: 3.932701587677002, z: -22.626237869262695 }, yaw: -88.51802825927734, headYaw: -88.51802825927734, delta: { x: 0.13694120943546295, z: 0.0035428202245384455 } },
  { t: 11556, position: { x: 4.197000026702881, z: -22.619400024414062 }, yaw: -88.51802062988281, headYaw: -88.51802062988281, delta: { x: 0.14430704712867737, z: 0.0037333753425627947 } },
  { t: 11557, position: { x: 4.468664646148682, z: -22.61237144470215 }, yaw: -88.51802825927734, headYaw: -88.51802825927734, delta: { x: 0.14832879602909088, z: 0.0038374182768166065 } },
  { t: 11558, position: { x: 4.744350910186768, z: -22.605239868164062 }, yaw: -88.51802062988281, headYaw: -88.51802062988281, delta: { x: 0.15052467584609985, z: 0.003894225927069783 } },
  { t: 11559, position: { x: 5.022233009338379, z: -22.598051071166992 }, yaw: -88.51800537109375, headYaw: -88.51800537109375, delta: { x: 0.15172360837459564, z: 0.00392527598887682 } },
  { t: 11560, position: { x: 5.301313877105713, z: -22.590831756591797 }, yaw: -88.51802062988281, headYaw: -88.51802062988281, delta: { x: 0.15237823128700256, z: 0.003942196257412434 } },
  { t: 11561, position: { x: 5.58104944229126, z: -22.583595275878906 }, yaw: -88.51802825927734, headYaw: -88.51802825927734, delta: { x: 0.1527356654405594, z: 0.003951434511691332 } },
  { t: 11562, position: { x: 5.7631754875183105, z: -22.57888412475586 }, yaw: -88.51802062988281, headYaw: -88.51802062988281, moveVector: { z: 0.30000001192092896 }, delta: { x: 0.09944071620702744, z: 0.002572636352851987 }, inputs: { sprintDown: false, sneaking: true, sneakDown: true, wantDown: true, sprinting: false, stopSprinting: true, startSneaking: true, sneakPressedRaw: true, sneakCurrentRaw: true } },
  { t: 11563, position: { x: 5.8920063972473145, z: -22.575551986694336 }, delta: { x: 0.07034166902303696, z: 0.001819812343455851 }, inputs: { stopSprinting: false, startSneaking: false, sneakPressedRaw: false } },
  { t: 11564, position: { x: 5.991738319396973, z: -22.57297134399414 }, delta: { x: 0.054453592747449875, z: 0.0014087704475969076 } },
  { t: 11565, position: { x: 6.075582027435303, z: -22.570802688598633 }, delta: { x: 0.04577869921922684, z: 0.0011843414977192879 } },
  { t: 11566, position: { x: 6.150751113891602, z: -22.568857192993164 }, delta: { x: 0.041042208671569824, z: 0.0010618033120408654 } },
  { t: 11567, position: { x: 6.2211833000183105, z: -22.567035675048828 }, delta: { x: 0.038456082344055176, z: 0.000994897447526455 } },
  { t: 11568, position: { x: 6.289029598236084, z: -22.56528091430664 }, delta: { x: 0.03704405948519707, z: 0.0009583669016137719 } },
  { t: 11569, position: { x: 6.355463981628418, z: -22.563562393188477 }, delta: { x: 0.03627309203147888, z: 0.0009384212316945195 } },
  { t: 11570, position: { x: 6.4211273193359375, z: -22.56186294555664 }, delta: { x: 0.03585214540362358, z: 0.0009275308693759143 } },
  { t: 11571, position: { x: 6.486369609832764, z: -22.5601749420166 }, delta: { x: 0.035622306168079376, z: 0.00092158472398296 } },
  { t: 11572, position: { x: 6.521991729736328, z: -22.559253692626953 }, moveVector: { z: 0 }, delta: { x: 0.019449781626462936, z: 0.0005031853215768933 }, inputs: { sneaking: false, sneakDown: false, up: false, wantDown: false, stopSneaking: true, sneakReleasedRaw: true, sneakCurrentRaw: false } },
  { t: 11573, position: { x: 6.541441440582275, z: -22.55875015258789 }, delta: { x: 0.010619581677019596, z: 0.00027473922818899155 }, inputs: { stopSneaking: false, sneakReleasedRaw: false } },
  { t: 11574, position: { x: 6.552061080932617, z: -22.558475494384766 }, delta: { x: 0.005798292346298695, z: 0.00015000763232819736 } },
  { t: 11575, position: { x: 6.557859420776367, z: -22.558324813842773 }, delta: { x: 0.003165867878124118, z: 0.00008190417429432273 } },
  { t: 11576, position: { x: 6.561025142669678, z: -22.558242797851562 }, delta: { x: 0.0017285640351474285, z: 0.00004471968350117095 } }
]

describe('physics: sprint_10t_to_sneak_10t', () => {
  it('matches recorded client state per tick', () => {
    const h = makeHarness({ version: "1.26.10", scenario: 'sprint_10t_to_sneak_10t', softFailures: true })
    h.runScenario({ name: 'sprint_10t_to_sneak_10t', ticks: TICKS })
  })
})
