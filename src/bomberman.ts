/* eslint-disable @typescript-eslint/no-empty-function */
import { Actor } from './classes/Actor'
import { Position } from './classes/Position'
import { KeyboardMap } from './utils/keyboard-map'
import { Map } from './map'

const bomberman_white_front_1 = require('../public/images/sprites/bombermans/bomberman_white/bomberman_front/bomberman_1.png')
const bomberman_white_front_2 = require('../public/images/sprites/bombermans/bomberman_white/bomberman_front/bomberman_2.png')
const bomberman_white_front_3 = require('../public/images/sprites/bombermans/bomberman_white/bomberman_front/bomberman_3.png')
const bomberman_white_right_1 = require('../public/images/sprites/bombermans/bomberman_white/bomberman_right/bomberman_1.png')
const bomberman_white_right_2 = require('../public/images/sprites/bombermans/bomberman_white/bomberman_right/bomberman_2.png')
const bomberman_white_right_3 = require('../public/images/sprites/bombermans/bomberman_white/bomberman_right/bomberman_3.png')
const bomberman_white_back_1 = require('../public/images/sprites/bombermans/bomberman_white/bomberman_back/bomberman_1.png')
const bomberman_white_back_2 = require('../public/images/sprites/bombermans/bomberman_white/bomberman_back/bomberman_2.png')
const bomberman_white_back_3 = require('../public/images/sprites/bombermans/bomberman_white/bomberman_back/bomberman_3.png')
const bomberman_white_left_1 = require('../public/images/sprites/bombermans/bomberman_white/bomberman_left/bomberman_1.png')
const bomberman_white_left_2 = require('../public/images/sprites/bombermans/bomberman_white/bomberman_left/bomberman_2.png')
const bomberman_white_left_3 = require('../public/images/sprites/bombermans/bomberman_white/bomberman_left/bomberman_3.png')
const bomberman_white_dead_1 = require('../public/images/sprites/bombermans/bomberman_white/bomberman_dead/bomberman_1.png')
const bomberman_white_dead_2 = require('../public/images/sprites/bombermans/bomberman_white/bomberman_dead/bomberman_2.png')
const bomberman_white_dead_3 = require('../public/images/sprites/bombermans/bomberman_white/bomberman_dead/bomberman_3.png')
const bomberman_white_dead_4 = require('../public/images/sprites/bombermans/bomberman_white/bomberman_dead/bomberman_4.png')

const bomberman_blue_front_1 = require('../public/images/sprites/bombermans/bomberman_blue/bomberman_front/bomberman_1.png')
const bomberman_blue_front_2 = require('../public/images/sprites/bombermans/bomberman_blue/bomberman_front/bomberman_2.png')
const bomberman_blue_front_3 = require('../public/images/sprites/bombermans/bomberman_blue/bomberman_front/bomberman_3.png')
const bomberman_blue_right_1 = require('../public/images/sprites/bombermans/bomberman_blue/bomberman_right/bomberman_1.png')
const bomberman_blue_right_2 = require('../public/images/sprites/bombermans/bomberman_blue/bomberman_right/bomberman_2.png')
const bomberman_blue_right_3 = require('../public/images/sprites/bombermans/bomberman_blue/bomberman_right/bomberman_3.png')
const bomberman_blue_back_1 = require('../public/images/sprites/bombermans/bomberman_blue/bomberman_back/bomberman_1.png')
const bomberman_blue_back_2 = require('../public/images/sprites/bombermans/bomberman_blue/bomberman_back/bomberman_2.png')
const bomberman_blue_back_3 = require('../public/images/sprites/bombermans/bomberman_blue/bomberman_back/bomberman_3.png')
const bomberman_blue_left_1 = require('../public/images/sprites/bombermans/bomberman_blue/bomberman_left/bomberman_1.png')
const bomberman_blue_left_2 = require('../public/images/sprites/bombermans/bomberman_blue/bomberman_left/bomberman_2.png')
const bomberman_blue_left_3 = require('../public/images/sprites/bombermans/bomberman_blue/bomberman_left/bomberman_3.png')
const bomberman_blue_dead_1 = require('../public/images/sprites/bombermans/bomberman_blue/bomberman_dead/bomberman_1.png')
const bomberman_blue_dead_2 = require('../public/images/sprites/bombermans/bomberman_blue/bomberman_dead/bomberman_2.png')
const bomberman_blue_dead_3 = require('../public/images/sprites/bombermans/bomberman_blue/bomberman_dead/bomberman_3.png')
const bomberman_blue_dead_4 = require('../public/images/sprites/bombermans/bomberman_blue/bomberman_dead/bomberman_4.png')
export class Bomberman extends Actor {
  ctx: CanvasRenderingContext2D
  map: Map
  position: Position
  keyboardMap: KeyboardMap
  playerNumber: number
  size: Position = { x: 50, y: 50 }
  maxSpeed = 25
  keystrokes: any = {}
  bomberman: HTMLImageElement = new Image()
  animationFramesCount = 0
  lastDirection!: string
  pjsDrawed = false

