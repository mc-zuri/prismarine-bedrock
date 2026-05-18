'use strict'

// Generated from .proxy.bin recording — do not edit by hand.
// Scenario: 1.21.0_walkForward_6t
// Frames: 20  (ticks 11878..11897)
//
// Each entry is a PAI diff. The first entry diffs from DEFAULT_PAI in
// _helpers.js; every subsequent entry diffs from the previous tick's
// full PAI. The harness reconstructs full PAI per tick and validates.

const { makeHarness } = require('./_helpers')

const TICKS = [
  { t: 11878, position: { x: 26.136682510375977, y: 1.6200100183486938, z: -22.05181121826172 }, yaw: -88.51802825927734, pitch: 0.000091552734375, headYaw: -88.51802825927734, delta: { x: 0.000003818483946815832, y: -0.07840000092983246, z: 9.878800000251431e-8 }, inputs: { blockBreakingDelayEnabled: true, verticalCollision: true } },
  { t: 11879, position: { x: 26.136686325073242 }, yaw: -88.51801300048828, headYaw: -88.51801300048828, delta: { x: 0.000002084892457787646, z: 0 } },
  { t: 11880, position: { x: 26.136688232421875 }, yaw: -88.51802825927734, headYaw: -88.51802825927734, delta: { x: 0.0000011383514220142388 } },
  { t: 11881, position: { x: 26.136690139770508 }, delta: { x: 6.215399253051146e-7 } },
  { t: 11882, delta: { x: 3.3936083809749107e-7 } },
  { t: 11883, delta: { x: 1.8529104295339494e-7 } },
  { t: 11884, yaw: -88.51801300048828, headYaw: -88.51801300048828, delta: { x: 1.0116892212863604e-7 } },
  { t: 11885, yaw: -88.51802825927734, headYaw: -88.51802825927734, delta: { x: 0 } },
  { t: 11886 },
  { t: 11887, position: { x: 26.234657287597656, z: -22.04927635192871 }, yaw: -88.51801300048828, headYaw: -88.51801300048828, moveVector: { z: 1 }, delta: { x: 0.053490109741687775, z: 0.0013838553568348289 }, inputs: { up: true } },
  { t: 11888, position: { x: 26.3861141204834, z: -22.045358657836914 }, yaw: -88.51802825927734, headYaw: -88.51802825927734, delta: { x: 0.08269570767879486, z: 0.002139427699148655 } },
  { t: 11889, position: { x: 26.566776275634766, z: -22.04068374633789 }, yaw: -88.51801300048828, headYaw: -88.51801300048828, delta: { x: 0.09864196926355362, z: 0.0025519831106066704 } },
  { t: 11890, position: { x: 26.763385772705078, z: -22.03559684753418 }, yaw: -88.51802825927734, headYaw: -88.51802825927734, delta: { x: 0.10734862834215164, z: 0.002777225337922573 } },
  { t: 11891, position: { x: 26.96870231628418, z: -22.030284881591797 }, yaw: -88.51801300048828, headYaw: -88.51801300048828, delta: { x: 0.11210247129201889, z: 0.00290022068656981 } },
  { t: 11892, position: { x: 27.17877197265625, z: -22.024850845336914 }, yaw: -88.51802062988281, headYaw: -88.51802062988281, delta: { x: 0.11469805985689163, z: 0.0029673632234334946 } },
  { t: 11893, position: { x: 27.391437530517578, z: -22.01934814453125 }, yaw: -88.51801300048828, headYaw: -88.51801300048828, delta: { x: 0.1161152645945549, z: 0.0030040359124541283 } },
  { t: 11894, position: { x: 27.507553100585938, z: -22.01634407043457 }, yaw: -88.51802062988281, headYaw: -88.51802062988281, moveVector: { z: 0 }, delta: { x: 0.06339894235134125, z: 0.0016402037581428885 }, inputs: { up: false } },
  { t: 11895, position: { x: 27.570951461791992, z: -22.01470375061035 }, delta: { x: 0.03461582586169243, z: 0.0008955513476394117 } },
  { t: 11896, position: { x: 27.605567932128906, z: -22.01380729675293 }, yaw: -88.51802825927734, headYaw: -88.51802825927734, delta: { x: 0.018900243565440178, z: 0.0004889710689894855 } },
  { t: 11897, position: { x: 27.624467849731445, z: -22.01331901550293 }, yaw: -88.51802062988281, headYaw: -88.51802062988281, delta: { x: 0.010319533757865429, z: 0.0002669782261364162 } }
]

describe('physics: walkForward_6t', () => {
  it('matches recorded client state per tick', () => {
    const h = makeHarness({ version: "1.26.10", scenario: 'walkForward_6t', softFailures: true })
    h.runScenario({ name: 'walkForward_6t', ticks: TICKS })
  })
})
