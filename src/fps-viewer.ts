/* eslint-disable @typescript-eslint/no-empty-function */
import { Position } from './classes/Position'

export class FPSviewer {
  position: Position
  constructor(position: Position) {
    this.position = position
  }

  draw(delta: number, ctx: CanvasRenderingContext2D) {
    const fps = (1 / delta).toFixed(0)
    ctx.font = '24px Bomberman'
    ctx.fillStyle = 'white'
    ctx.fillText(`FPS:${fps}`, this.position.x, this.position.y)
  }

  update(delta: number) {}
}
