/* eslint-disable @typescript-eslint/no-empty-function */
import { Drawer } from './drawer'
import { Position } from './classes/Position'

const lvl1_wall = require('../public/images/sprites/levels/level_1/obstacle.png')
const lvl1_grass = require('../public/images/sprites/levels/level_1/grass.png')
const lvl1_obstacle = require('../public/images/sprites/levels/level_1/obstacle.png')
const lvl1_barrier = require('../public/images/sprites/levels/level_1/barrier.png')

const lvl2_wall = require('../public/images/sprites/levels/level_2/wall.png')
const lvl2_grass = require('../public/images/sprites/levels/level_2/grass.png')
const lvl2_obstacle = require('../public/images/sprites/levels/level_2/obstacle.png')
const lvl2_barrier = require('../public/images/sprites/levels/level_2/barrier.png')

const finish = require('../public/images/sprites/finish.png')
const bomb = require('../public/images/sprites/bomb/bomb_3.png')
const bombEffects = require('../public/images/sprites/bomb/bomb_effect.png')
const bombEffectsUp = require('../public/images/sprites/bomb/bomb_effect_up.png')
const bombEffectsRight = require('../public/images/sprites/bomb/bomb_effect_right.png')
const bombEffectsDown = require('../public/images/sprites/bomb/bomb_effect_down.png')
const bombEffectsLeft = require('../public/images/sprites/bomb/bomb_effect_left.png')

