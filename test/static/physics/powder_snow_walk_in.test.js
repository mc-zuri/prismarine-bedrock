'use strict'

// Generated from .proxy.bin recording — do not edit by hand.
// Scenario: 1.21.0_powder_snow_walk_in
// Frames: 68  (ticks 9138..9205)
//
// Each entry is a PAI diff. The first entry diffs from DEFAULT_PAI in
// _helpers.js; every subsequent entry diffs from the previous tick's
// full PAI. The harness reconstructs full PAI per tick and validates.

const { makeHarness } = require('./_helpers')

const TICKS = [
  { t: 9138, position: { x: 0.5, y: 1.6200100183486938, z: 1590.5 }, yaw: -0.000030517578125, headYaw: -0.000030517578125, delta: { y: -0.07840000092983246 }, inputs: { blockBreakingDelayEnabled: true, verticalCollision: true } },
  { t: 9139 },
  { t: 9140 },
  { t: 9141 },
  { t: 9142, position: { z: 1593.5 }, yaw: 0, delta: { y: 0 }, inputs: { handledTeleport: true } },
  { t: 9143, yaw: -0.000030517578125, delta: { y: -0.07840000092983246 }, inputs: { handledTeleport: false, verticalCollision: false } },
  { t: 9144, inputs: { verticalCollision: true } },
  { t: 9145 },
  { t: 9146 },
  { t: 9147 },
  { t: 9148 },
  { t: 9149 },
  { t: 9150 },
  { t: 9151 },
  { t: 9152 },
  { t: 9153 },
  { t: 9154 },
  { t: 9155 },
  { t: 9156 },
  { t: 9157 },
  { t: 9158 },
  { t: 9159 },
  { t: 9160 },
  { t: 9161 },
  { t: 9162 },
  { t: 9163 },
  { t: 9164 },
  { t: 9165 },
  { t: 9166 },
  { t: 9167 },
  { t: 9168 },
  { t: 9169 },
  { t: 9170 },
  { t: 9171 },
  { t: 9172 },
  { t: 9173 },
  { t: 9174 },
  { t: 9175 },
  { t: 9176 },
  { t: 9177 },
  { t: 9178 },
  { t: 9179 },
  { t: 9180 },
  { t: 9181 },
  { t: 9182 },
  { t: 9183 },
  { t: 9184 },
  { t: 9185 },
  { t: 9186 },
  { t: 9187 },
  { t: 9188 },
  { t: 9189 },
  { t: 9190 },
  { t: 9191 },
  { t: 9192 },
  { t: 9193 },
  { t: 9194 },
  { t: 9195 },
  { t: 9196 },
  { t: 9197 },
  { t: 9198 },
  { t: 9199 },
  { t: 9200 },
  { t: 9201 },
  { t: 9202 },
  { t: 9203 },
  { t: 9204 },
  { t: 9205 }
]

describe('physics: powder_snow_walk_in', () => {
  it('matches recorded client state per tick', () => {
    const h = makeHarness({ version: "1.26.10", scenario: 'powder_snow_walk_in', softFailures: true })
    h.runScenario({ name: 'powder_snow_walk_in', ticks: TICKS })
  })
})