  assets: { [key: number]: { [key: string]: { [key: number]: any } } } = {
    1: {
      front: {
        1: bomberman_white_front_1,
        2: bomberman_white_front_2,
        3: bomberman_white_front_3
      },
      back: {
        1: bomberman_white_back_1,
        2: bomberman_white_back_2,
        3: bomberman_white_back_3
      },
      right: {
        1: bomberman_white_right_1,
        2: bomberman_white_right_2,
        3: bomberman_white_right_3
      },
      left: {
        1: bomberman_white_left_1,
        2: bomberman_white_left_2,
        3: bomberman_white_left_3
      },
      dead: {
        1: bomberman_white_dead_1,
        2: bomberman_white_dead_2,
        3: bomberman_white_dead_3,
        4: bomberman_white_dead_4
      }
    },
    2: {
      front: {
        1: bomberman_blue_front_1,
        2: bomberman_blue_front_2,
        3: bomberman_blue_front_3
      },
      back: {
        1: bomberman_blue_back_1,
        2: bomberman_blue_back_2,
        3: bomberman_blue_back_3
      },
      right: {
        1: bomberman_blue_right_1,
        2: bomberman_blue_right_2,
        3: bomberman_blue_right_3
      },
      left: {
        1: bomberman_blue_left_1,
        2: bomberman_blue_left_2,
        3: bomberman_blue_left_3
      },
      dead: {
        1: bomberman_blue_dead_1,
        2: bomberman_blue_dead_2,
        3: bomberman_blue_dead_3,
        4: bomberman_blue_dead_4
      }
    }
  }

  constructor(ctx: CanvasRenderingContext2D, position: Position, keyboardMap: KeyboardMap, playerNumber: number) {
    super(ctx, position)
    this.ctx = ctx
    this.position = position
    this.keyboardMap = keyboardMap
    this.playerNumber = playerNumber
    this.map = new Map(this.ctx, 1)
    this.formatKeystrokes()
  }

  draw() {
    if (!this.pjsDrawed) {
      this.playerNumber === 1
        ? this.changePjImage('right')
        : this.playerNumber === 2
        ? this.changePjImage('left')
        : null
      this.pjsDrawed = true
    } // Note: Condition to paint the last position of the character just after executing ctx.clearRect().
    else if (
      !this.keystrokes['d'] &&
      !this.keystrokes['ArrowRight'] &&
      !this.keystrokes['a'] &&
      !this.keystrokes['ArrowLeft'] &&
      !this.keystrokes['s'] &&
      !this.keystrokes['ArrowDown'] &&
      !this.keystrokes['w'] &&
      !this.keystrokes['ArrowUp']
    ) {
      this.bomberman.src = this.assets[this.playerNumber][this.lastDirection][1]
      this.ctx.drawImage(this.bomberman, this.position.x, this.position.y, this.size.x, this.size.y)
    }
  }

