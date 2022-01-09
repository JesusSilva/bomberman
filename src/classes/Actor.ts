/* eslint-disable @typescript-eslint/no-empty-function */
import { Position } from './Position'

export class Actor {
  ctx: CanvasRenderingContext2D
  position: Position

  constructor(ctx: CanvasRenderingContext2D, position: Position) {
    this.ctx = ctx
    this.position = position
  }
  draw(): void {}
  update(): void {}
  keyboard_event_down(event: KeyboardEvent): void {}
  keyboard_event_up(key: string): void {}
  finishGame(): any {}
}
