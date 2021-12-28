/* eslint-disable @typescript-eslint/no-empty-function */
import { Actor } from './classes/Actor'
import { Position } from './classes/Position'
import { Drawer } from './drawer'
import { BombermanKey, KeyboardMap } from './utils/keyboard-map'

export class Bomberman extends Actor {
  position: Position
  keyboardMap: KeyboardMap
  size: Position = { x: 50, y: 50 }
  speed: Position = { x: 50, y: 50 }

  constructor(position: Position, keyboardMap: KeyboardMap) {
    super(position)
    this.position = position
    this.keyboardMap = keyboardMap
    console.log(this.keyboardMap)
  }

  keyboard_event_down(key: string) {
    console.log(key)
    const tecla = this.keyboardMap[key]

    if (tecla == BombermanKey.LEFT && this.position.x > 50) {
      this.position.x -= 50
    } else if (tecla == BombermanKey.RIGHT && this.position.x < 1050) {
      this.position.x += 50
    } else if (tecla == BombermanKey.UP && this.position.y > 50) {
      this.position.y -= 50
    } else if (tecla == BombermanKey.DOWN && this.position.y < 650) {
      this.position.y += 50
    }

    console.log(this.position.x)
  }

  keyboard_event_up(key: string) {
    const tecla = this.keyboardMap[key]

    if (
      tecla === BombermanKey.LEFT ||
      tecla === BombermanKey.RIGHT ||
      tecla === BombermanKey.UP ||
      tecla === BombermanKey.DOWN
    ) {
      this.speed = { x: 0, y: 0 }
    }
  }

  draw(delta: number, ctx: CanvasRenderingContext2D) {
    const drawer = new Drawer(ctx, this.position, this.size, 'rect', 'yellow')
    drawer.draw()
  }

  update(delta: number) {
    // if (this.position.x > 1100) {
    //   this.position.x -= 50
    // } else if (this.position.x < 50) {
    //   this.position.x += 50
    // }
    // if (this.position.y > 700) {
    //   this.position.y -= 50
    // } else if (this.position.y < 50) {
    //   this.position.y += 50
    // }
  }
}
