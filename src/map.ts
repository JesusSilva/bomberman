/* eslint-disable @typescript-eslint/no-empty-function */
import { Drawer } from './drawer'
import { Position } from './classes/Position'

const lvl1_wall = require('../public/images/sprites/levels/level_1/wall.png')
const lvl1_grass = require('../public/images/sprites/levels/level_1/grass.png')
const lvl1_obstacle = require('../public/images/sprites/levels/level_1/obstacle.png')
const lvl1_barrier = require('../public/images/sprites/levels/level_1/barrier.png')

const lvl2_wall = require('../public/images/sprites/levels/level_2/wall.png')
const lvl2_grass = require('../public/images/sprites/levels/level_2/grass.png')
const lvl2_obstacle = require('../public/images/sprites/levels/level_2/obstacle.png')
const lvl2_barrier = require('../public/images/sprites/levels/level_2/barrier.png')

const finish = require('../public/images/sprites/finish.png')

export class Map {
  position!: Position
  level: number
  levels: { [key: number]: number[][] } = {
    1: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 2, 3, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 1],
      [1, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 1],
      [1, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 3, 2, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ]
  }

  widthOfElement = 50
  heightOfElement = 50

  wall: HTMLImageElement
  grass: HTMLImageElement
  barrier: HTMLImageElement
  obstacle: HTMLImageElement
  finish: HTMLImageElement

  constructor(level: number, position = { x: 0, y: 0 }) {
    this.position = position
    this.level = level
    this.wall = new Image()
    this.grass = new Image()
    this.barrier = new Image()
    this.obstacle = new Image()
    this.finish = new Image()
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
  }

  draw(delta: number, ctx: CanvasRenderingContext2D) {
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
            drawer = new Drawer(ctx, position, size, 'rect', 'blue')
            drawer.draw()
            ctx.drawImage(this.grass, position.x, position.y, 50, 50)
            break
          case 1:
            drawer = new Drawer(ctx, position, size, 'rect', 'green')
            drawer.draw()
            ctx.drawImage(this.wall, position.x, position.y, 50, 50)
            break
          case 2:
            drawer = new Drawer(ctx, position, size, 'rect', 'red')
            drawer.draw()
            ctx.drawImage(this.obstacle, position.x, position.y, 50, 50)
            break
          case 3:
            drawer = new Drawer(ctx, position, size, 'rect', 'black')
            drawer.draw()
            ctx.drawImage(this.barrier, position.x, position.y, 50, 50)
            break
          case 4:
            drawer = new Drawer(ctx, position, size, 'rect', 'pink')
            drawer.draw()
            ctx.drawImage(this.finish, position.x, position.y, 50, 50)
            break
          default:
            break
        }
      })
    })
  }

  update(delta: number, ctx: CanvasRenderingContext2D) {}
}
