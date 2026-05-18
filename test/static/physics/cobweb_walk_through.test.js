'use strict'

// Generated from .proxy.bin recording — do not edit by hand.
// Scenario: 1.21.0_cobweb_walk_through
// Frames: 68  (ticks 8919..8986)
//
// Each entry is a PAI diff. The first entry diffs from DEFAULT_PAI in
// _helpers.js; every subsequent entry diffs from the previous tick's
// full PAI. The harness reconstructs full PAI per tick and validates.

const { makeHarness } = require('./_helpers')

const TICKS = [
  { t: 8919, position: { x: 0.5, y: 1.6200100183486938, z: 1390.5 }, yaw: -0.000030517578125, headYaw: -0.000030517578125, delta: { y: -0.07840000092983246 }, inputs: { blockBreakingDelayEnabled: true, verticalCollision: true } },
  { t: 8920 },
  { t: 8921 },
  { t: 8922 },
  { t: 8923 },
  { t: 8924, position: { z: 1393.5 }, yaw: 0, delta: { y: 0 }, inputs: { handledTeleport: true } },
  { t: 8925, yaw: -0.000030517578125, delta: { y: -0.07840000092983246 }, inputs: { handledTeleport: false, verticalCollision: false } },
  { t: 8926, inputs: { verticalCollision: true } },
  { t: 8927 },
  { t: 8928 },
  { t: 8929 },
  { t: 8930 },
  { t: 8931 },
  { t: 8932 },
  { t: 8933 },
  { t: 8934 },
  { t: 8935 },
  { t: 8936 },
  { t: 8937 },
  { t: 8938 },
  { t: 8939 },
  { t: 8940 },
  { t: 8941 },
  { t: 8942 },
  { t: 8943 },
  { t: 8944 },
  { t: 8945 },
  { t: 8946 },
  { t: 8947 },
  { t: 8948 },
  { t: 8949 },
  { t: 8950 },
  { t: 8951 },
  { t: 8952 },
  { t: 8953 },
  { t: 8954 },
  { t: 8955 },
  { t: 8956 },
  { t: 8957 },
  { t: 8958 },
  { t: 8959 },
  { t: 8960 },
  { t: 8961 },
  { t: 8962 },
  { t: 8963 },
  { t: 8964 },
  { t: 8965 },
  { t: 8966 },
  { t: 8967 },
  { t: 8968 },
  { t: 8969 },
  { t: 8970 },
  { t: 8971 },
  { t: 8972 },
  { t: 8973 },
  { t: 8974 },
  { t: 8975 },
  { t: 8976 },
  { t: 8977 },
  { t: 8978 },
  { t: 8979 },
  { t: 8980 },
  { t: 8981 },
  { t: 8982 },
  { t: 8983 },
  { t: 8984 },
  { t: 8985 },
  { t: 8986 }
]

describe('physics: cobweb_walk_through', () => {
  it('matches recorded client state per tick', () => {
    const h = makeHarness({ version: "1.26.10", scenario: 'cobweb_walk_through', softFailures: true })
    h.runScenario({ name: 'cobweb_walk_through', ticks: TICKS })
  })
})