  update() {
    // Note: Condition to change the character's image according to its direction.
    if (this.position.x < 1050 && (this.keystrokes['d'] || this.keystrokes['ArrowRight'])) {
      this.changePjImage('right')
    } else if (this.position.x > 50 && (this.keystrokes['a'] || this.keystrokes['ArrowLeft'])) {
      this.changePjImage('left')
    }

    if (this.position.y < 650 && (this.keystrokes['s'] || this.keystrokes['ArrowDown'])) {
      this.changePjImage('front')
    } else if (this.position.y > 50 && (this.keystrokes['w'] || this.keystrokes['ArrowUp'])) {
      this.changePjImage('back')
    }

    // Note: Condition in case it hits the edges of the map that does not disappear when executing ctx.clearRect().
    if (
      (this.position.x >= 1050 && (this.keystrokes['d'] || this.keystrokes['ArrowRight'])) ||
      (this.position.x <= 50 && (this.keystrokes['a'] || this.keystrokes['ArrowLeft'])) ||
      (this.position.y >= 650 && (this.keystrokes['s'] || this.keystrokes['ArrowDown'])) ||
      (this.position.y <= 50 && (this.keystrokes['w'] || this.keystrokes['ArrowUp']))
    ) {
      this.bomberman.src = this.assets[this.playerNumber][this.lastDirection][1]
      this.ctx.drawImage(this.bomberman, this.position.x, this.position.y, this.size.x, this.size.y)
    }

    // Note: Condition to paint the last position of the character just after executing ctx.clearRect().
    if (
      !this.keystrokes['d'] &&
      !this.keystrokes['ArrowRight'] &&
      !this.keystrokes['a'] &&
      !this.keystrokes['ArrowLeft'] &&
      !this.keystrokes['s'] &&
      !this.keystrokes['ArrowDown'] &&
      !this.keystrokes['w'] &&
      !this.keystrokes['ArrowUp']
    ) {
      this.bomberman.src = this.assets[this.playerNumber][this.lastDirection][1]
      this.ctx.drawImage(this.bomberman, this.position.x, this.position.y, this.size.x, this.size.y)
    }
  }

  formatKeystrokes() {
    for (const key in this.keyboardMap) {
      if (Object.prototype.hasOwnProperty.call(this.keyboardMap, key)) {
        this.keystrokes[key] = false
      }
    }
  }

  keyboard_event_down(event: KeyboardEvent) {
    if (Object.keys(this.keyboardMap).includes(event.key)) {
      this.handleKeyboardEvents(event.key, null)
    }

    const hasCollided: boolean = this.map.checkColision(this.position, this.size, this.keystrokes)

    const keystrokeCase =
      this.keystrokes.d || this.keystrokes.ArrowRight
        ? 'right'
        : this.keystrokes.a || this.keystrokes.ArrowLeft
        ? 'left'
        : this.keystrokes.s || this.keystrokes.ArrowDown
        ? 'down'
        : this.keystrokes.w || this.keystrokes.ArrowUp
        ? 'up'
        : ''

    switch (keystrokeCase) {
      case 'right':
        this.moveToRight(hasCollided)
        break
      case 'left':
        this.moveToLeft(hasCollided)
        break
      case 'down':
        this.moveToDown(hasCollided)
        break
      case 'up':
        this.moveToUp(hasCollided)
        break

      default:
        break
    }
    console.log(this.keystrokes)
    this.controlAnimationFrame()
  }

  moveToRight(hasCollided: boolean) {
    const col: number = this.position.x / this.size.x

    if (!hasCollided && this.position.x < 1050 && (this.keystrokes['d'] || this.keystrokes['ArrowRight'])) {
      this.changePjImage('right')
      this.position.x += this.maxSpeed
    } else if (
      hasCollided &&
      !Number.isInteger(col) &&
      this.position.x < 1050 &&
      (this.keystrokes['d'] || this.keystrokes['ArrowRight'])
    ) {
      this.position.x += this.maxSpeed
    }
  }

