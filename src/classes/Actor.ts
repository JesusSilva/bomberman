import { Position } from './Position'

export interface IActor {
  position: Position
  update: (delta: number) => void
  keyboard_event?: (key: string) => void
  draw: (delta: number, ctx: CanvasRenderingContext2D) => void
}

export class Actor implements IActor {
  position: Position
  constructor(position: Position) {
    this.position = position
  }

  update(delta: number) {}

  draw(delta: number, ctx: CanvasRenderingContext2D) {}

  keyboard_event(key: string) {}
}
