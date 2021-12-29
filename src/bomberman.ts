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
  keystrokes: any = {}
  lastKeyPress: string | null = null

  constructor(position: Position, keyboardMap: KeyboardMap) {
    super(position)
    this.position = position
    this.keyboardMap = keyboardMap
    this.formatKeystrokes()
  }

  draw(delta: number, ctx: CanvasRenderingContext2D) {
    const drawer = new Drawer(ctx, this.position, this.size, 'rect', 'yellow')
    drawer.draw()
  }

  // eslint-disable-next-line complexity
  update(delta: number) {
    if (
      this.position.x < 1050 &&
      (this.keystrokes['d'] || this.keystrokes['ArrowRight'])
    ) {
      this.position.x += 50
    } else if (
      this.position.x > 50 &&
      (this.keystrokes['a'] || this.keystrokes['ArrowLeft'])
    ) {
      this.position.x -= 50
    }

    if (
      this.position.y < 650 &&
      (this.keystrokes['s'] || this.keystrokes['ArrowDown'])
    ) {
      this.position.y += 50
    } else if (
      this.position.y > 50 &&
      (this.keystrokes['w'] || this.keystrokes['ArrowUp'])
    ) {
      this.position.y -= 50
    }
  }

  formatKeystrokes() {
    for (const key in this.keyboardMap) {
      if (Object.prototype.hasOwnProperty.call(this.keyboardMap, key)) {
        this.keystrokes[key] = false
      }
    }
  }

  keyboard_event_down(key: string) {
    const tecla = this.keyboardMap[key]

    if (Object.keys(this.keyboardMap).includes(key)) {
      this.handleKeyboardEvents(key, null)
    }

    if (tecla === BombermanKey.LEFT && this.position.x > 50) {
      this.position.x -= 50
    } else if (tecla === BombermanKey.RIGHT && this.position.x < 1050) {
      this.position.x += 50
    } else if (tecla === BombermanKey.UP && this.position.y > 50) {
      this.position.y -= 50
    } else if (tecla === BombermanKey.DOWN && this.position.y < 650) {
      this.position.y += 50
    }
  }

  keyboard_event_up(key: string) {
    const tecla = this.keyboardMap[key]

    if (Object.keys(this.keyboardMap).includes(key)) {
      this.handleKeyboardEvents(null, key)
    }

    if (
      tecla === BombermanKey.LEFT ||
      tecla === BombermanKey.RIGHT ||
      tecla === BombermanKey.UP ||
      tecla === BombermanKey.DOWN
    ) {
      this.speed = { x: 0, y: 0 }
    }
  }

  handleKeyboardEvents(keydown: string | null, keyup: string | null) {
    if (keydown) {
      for (const key in this.keystrokes) {
        if (Object.prototype.hasOwnProperty.call(this.keystrokes, key)) {
          this.keystrokes[key] = false
        }
      }
      this.keystrokes[keydown] = true
    }

    if (keyup) {
      this.keystrokes[keyup] = false
    }

    console.log(this.keystrokes)
  }
}
