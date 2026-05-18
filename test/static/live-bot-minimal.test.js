'use strict'

const assert = require('assert')
const { Vec3 } = require('vec3')
const { getConstants } = require('../../src/builtins/physics-constants')
const { installControls } = require('../../src/builtins/physics/input-controls')
const { withSelfFeetPosition } = require('../../src/builtins/physics/position')
const { createBedrockPhysicsEngine } = require('../../src/builtins/physics/bedrock-physics-engine')

const PAI_BIT_JumpDown = 3
const PAI_BIT_Up = 10
const PAI_BIT_JumpReleasedRaw = 59
const PAI_BIT_JumpPressedRaw = 60
const PAI_BIT_JumpCurrentRaw = 61

const STONE = { name: 'stone', boundingBox: 'block' }
const AIR = { name: 'air', boundingBox: 'empty' }

function makeStubWorld () {
  return {
    getBlock (pos) {
      const y = Math.floor(pos.y)
      if (y <= 0) return STONE
      return AIR
    }
  }
}

function makeBotState (C) {
  const self = {
    position: new Vec3(0, 1 + C.EYE_HEIGHT, 0),
    velocity: new Vec3(0, 0, 0),
    yaw: 0,
    pitch: 0,
    headYaw: 0,
    height: C.PLAYER_HEIGHT,
    width: C.PLAYER_WIDTH,
    halfWidth: C.PLAYER_WIDTH / 2,
    eyeHeight: C.EYE_HEIGHT,
    onGround: true,
    horizontalCollision: false,
    verticalCollision: false,
    sprinting: false,
    sneaking: false,
    swimming: false,
    gliding: false,
    groundSlipperiness: C.DEFAULT_SLIPPERINESS,
    attributes: {},
    effects: {}
  }
  return { self }
}

function hasBit (inputData, bit) {
  return (BigInt(inputData) & (1n << BigInt(bit))) !== 0n
}

describe('live-bot minimal API sanity check', () => {
  const C = getConstants('1.26.10')
  const physics = createBedrockPhysicsEngine({ stepHeight: 0.6 })

  it('10 ticks of walk forward: moves +z, sets PAI_BIT_Up, no jump bits', () => {
    const botState = makeBotState(C)
    const controls = installControls(botState, C)
    const world = makeStubWorld()

    botState.setControlState('forward', true)

    const startZ = botState.self.position.z

    for (let i = 0; i < 10; i++) {
      controls.evaluateControls()
      withSelfFeetPosition(botState.self, C, () => {
        physics.simulateSelf(botState, controls.getControlStateSnapshot(), world, C)
      })
    }

    assert.ok(botState.self.position.z > startZ + 0.01,
      `expected position.z > ${startZ + 0.01}, got ${botState.self.position.z}`)
    assert.ok(hasBit(botState.self.inputData, PAI_BIT_Up),
      `expected PAI_BIT_Up (10) set, inputData=${botState.self.inputData.toString(2)}`)
    assert.ok(!hasBit(botState.self.inputData, PAI_BIT_JumpPressedRaw),
      `expected JumpPressedRaw (60) NOT set, inputData=${botState.self.inputData.toString(2)}`)
  })

  it('walk forward + jump: edge transitions for JumpDown/JumpPressedRaw/JumpCurrentRaw/JumpReleasedRaw', () => {
    const botState = makeBotState(C)
    const controls = installControls(botState, C)
    const world = makeStubWorld()

    botState.setControlState('forward', true)
    botState.setControlState('jump', true)

    controls.evaluateControls()
    withSelfFeetPosition(botState.self, C, () => {
      physics.simulateSelf(botState, controls.getControlStateSnapshot(), world, C)
    })
    assert.ok(hasBit(botState.self.inputData, PAI_BIT_JumpDown),
      `tick 1: expected JumpDown (3) set, inputData=${botState.self.inputData.toString(2)}`)
    assert.ok(hasBit(botState.self.inputData, PAI_BIT_JumpPressedRaw),
      `tick 1: expected JumpPressedRaw (60) set, inputData=${botState.self.inputData.toString(2)}`)
    assert.ok(hasBit(botState.self.inputData, PAI_BIT_JumpCurrentRaw),
      `tick 1: expected JumpCurrentRaw (61) set, inputData=${botState.self.inputData.toString(2)}`)

    controls.evaluateControls()
    withSelfFeetPosition(botState.self, C, () => {
      physics.simulateSelf(botState, controls.getControlStateSnapshot(), world, C)
    })
    assert.ok(!hasBit(botState.self.inputData, PAI_BIT_JumpPressedRaw),
      `tick 2: expected JumpPressedRaw (60) NOT set (edge gone), inputData=${botState.self.inputData.toString(2)}`)
    assert.ok(hasBit(botState.self.inputData, PAI_BIT_JumpCurrentRaw),
      `tick 2: expected JumpCurrentRaw (61) still set, inputData=${botState.self.inputData.toString(2)}`)

    botState.setControlState('jump', false)
    controls.evaluateControls()
    withSelfFeetPosition(botState.self, C, () => {
      physics.simulateSelf(botState, controls.getControlStateSnapshot(), world, C)
    })
    assert.ok(hasBit(botState.self.inputData, PAI_BIT_JumpReleasedRaw),
      `tick 3: expected JumpReleasedRaw (59) set, inputData=${botState.self.inputData.toString(2)}`)
    assert.ok(!hasBit(botState.self.inputData, PAI_BIT_JumpCurrentRaw),
      `tick 3: expected JumpCurrentRaw (61) cleared, inputData=${botState.self.inputData.toString(2)}`)

    for (let i = 0; i < 7; i++) {
      controls.evaluateControls()
      withSelfFeetPosition(botState.self, C, () => {
        physics.simulateSelf(botState, controls.getControlStateSnapshot(), world, C)
      })
    }
    assert.ok(botState.self.position.z > 0.1,
      `final: expected forward progress on z, got ${botState.self.position.z}`)
  })
})
