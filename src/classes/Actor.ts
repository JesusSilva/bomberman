/* eslint-disable @typescript-eslint/no-empty-function */
import { Position } from './Position'

export class Actor {
  position: Position
  constructor(position: Position) {
    this.position = position
  }
  draw(delta: number, ctx: CanvasRenderingContext2D) {}
  update(delta: number, ctx: CanvasRenderingContext2D) {}
  keyboard_event_down?(event: KeyboardEvent): void {}
  keyboard_event_up?(key: string): void {}
}