export class Map {
  ctx: CanvasRenderingContext2D
  position!: Position
  level: number
  levels: { [key: number]: number[][] } = {
    1: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 0, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 1],
      [1, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 1],
      [1, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 1],
      [1, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 1],
      [1, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 1],
      [1, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 1],
      [1, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 1],
      [1, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 1],
      [1, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 1],
      [1, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 1],
      [1, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 1],
      [1, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 1],
      [1, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 0, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    2: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ]
  }

  widthOfElement = 50
  heightOfElement = 50

  wall: HTMLImageElement = new Image()
  grass: HTMLImageElement = new Image()
  barrier: HTMLImageElement = new Image()
  obstacle: HTMLImageElement = new Image()
  finish: HTMLImageElement = new Image()
  bomb: HTMLImageElement = new Image()
  bombEffects: HTMLImageElement = new Image()
  bombEffectsUp: HTMLImageElement = new Image()
  bombEffectsRight: HTMLImageElement = new Image()
  bombEffectsDown: HTMLImageElement = new Image()
  bombEffectsLeft: HTMLImageElement = new Image()

  constructor(ctx: CanvasRenderingContext2D, level: number, position = { x: 0, y: 0 }) {
    this.ctx = ctx
    this.position = position
    this.level = level
    this.loadAssets()
  }

  loadAssets() {
    switch (this.level) {
      case 1:
        this.wall.src = lvl1_wall
        this.grass.src = lvl1_grass
        this.barrier.src = lvl1_barrier
        this.obstacle.src = lvl1_obstacle
        break
      case 2:
        this.wall.src = lvl2_wall
        this.grass.src = lvl2_grass
        this.barrier.src = lvl2_obstacle
        this.obstacle.src = lvl2_barrier
        break
      default:
        break
    }
    this.finish.src = finish
    this.bomb.src = bomb
    this.bombEffects.src = bombEffects
    this.bombEffectsUp.src = bombEffectsUp
    this.bombEffectsRight.src = bombEffectsRight
    this.bombEffectsDown.src = bombEffectsDown
    this.bombEffectsLeft.src = bombEffectsLeft
  }

  draw() {
    this.levels[this.level].forEach((row: number[], indexRow: number) => {
      row.forEach((element: number, indexCol: number) => {
        const positionX = indexCol * this.widthOfElement
        const positionY = indexRow * this.heightOfElement
        const position: Position = { x: positionX, y: positionY }
        const size: Position = {
          x: this.widthOfElement,
          y: this.heightOfElement
        }

        let drawer!: Drawer

        switch (element) {
          case 0:
            drawer = new Drawer(this.ctx, position, size, 'rect', 'blue')
            drawer.draw()
            this.ctx.drawImage(this.grass, position.x, position.y, 50, 50)
            break
          case 1:
            drawer = new Drawer(this.ctx, position, size, 'rect', 'green')
            drawer.draw()
            this.ctx.drawImage(this.wall, position.x, position.y, 50, 50)
            break
          case 2:
            drawer = new Drawer(this.ctx, position, size, 'rect', 'red')
            drawer.draw()
            this.ctx.drawImage(this.obstacle, position.x, position.y, 50, 50)
            break
          case 3:
            drawer = new Drawer(this.ctx, position, size, 'rect', 'black')
            drawer.draw()
            this.ctx.drawImage(this.barrier, position.x, position.y, 50, 50)
            break
          case 4:
            drawer = new Drawer(this.ctx, position, size, 'rect', 'pink')
            drawer.draw()
            this.ctx.drawImage(this.finish, position.x, position.y, 50, 50)
            break
          case 5:
            this.ctx.drawImage(this.grass, position.x, position.y, 50, 50)
            this.ctx.drawImage(this.bomb, position.x, position.y, 50, 50)
            break
          case 6:
            // draw center of explosion
            this.ctx.save()
            this.ctx.drawImage(this.grass, position.x, position.y, 50, 50)
            this.ctx.drawImage(this.bombEffects, 48 * 2, 0, 48, 48, position.x, position.y, 50, 50)
            this.ctx.restore()
            break
          case 7:
            // draw up of explosion
            this.ctx.save()
            this.ctx.drawImage(this.grass, position.x, position.y, 50, 50)
            this.ctx.drawImage(this.bombEffectsUp, 91, 48 * 4, 43, 48, position.x, position.y, 50, 50)
            // this.ctx.rotate((0 * Math.PI) / 180)
            this.ctx.restore()
            break
          case 8:
            // draw right of explosion
            this.ctx.save()
            this.ctx.drawImage(this.grass, position.x, position.y, 50, 50)
            this.ctx.drawImage(this.bombEffectsRight, 96, 91, 48, 43, position.x, position.y, 50, 50)
            this.ctx.restore()
            break
          case 9:
            // draw down of explosion
            this.ctx.save()
            this.ctx.drawImage(this.grass, position.x, position.y, 50, 50)
            this.ctx.drawImage(this.bombEffectsDown, 0, 48 * 2, 43, 48, position.x, position.y, 50, 50)
            // this.ctx.rotate((90 * Math.PI) / 180)
            this.ctx.restore()
            break
          case 10:
            // draw left of explosion
            this.ctx.save()
            this.ctx.drawImage(this.grass, position.x, position.y, 50, 50)
            this.ctx.drawImage(this.bombEffectsLeft, 48 * 4, 0, 48, 43, position.x, position.y, 50, 50)
            this.ctx.rotate((180 * Math.PI) / 180)
            this.ctx.restore()
            break
          default:
            break
        }
      })
    })
  }

  checkColision(positionActor: Position, sizeActor: Position, keystroke: any): boolean {
    const row = positionActor.y / sizeActor.y
    const col = positionActor.x / sizeActor.x

    const conditionRightFree =
      !Number.isInteger(row) || !Number.isInteger(col)
        ? this.levels[this.level][Math.floor(row)][Math.floor(col) + 1] !== 0 ||
          this.levels[this.level][Math.ceil(row)][Math.ceil(col) + 1] !== 0
        : this.levels[this.level][row][col + 1] !== 0 &&
          this.levels[this.level][row][col + 1] !== 6 &&
          this.levels[this.level][row][col + 1] !== 7 &&
          this.levels[this.level][row][col + 1] !== 8 &&
          this.levels[this.level][row][col + 1] !== 9 &&
          this.levels[this.level][row][col + 1] !== 10

    const conditionLeftFree =
      !Number.isInteger(row) || !Number.isInteger(col)
        ? this.levels[this.level][Math.floor(row)][Math.floor(col) - 1] !== 0 ||
          this.levels[this.level][Math.ceil(row)][Math.ceil(col) - 1] !== 0
        : this.levels[this.level][row][col - 1] !== 0 &&
          this.levels[this.level][row][col - 1] !== 6 &&
          this.levels[this.level][row][col - 1] !== 7 &&
          this.levels[this.level][row][col - 1] !== 8 &&
          this.levels[this.level][row][col - 1] !== 9 &&
          this.levels[this.level][row][col - 1] !== 10

    const conditionDownFree =
      !Number.isInteger(row) || !Number.isInteger(col)
        ? this.levels[this.level][Math.floor(row) + 1][Math.floor(col)] !== 0 ||
          this.levels[this.level][Math.ceil(row) + 1][Math.ceil(col)] !== 0
        : this.levels[this.level][row + 1][col] !== 0 &&
          this.levels[this.level][row + 1][col] !== 6 &&
          this.levels[this.level][row + 1][col] !== 7 &&
          this.levels[this.level][row + 1][col] !== 8 &&
          this.levels[this.level][row + 1][col] !== 9 &&
          this.levels[this.level][row + 1][col] !== 10

    const conditionUpFree =
      !Number.isInteger(row) || !Number.isInteger(col)
        ? this.levels[this.level][Math.floor(row) - 1][Math.floor(col)] !== 0 ||
          this.levels[this.level][Math.ceil(row) - 1][Math.ceil(col)] !== 0
        : this.levels[this.level][row - 1][col] !== 0 &&
          this.levels[this.level][row - 1][col] !== 6 &&
          this.levels[this.level][row - 1][col] !== 7 &&
          this.levels[this.level][row - 1][col] !== 8 &&
          this.levels[this.level][row - 1][col] !== 9 &&
          this.levels[this.level][row - 1][col] !== 10

    const keystrokeCase =
      keystroke.d || keystroke.ArrowRight
        ? 'right'
        : keystroke.a || keystroke.ArrowLeft
        ? 'left'
        : keystroke.s || keystroke.ArrowDown
        ? 'down'
        : keystroke.w || keystroke.ArrowUp
        ? 'up'
        : ''

    switch (keystrokeCase) {
      case 'right':
        return conditionRightFree ? true : false
      case 'left':
        return conditionLeftFree ? true : false
      case 'down':
        return conditionDownFree ? true : false
      case 'up':
        return conditionUpFree ? true : false

      default:
        return true
    }
  }

  checkStillAlive(row: number, col: number): boolean {
    if (
      this.levels[this.level][row][col] !== 6 &&
      this.levels[this.level][row][col] !== 7 &&
      this.levels[this.level][row][col] !== 8 &&
      this.levels[this.level][row][col] !== 9 &&
      this.levels[this.level][row][col] !== 10
    ) {
      return true
    }

    return false
  }

  putBomb(row: number, col: number) {
    this.levels[this.level][row][col] = 5
    console.log(this.levels[this.level])
  }

  detonateBomb(row: number, col: number) {
    const up = this.levels[this.level][row - 1][col]
    const right = this.levels[this.level][row][col + 1]
    const down = this.levels[this.level][row + 1][col]
    const left = this.levels[this.level][row][col - 1]

    this.levels[this.level][row][col] = 6

    if (up === 0 || up === 3) {
      this.levels[this.level][row - 1][col] = 7
    }

    if (right === 0 || right === 3) {
      this.levels[this.level][row][col + 1] = 8
    }

    if (down === 0 || down === 3) {
      this.levels[this.level][row + 1][col] = 9
    }

    if (left === 0 || left === 3) {
      this.levels[this.level][row][col - 1] = 10
    }

    setTimeout(() => {
      this.levels[this.level][row][col] = 0

      if (up === 0 || up === 3) {
        this.levels[this.level][row - 1][col] = 0
      }

      if (right === 0 || right === 3) {
        this.levels[this.level][row][col + 1] = 0
      }

      if (down === 0 || down === 3) {
        this.levels[this.level][row + 1][col] = 0
      }

      if (left === 0 || left === 3) {
        this.levels[this.level][row][col - 1] = 0
      }
    }, 1500)
  }
}