  moveToLeft(hasCollided: boolean) {
    const col: number = this.position.x / this.size.x

    if (!hasCollided && this.position.x > 50 && (this.keystrokes['a'] || this.keystrokes['ArrowLeft'])) {
      this.changePjImage('left')
      this.position.x -= this.maxSpeed
    } else if (
      hasCollided &&
      !Number.isInteger(col) &&
      this.position.x > 50 &&
      (this.keystrokes['a'] || this.keystrokes['ArrowLeft'])
    ) {
      this.position.x -= this.maxSpeed
    }
  }

  moveToDown(hasCollided: boolean) {
    const row: number = this.position.y / this.size.y

    if (!hasCollided && this.position.y < 650 && (this.keystrokes['s'] || this.keystrokes['ArrowDown'])) {
      this.changePjImage('front')
      this.position.y += this.maxSpeed
    } else if (
      hasCollided &&
      !Number.isInteger(row) &&
      this.position.y < 650 &&
      (this.keystrokes['s'] || this.keystrokes['ArrowDown'])
    ) {
      this.position.y += this.maxSpeed
    }
  }

  moveToUp(hasCollided: boolean) {
    const row: number = this.position.y / this.size.y

    if (!hasCollided && this.position.y > 50 && (this.keystrokes['w'] || this.keystrokes['ArrowUp'])) {
      this.changePjImage('back')
      this.position.y -= this.maxSpeed
    } else if (
      hasCollided &&
      !Number.isInteger(row) &&
      this.position.y > 50 &&
      (this.keystrokes['w'] || this.keystrokes['ArrowUp'])
    ) {
      this.position.y -= this.maxSpeed
    }
  }

  controlAnimationFrame(): void {
    if (this.animationFramesCount <= 2) {
      this.animationFramesCount++
    } else {
      this.animationFramesCount = 1
    }
  }

  changePjImage(direction: string): void {
    switch (direction) {
      case 'back':
        this.lastDirection = 'back'
        this.bomberman.src = this.assets[this.playerNumber][this.lastDirection][this.animationFramesCount]
        this.ctx.drawImage(this.bomberman, this.position.x, this.position.y, this.size.x, this.size.y)
        break
      case 'front':
        this.lastDirection = 'front'
        this.bomberman.src = this.assets[this.playerNumber][this.lastDirection][this.animationFramesCount]
        this.ctx.drawImage(this.bomberman, this.position.x, this.position.y, this.size.x, this.size.y)
        break
      case 'right':
        this.lastDirection = 'right'
        this.bomberman.src = this.assets[this.playerNumber][this.lastDirection][this.animationFramesCount]
        this.ctx.drawImage(this.bomberman, this.position.x, this.position.y, this.size.x, this.size.y)
        break
      case 'left':
        this.lastDirection = 'left'
        this.bomberman.src = this.assets[this.playerNumber][this.lastDirection][this.animationFramesCount]
        this.ctx.drawImage(this.bomberman, this.position.x, this.position.y, this.size.x, this.size.y)
        break
      default:
        break
    }
  }

  keyboard_event_up(key: string) {
    if (Object.keys(this.keyboardMap).includes(key)) {
      this.handleKeyboardEvents(null, key)
    }
  }

  handleKeyboardEvents(keydown: string | null, keyup: string | null) {
    if (keydown) {
      for (const key in this.keystrokes) {
        if (Object.prototype.hasOwnProperty.call(this.keystrokes, key)) {
          this.keystrokes[key] = false
        }
      }
      this.keystrokes[keydown] = true
    }

    if (keyup) {
      this.keystrokes[keyup] = false
    }
  }
}
