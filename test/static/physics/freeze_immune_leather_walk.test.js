'use strict'

// Generated from .proxy.bin recording — do not edit by hand.
// Scenario: 1.21.0_freeze_immune_leather_walk
// Frames: 68  (ticks 15309..15376)
//
// Each entry is a PAI diff. The first entry diffs from DEFAULT_PAI in
// _helpers.js; every subsequent entry diffs from the previous tick's
// full PAI. The harness reconstructs full PAI per tick and validates.

const { makeHarness } = require('./_helpers')

const TICKS = [
  { t: 15309, position: { x: 0.5, y: 1.6200100183486938, z: 1590.5 }, yaw: -0.000030517578125, headYaw: -0.000030517578125, delta: { y: -0.07840000092983246 }, inputs: { blockBreakingDelayEnabled: true, verticalCollision: true } },
  { t: 15310 },
  { t: 15311 },
  { t: 15312 },
  { t: 15313 },
  { t: 15314, position: { z: 1595.5 }, yaw: 0, delta: { y: 0 }, inputs: { handledTeleport: true } },
  { t: 15315, yaw: -0.000030517578125, delta: { y: -0.07840000092983246 }, inputs: { handledTeleport: false, verticalCollision: false } },
  { t: 15316, inputs: { verticalCollision: true } },
  { t: 15317 },
  { t: 15318 },
  { t: 15319 },
  { t: 15320 },
  { t: 15321 },
  { t: 15322 },
  { t: 15323 },
  { t: 15324 },
  { t: 15325 },
  { t: 15326 },
  { t: 15327 },
  { t: 15328 },
  { t: 15329 },
  { t: 15330 },
  { t: 15331 },
  { t: 15332 },
  { t: 15333 },
  { t: 15334 },
  { t: 15335 },
  { t: 15336 },
  { t: 15337 },
  { t: 15338 },
  { t: 15339 },
  { t: 15340 },
  { t: 15341 },
  { t: 15342 },
  { t: 15343 },
  { t: 15344 },
  { t: 15345 },
  { t: 15346 },
  { t: 15347 },
  { t: 15348 },
  { t: 15349 },
  { t: 15350 },
  { t: 15351 },
  { t: 15352 },
  { t: 15353 },
  { t: 15354 },
  { t: 15355 },
  { t: 15356 },
  { t: 15357 },
  { t: 15358 },
  { t: 15359 },
  { t: 15360 },
  { t: 15361 },
  { t: 15362 },
  { t: 15363 },
  { t: 15364 },
  { t: 15365 },
  { t: 15366 },
  { t: 15367 },
  { t: 15368 },
  { t: 15369 },
  { t: 15370 },
  { t: 15371 },
  { t: 15372 },
  { t: 15373 },
  { t: 15374 },
  { t: 15375 },
  { t: 15376 }
]

describe('physics: freeze_immune_leather_walk', () => {
  it('matches recorded client state per tick', () => {
    const h = makeHarness({ version: "1.26.10", scenario: 'freeze_immune_leather_walk', softFailures: true })
    h.runScenario({ name: 'freeze_immune_leather_walk', ticks: TICKS })
  })
})
