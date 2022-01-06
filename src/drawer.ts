import { Position } from './classes/Position'

export class Drawer {
  ctx: CanvasRenderingContext2D
  form: string
  color: string
  position: Position
  size: Position

  constructor(ctx: CanvasRenderingContext2D, position: Position, size: Position, form: string, color: string) {
    this.ctx = ctx
    this.form = form
    this.color = color
    this.position = position
    this.size = size
  }

  draw() {
    switch (this.form) {
      case 'rect':
        this.ctx.beginPath()
        this.ctx.strokeStyle = this.color
        this.ctx.fillStyle = this.color
        this.ctx.fillRect(this.position.x, this.position.y, this.size.x, this.size.y)
        this.ctx.stroke()
        break
      case 'arc':
        this.ctx.strokeStyle = this.color
        this.ctx.fillStyle = this.color
        this.ctx.beginPath()
        this.ctx.arc(this.position.x + this.size.x / 2, this.position.y + this.size.y / 2, 3, 0, 2 * Math.PI)
        this.ctx.closePath()
        this.ctx.stroke()
        this.ctx.fill()
        break
      default:
        break
    }
  }
}
