'use strict'

// Generated from .proxy.bin recording — do not edit by hand.
// Scenario: 1.21.0_jump_sprint
// Frames: 59  (ticks 4855..4913)
//
// Each entry is a PAI diff. The first entry diffs from DEFAULT_PAI in
// _helpers.js; every subsequent entry diffs from the previous tick's
// full PAI. The harness reconstructs full PAI per tick and validates.

const { makeHarness } = require('./_helpers')

const TICKS = [
  { t: 4855, position: { x: 0.5, y: 1.6200100183486938, z: 0.5 }, yaw: -0.000030517578125, headYaw: -0.000030517578125, delta: { y: -0.07840000092983246 }, inputs: { blockBreakingDelayEnabled: true, verticalCollision: true } },
  { t: 4856 },
  { t: 4857 },
  { t: 4858 },
  { t: 4859, yaw: 0, delta: { y: 0 }, inputs: { handledTeleport: true } },
  { t: 4860, yaw: -0.000030517578125, delta: { y: -0.07840000092983246 }, inputs: { handledTeleport: false, verticalCollision: false } },
  { t: 4861, inputs: { verticalCollision: true } },
  { t: 4862 },
  { t: 4863 },
  { t: 4864 },
  { t: 4865 },
  { t: 4866 },
  { t: 4867 },
  { t: 4868 },
  { t: 4869 },
  { t: 4870 },
  { t: 4871 },
  { t: 4872 },
  { t: 4873 },
  { t: 4874 },
  { t: 4875 },
  { t: 4876 },
  { t: 4877 },
  { t: 4878 },
  { t: 4879 },
  { t: 4880 },
  { t: 4881 },
  { t: 4882 },
  { t: 4883 },
  { t: 4884 },
  { t: 4885 },
  { t: 4886 },
  { t: 4887 },
  { t: 4888 },
  { t: 4889 },
  { t: 4890 },
  { t: 4891 },
  { t: 4892 },
  { t: 4893 },
  { t: 4894 },
  { t: 4895 },
  { t: 4896 },
  { t: 4897 },
  { t: 4898 },
  { t: 4899 },
  { t: 4900 },
  { t: 4901 },
  { t: 4902 },
  { t: 4903 },
  { t: 4904 },
  { t: 4905 },
  { t: 4906 },
  { t: 4907 },
  { t: 4908 },
  { t: 4909 },
  { t: 4910 },
  { t: 4911 },
  { t: 4912 },
  { t: 4913 }
]

describe('physics: jump_sprint', () => {
  it('matches recorded client state per tick', () => {
    const h = makeHarness({ version: "1.26.10", scenario: 'jump_sprint', softFailures: true })
    h.runScenario({ name: 'jump_sprint', ticks: TICKS })
  })
})
