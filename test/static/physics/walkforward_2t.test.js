'use strict'

// Generated from .proxy.bin recording — do not edit by hand.
// Scenario: 1.21.0_walkForward_2t
// Frames: 16  (ticks 1771..1786)
//
// Each entry is a PAI diff. The first entry diffs from DEFAULT_PAI in
// _helpers.js; every subsequent entry diffs from the previous tick's
// full PAI. The harness reconstructs full PAI per tick and validates.

const { makeHarness } = require('./_helpers')

const TICKS = [
  { t: 1771, position: { x: 0.5, y: 1.6200100183486938, z: -31.5 }, yaw: 90, headYaw: 90, delta: { y: -0.07840000092983246 }, inputs: { blockBreakingDelayEnabled: true, verticalCollision: true } },
  { t: 1772 },
  { t: 1773 },
  { t: 1774 },
  { t: 1775 },
  { t: 1776 },
  { t: 1777 },
  { t: 1778 },
  { t: 1779 },
  { t: 1780 },
  { t: 1781 },
  { t: 1782 },
  { t: 1783 },
  { t: 1784 },
  { t: 1785 },
  { t: 1786 }
]

describe('physics: walkForward_2t', () => {
  it('matches recorded client state per tick', () => {
    const h = makeHarness({ version: "1.26.10", scenario: 'walkForward_2t', softFailures: true })
    h.runScenario({ name: 'walkForward_2t', ticks: TICKS })
  })
})
