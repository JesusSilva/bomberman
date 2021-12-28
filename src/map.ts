/* eslint-disable @typescript-eslint/no-empty-function */
import { Drawer } from './drawer'
import { Position } from './classes/Position'

export class Map {
  position!: Position
  level: number
  levels: { [key: number]: number[][] } = {
    1: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 2, 3, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 1],
      [1, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 1],
      [1, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 3, 2, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ]
  }

  widthOfElement = 50
  heightOfElement = 50

  constructor(level: number, position = { x: 0, y: 0 }) {
    this.position = position
    this.level = level
  }

  draw(delta: number, ctx: CanvasRenderingContext2D) {
    this.levels[this.level].forEach((row: number[], indexRow: number) => {
      row.forEach((element: number, indexCol: number) => {
        const positionX = indexCol * this.widthOfElement
        const positionY = indexRow * this.heightOfElement
        const position: Position = { x: positionX, y: positionY }
        const size: Position = {
          x: this.widthOfElement,
          y: this.heightOfElement
        }

        let drawer!: Drawer

        switch (element) {
          case 0:
            drawer = new Drawer(ctx, position, size, 'rect', 'blue')
            drawer.draw()
            break
          case 1:
            drawer = new Drawer(ctx, position, size, 'rect', 'green')
            drawer.draw()
            break
          case 2:
            drawer = new Drawer(ctx, position, size, 'rect', 'red')
            drawer.draw()
            break
          case 3:
            drawer = new Drawer(ctx, position, size, 'rect', 'black')
            drawer.draw()
            break
          default:
            break
        }
      })
    })
  }

  update(delta: number) {}
}
