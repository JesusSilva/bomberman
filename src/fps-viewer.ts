/* eslint-disable @typescript-eslint/no-empty-function */
import { Position } from './classes/Position'

export class FPSviewer {
  ctx: CanvasRenderingContext2D
  position: Position
  constructor(ctx: CanvasRenderingContext2D, position: Position) {
    this.ctx = ctx
    this.position = position
  }

  draw(delta: number, color: string) {
    const fps = (1 / delta).toFixed(0)
    this.ctx.font = '24px Bomberman'
    this.ctx.fillStyle = color
    this.ctx.fillText(`FPS:${fps}`, this.position.x, this.position.y)
    // console.log(`FPS:${fps}`)
  }
}
