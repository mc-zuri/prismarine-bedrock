'use strict'

// Generated from .proxy.bin recording — do not edit by hand.
// Scenario: 1.21.0_walkForward_3t
// Frames: 17  (ticks 11791..11807)
//
// Each entry is a PAI diff. The first entry diffs from DEFAULT_PAI in
// _helpers.js; every subsequent entry diffs from the previous tick's
// full PAI. The harness reconstructs full PAI per tick and validates.

const { makeHarness } = require('./_helpers')

const TICKS = [
  { t: 11791, position: { x: 23.763038635253906, y: 1.6200100183486938, z: -22.113222122192383 }, yaw: -88.51801300048828, pitch: 0.000091552734375, headYaw: -88.51801300048828, delta: { x: 0.0000018220039237348828, y: -0.07840000092983246 }, inputs: { blockBreakingDelayEnabled: true, verticalCollision: true } },
  { t: 11792, position: { x: 23.76304054260254 }, yaw: -88.51802825927734, headYaw: -88.51802825927734, delta: { x: 9.94814286059409e-7 } },
  { t: 11793, position: { x: 23.763042449951172 }, delta: { x: 5.431686531665036e-7 } },
  { t: 11794, yaw: -88.51801300048828, headYaw: -88.51801300048828, delta: { x: 2.9657010713890486e-7 } },
  { t: 11795, yaw: -88.51802825927734, headYaw: -88.51802825927734, delta: { x: 1.6192730356578977e-7 } },
  { t: 11796, delta: { x: 8.841232101985952e-8 } },
  { t: 11797, yaw: -88.51801300048828, headYaw: -88.51801300048828, delta: { x: 0 } },
  { t: 11798, yaw: -88.51802825927734, headYaw: -88.51802825927734 },
  { t: 11799 },
  { t: 11800 },
  { t: 11801, position: { x: 23.86100959777832, z: -22.110687255859375 }, yaw: -88.51801300048828, headYaw: -88.51801300048828, moveVector: { z: 1 }, delta: { x: 0.053490109741687775, z: 0.0013838553568348289 }, inputs: { up: true } },
  { t: 11802, position: { x: 24.012466430664062, z: -22.106769561767578 }, delta: { x: 0.08269571512937546, z: 0.002139440504834056 } },
  { t: 11803, position: { x: 24.19312858581543, z: -22.102096557617188 }, yaw: -88.51802825927734, headYaw: -88.51802825927734, delta: { x: 0.09864196926355362, z: 0.002551977289840579 } },
  { t: 11804, position: { x: 24.291770935058594, z: -22.099544525146484 }, yaw: -88.51802062988281, headYaw: -88.51802062988281, moveVector: { z: 0 }, delta: { x: 0.053858522325754166, z: 0.0013933797599747777 }, inputs: { up: false } },
  { t: 11805, position: { x: 24.34562873840332, z: -22.0981502532959 }, delta: { x: 0.029406756162643433, z: 0.0007607854204252362 } },
  { t: 11806, position: { x: 24.375036239624023, z: -22.097389221191406 }, yaw: -88.51802825927734, headYaw: -88.51802825927734, delta: { x: 0.016056090593338013, z: 0.0004153889021836221 } },
  { t: 11807, position: { x: 24.39109230041504, z: -22.096973419189453 }, yaw: -88.51802062988281, headYaw: -88.51802062988281, delta: { x: 0.008766626939177513, z: 0.00022680236725136638 } }
]

describe('physics: walkForward_3t', () => {
  it('matches recorded client state per tick', () => {
    const h = makeHarness({ version: "1.26.10", scenario: 'walkForward_3t', softFailures: true })
    h.runScenario({ name: 'walkForward_3t', ticks: TICKS })
  })
})
