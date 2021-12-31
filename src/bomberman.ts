/* eslint-disable @typescript-eslint/no-empty-function */
import { Actor } from './classes/Actor'
import { Position } from './classes/Position'
import { KeyboardMap } from './utils/keyboard-map'

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
  position: Position
  keyboardMap: KeyboardMap
  playerNumber: number
  size: Position = { x: 40, y: 50 }
  speed: Position = { x: 50, y: 50 }
  maxSpeed = 4
  keystrokes: any = {}
  lastKeyPress: string | null = null
  bomberman: HTMLImageElement = new Image()
  animationFramesCount = 0
  animationIndex = 1
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

  constructor(position: Position, keyboardMap: KeyboardMap, playerNumber: number) {
    super(position)
    this.position = position
    this.keyboardMap = keyboardMap
    this.playerNumber = playerNumber
    this.formatKeystrokes()
  }

  draw(delta: number, ctx: CanvasRenderingContext2D) {
    if (!this.pjsDrawed) {
      this.playerNumber === 1
        ? this.changePjImage(ctx, 'right')
        : this.playerNumber === 2
        ? this.changePjImage(ctx, 'left')
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
      ctx.drawImage(this.bomberman, this.position.x, this.position.y, this.size.x, this.size.y)
    }
  }

  update(delta: number, ctx: CanvasRenderingContext2D) {
    // Note: Condition to change the character's image according to its direction.
    if (this.position.x < 1050 && (this.keystrokes['d'] || this.keystrokes['ArrowRight'])) {
      this.position.x += this.maxSpeed
      this.changePjImage(ctx, 'right')
    } else if (this.position.x > 50 && (this.keystrokes['a'] || this.keystrokes['ArrowLeft'])) {
      this.position.x -= this.maxSpeed
      this.changePjImage(ctx, 'left')
    }

    if (this.position.y < 650 && (this.keystrokes['s'] || this.keystrokes['ArrowDown'])) {
      this.position.y += this.maxSpeed
      this.changePjImage(ctx, 'front')
    } else if (this.position.y > 50 && (this.keystrokes['w'] || this.keystrokes['ArrowUp'])) {
      this.position.y -= this.maxSpeed
      this.changePjImage(ctx, 'back')
    }

    // Note: Condition in case it hits the edges of the map that does not disappear when executing ctx.clearRect().
    if (
      (this.position.x >= 1050 && (this.keystrokes['d'] || this.keystrokes['ArrowRight'])) ||
      (this.position.x <= 50 && (this.keystrokes['a'] || this.keystrokes['ArrowLeft'])) ||
      (this.position.y >= 650 && (this.keystrokes['s'] || this.keystrokes['ArrowDown'])) ||
      (this.position.y <= 50 && (this.keystrokes['w'] || this.keystrokes['ArrowUp']))
    ) {
      this.bomberman.src = this.assets[this.playerNumber][this.lastDirection][1]
      ctx.drawImage(this.bomberman, this.position.x, this.position.y, this.size.x, this.size.y)
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
      ctx.drawImage(this.bomberman, this.position.x, this.position.y, this.size.x, this.size.y)
    }

    this.controlAnimationFrame()
  }

  changePjImage(ctx: CanvasRenderingContext2D, direction: string): void {
    switch (direction) {
      case 'back':
        this.lastDirection = 'back'
        this.bomberman.src = this.assets[this.playerNumber][this.lastDirection][this.calculateFrame() as number]
        ctx.drawImage(this.bomberman, this.position.x, this.position.y, this.size.x, this.size.y)
        break
      case 'front':
        this.lastDirection = 'front'
        this.bomberman.src = this.assets[this.playerNumber][this.lastDirection][this.calculateFrame() as number]
        ctx.drawImage(this.bomberman, this.position.x, this.position.y, this.size.x, this.size.y)
        break
      case 'right':
        this.lastDirection = 'right'
        this.bomberman.src = this.assets[this.playerNumber][this.lastDirection][this.calculateFrame() as number]
        ctx.drawImage(this.bomberman, this.position.x, this.position.y, this.size.x, this.size.y)
        break
      case 'left':
        this.lastDirection = 'left'
        this.bomberman.src = this.assets[this.playerNumber][this.lastDirection][this.calculateFrame() as number]
        ctx.drawImage(this.bomberman, this.position.x, this.position.y, this.size.x, this.size.y)
        break
      default:
        break
    }
  }

  controlAnimationFrame(): void {
    if (this.animationFramesCount <= 29) {
      this.animationFramesCount++
    } else {
      this.animationFramesCount = 1
    }
  }

  calculateFrame() {
    if (this.animationFramesCount <= 10) return 1

    if (this.animationFramesCount <= 20) return 2

    if (this.animationFramesCount <= 30) return 3
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
