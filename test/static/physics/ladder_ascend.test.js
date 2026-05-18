'use strict'

// Generated from .proxy.bin recording — do not edit by hand.
// Scenario: 1.21.0_ladder_ascend
// Frames: 58  (ticks 8343..8400)
//
// Each entry is a PAI diff. The first entry diffs from DEFAULT_PAI in
// _helpers.js; every subsequent entry diffs from the previous tick's
// full PAI. The harness reconstructs full PAI per tick and validates.

const { makeHarness } = require('./_helpers')

const TICKS = [
  { t: 8343, position: { x: 0.5, y: 1.6200100183486938, z: 1293.5 }, yaw: -0.000030517578125, headYaw: -0.000030517578125, delta: { y: -0.07840000092983246 }, inputs: { blockBreakingDelayEnabled: true, verticalCollision: true } },
  { t: 8344 },
  { t: 8345 },
  { t: 8346 },
  { t: 8347 },
  { t: 8348 },
  { t: 8349, position: { z: 1302.5 }, yaw: 0, delta: { y: 0 }, inputs: { handledTeleport: true } },
  { t: 8350, yaw: -0.000030517578125, delta: { y: -0.07840000092983246 }, inputs: { handledTeleport: false, verticalCollision: false } },
  { t: 8351, inputs: { verticalCollision: true } },
  { t: 8352 },
  { t: 8353 },
  { t: 8354 },
  { t: 8355 },
  { t: 8356 },
  { t: 8357 },
  { t: 8358 },
  { t: 8359 },
  { t: 8360 },
  { t: 8361 },
  { t: 8362 },
  { t: 8363 },
  { t: 8364 },
  { t: 8365 },
  { t: 8366 },
  { t: 8367 },
  { t: 8368 },
  { t: 8369 },
  { t: 8370 },
  { t: 8371 },
  { t: 8372 },
  { t: 8373 },
  { t: 8374 },
  { t: 8375 },
  { t: 8376 },
  { t: 8377 },
  { t: 8378 },
  { t: 8379 },
  { t: 8380 },
  { t: 8381 },
  { t: 8382 },
  { t: 8383 },
  { t: 8384 },
  { t: 8385 },
  { t: 8386 },
  { t: 8387 },
  { t: 8388 },
  { t: 8389 },
  { t: 8390 },
  { t: 8391 },
  { t: 8392 },
  { t: 8393 },
  { t: 8394 },
  { t: 8395 },
  { t: 8396 },
  { t: 8397 },
  { t: 8398 },
  { t: 8399 },
  { t: 8400 }
]

describe('physics: ladder_ascend', () => {
  it('matches recorded client state per tick', () => {
    const h = makeHarness({ version: "1.26.10", scenario: 'ladder_ascend', softFailures: true })
    h.runScenario({ name: 'ladder_ascend', ticks: TICKS })
  })
})
