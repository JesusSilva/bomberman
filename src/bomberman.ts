/* eslint-disable @typescript-eslint/no-empty-function */
import { Actor } from './classes/Actor'
import { Position } from './classes/Position'
import { Drawer } from './drawer'
import { BombermanKey, KeyboardMap } from './utils/keyboard-map'

export class Bomberman extends Actor {
  origin: Position
  keyboardMap: KeyboardMap
  size: Position = { x: 50, y: 50 }

  constructor(position: Position, keyboardMap: KeyboardMap) {
    super(position)
    this.origin = { x: position.x, y: position.y }
    this.keyboardMap = keyboardMap
  }

  keyboard_event_down(key: string) {
    const tecla = this.keyboardMap[key]

    if (tecla == BombermanKey.LEFT) {
      console.log({ ...this.keyboardMap, Tecla: tecla })
    } else if (tecla == BombermanKey.RIGHT) {
      console.log({ ...this.keyboardMap, Tecla: tecla })
    } else if (tecla == BombermanKey.UP) {
      console.log({ ...this.keyboardMap, Tecla: tecla })
    } else if (tecla == BombermanKey.DOWN) {
      console.log({ ...this.keyboardMap, Tecla: tecla })
    }
  }

  keyboard_event_up(key: string) {
    const tecla = this.keyboardMap[key]

    if (tecla == BombermanKey.LEFT) {
      console.log({ ...this.keyboardMap, Tecla: tecla })
    } else if (tecla == BombermanKey.RIGHT) {
      console.log({ ...this.keyboardMap, Tecla: tecla })
    } else if (tecla == BombermanKey.UP) {
      console.log({ ...this.keyboardMap, Tecla: tecla })
    } else if (tecla == BombermanKey.DOWN) {
      console.log({ ...this.keyboardMap, Tecla: tecla })
    }
  }

  draw(delta: number, ctx: CanvasRenderingContext2D) {
    const drawer = new Drawer(ctx, this.position, this.size, 'rect', 'yellow')
    drawer.draw()
  }

  update(delta: number) {}
}
