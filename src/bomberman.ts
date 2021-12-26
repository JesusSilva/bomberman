import { Actor } from './classes/Actor'
import { Position } from './classes/Position'

export class Bomberman extends Actor {
  origin: Position
  speed: number

  constructor(position: Position, speed: number) {
    super(position)
    this.origin = { x: position.x, y: position.y }
    this.speed = speed
  }

  update(delta: number) {}

  keyboard_event(key: string) {
    switch (key) {
      case 'ArrowRight':
        console.log('right')
        break
      case 'ArrowLeft':
        console.log('left')
        break
      case 'ArrowUp':
        console.log('up')
        break
      case 'ArrowDown':
        console.log('down')
        break
    }
  }

  draw(delta: number, ctx: CanvasRenderingContext2D) {
    console.log('Delta Bomberman: ' + delta)
    console.log('CTX Bomberman: ' + ctx)
  }
}
