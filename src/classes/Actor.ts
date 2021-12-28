/* eslint-disable @typescript-eslint/no-empty-function */
import { Position } from './Position'

export class Actor {
  position: Position
  constructor(position: Position) {
    this.position = position
  }
  draw(delta: number, ctx: CanvasRenderingContext2D) {}
  update(delta: number) {}
  keyboard_event_down?(key: string): void {}
  keyboard_event_up?(key: string): void {}
}
