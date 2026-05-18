'use strict'

// Generated from .proxy.bin recording — do not edit by hand.
// Scenario: 1.21.0_berry_bush_walk
// Frames: 58  (ticks 10320..10377)
//
// Each entry is a PAI diff. The first entry diffs from DEFAULT_PAI in
// _helpers.js; every subsequent entry diffs from the previous tick's
// full PAI. The harness reconstructs full PAI per tick and validates.

const { makeHarness } = require('./_helpers')

const TICKS = [
  { t: 10320, position: { x: 0.5, y: 1.6200100183486938, z: 1490.5 }, yaw: -0.000030517578125, headYaw: -0.000030517578125, delta: { y: -0.07840000092983246 }, inputs: { blockBreakingDelayEnabled: true, verticalCollision: true } },
  { t: 10321 },
  { t: 10322 },
  { t: 10323 },
  { t: 10324 },
  { t: 10325, position: { z: 1493.5 }, yaw: 0, delta: { y: 0 }, inputs: { handledTeleport: true } },
  { t: 10326, yaw: -0.000030517578125, delta: { y: -0.07840000092983246 }, inputs: { handledTeleport: false, verticalCollision: false } },
  { t: 10327, inputs: { verticalCollision: true } },
  { t: 10328 },
  { t: 10329 },
  { t: 10330 },
  { t: 10331 },
  { t: 10332 },
  { t: 10333 },
  { t: 10334 },
  { t: 10335 },
  { t: 10336 },
  { t: 10337 },
  { t: 10338 },
  { t: 10339 },
  { t: 10340 },
  { t: 10341 },
  { t: 10342 },
  { t: 10343 },
  { t: 10344 },
  { t: 10345 },
  { t: 10346 },
  { t: 10347 },
  { t: 10348 },
  { t: 10349 },
  { t: 10350 },
  { t: 10351 },
  { t: 10352 },
  { t: 10353 },
  { t: 10354 },
  { t: 10355 },
  { t: 10356 },
  { t: 10357 },
  { t: 10358 },
  { t: 10359 },
  { t: 10360 },
  { t: 10361 },
  { t: 10362 },
  { t: 10363 },
  { t: 10364 },
  { t: 10365 },
  { t: 10366 },
  { t: 10367 },
  { t: 10368 },
  { t: 10369 },
  { t: 10370 },
  { t: 10371 },
  { t: 10372 },
  { t: 10373 },
  { t: 10374 },
  { t: 10375 },
  { t: 10376 },
  { t: 10377 }
]

describe('physics: berry_bush_walk', () => {
  it('matches recorded client state per tick', () => {
    const h = makeHarness({ version: "1.26.10", scenario: 'berry_bush_walk', softFailures: true })
    h.runScenario({ name: 'berry_bush_walk', ticks: TICKS })
  })
})
