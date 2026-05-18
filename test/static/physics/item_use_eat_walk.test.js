'use strict'

// Generated from .proxy.bin recording — do not edit by hand.
// Scenario: 1.21.0_item_use_eat_walk
// Frames: 64  (ticks 15867..15930)
//
// Each entry is a PAI diff. The first entry diffs from DEFAULT_PAI in
// _helpers.js; every subsequent entry diffs from the previous tick's
// full PAI. The harness reconstructs full PAI per tick and validates.

const { makeHarness } = require('./_helpers')

const TICKS = [
  { t: 15867, position: { x: 0.5, y: 1.6200100183486938, z: 0.5 }, yaw: -0.000030517578125, headYaw: -0.000030517578125, delta: { y: -0.07840000092983246 }, inputs: { blockBreakingDelayEnabled: true, verticalCollision: true } },
  { t: 15868 },
  { t: 15869 },
  { t: 15870 },
  { t: 15871 },
  { t: 15872, yaw: 0, delta: { y: 0 }, inputs: { handledTeleport: true } },
  { t: 15873, yaw: -0.000030517578125, delta: { y: -0.07840000092983246 }, inputs: { handledTeleport: false, verticalCollision: false } },
  { t: 15874, inputs: { verticalCollision: true } },
  { t: 15875 },
  { t: 15876 },
  { t: 15877 },
  { t: 15878 },
  { t: 15879 },
  { t: 15880 },
  { t: 15881 },
  { t: 15882 },
  { t: 15883 },
  { t: 15884 },
  { t: 15885 },
  { t: 15886 },
  { t: 15887 },
  { t: 15888 },
  { t: 15889 },
  { t: 15890 },
  { t: 15891 },
  { t: 15892 },
  { t: 15893 },
  { t: 15894 },
  { t: 15895 },
  { t: 15896 },
  { t: 15897 },
  { t: 15898 },
  { t: 15899 },
  { t: 15900 },
  { t: 15901 },
  { t: 15902 },
  { t: 15903 },
  { t: 15904 },
  { t: 15905 },
  { t: 15906 },
  { t: 15907 },
  { t: 15908 },
  { t: 15909 },
  { t: 15910 },
  { t: 15911 },
  { t: 15912 },
  { t: 15913 },
  { t: 15914 },
  { t: 15915 },
  { t: 15916 },
  { t: 15917 },
  { t: 15918 },
  { t: 15919 },
  { t: 15920 },
  { t: 15921 },
  { t: 15922 },
  { t: 15923 },
  { t: 15924 },
  { t: 15925 },
  { t: 15926 },
  { t: 15927 },
  { t: 15928 },
  { t: 15929 },
  { t: 15930 }
]

describe('physics: item_use_eat_walk', () => {
  it('matches recorded client state per tick', () => {
    const h = makeHarness({ version: "1.26.10", scenario: 'item_use_eat_walk', softFailures: true })
    h.runScenario({ name: 'item_use_eat_walk', ticks: TICKS })
  })
})
