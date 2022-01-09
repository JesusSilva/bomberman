import { Position } from './classes/Position'

/* eslint-disable @typescript-eslint/no-empty-function */
const bomb = require('../public/images/sprites/bomb/bomb_1.png')

export class Levels {
  ctx: CanvasRenderingContext2D
  level!: number
  bomb: HTMLImageElement = new Image()
  position: Position = { x: 150, y: 15 }

  constructor(ctx: CanvasRenderingContext2D) {
    this.ctx = ctx
    this.bomb.src = bomb
  }

  draw(bgColor: string, color: string) {
    this.ctx.beginPath()
    this.ctx.strokeStyle = bgColor
    this.ctx.fillStyle = bgColor
    this.ctx.fillRect(0, 0, 1150, 50)
    this.ctx.stroke()

    this.ctx.font = '24px Bomberman'
    this.ctx.fillStyle = color
    this.ctx.fillText(`Level 1`, 190, 35)
    this.ctx.fillText(`Level 2`, 350, 35)

    this.ctx.drawImage(this.bomb, this.position.x, this.position.y, 25, 25)
  }

  keyboard_event_down(key: string) {
    if (key === '1') {
      this.level = 1
      this.position.x = 150
    } else if (key === '2') {
      this.level = 2
      this.position.x = 315
    }
  }

  getLevel(): number {
    return this.level || 1
  }
}
