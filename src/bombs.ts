import { Map } from './map'

export class Bombs {
  map: Map
  level: number
  bombQty: { [key: number]: number } = { 1: 1, 2: 1 }

  constructor(map: Map, level: number) {
    this.map = map
    this.level = level
  }

  put(row: number, col: number, playerNumber: number): void {
    if (this.bombQty[playerNumber] > 0) {
      this.map.putBomb(row, col)
      this.bombQty[playerNumber] -= 1
    }
    setTimeout(() => {
      this.detonate(row, col, playerNumber)
    }, 1000)
  }

  detonate(row: number, col: number, playerNumber: number) {
    this.map.detonateBomb(row, col)
    setTimeout(() => {
      this.bombQty[playerNumber] = 1
    }, 1500)
  }

  getBombsQty(playerNumber: number): number {
    return this.bombQty[playerNumber]
  }
}
