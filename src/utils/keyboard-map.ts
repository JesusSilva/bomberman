export enum BombermanKey {
  UP = 1,
  DOWN = 2,
  LEFT = 3,
  RIGHT = 4,
  BOMB = 5
}

export interface KeyboardMap {
  [key: string]: BombermanKey
}

export const Bomberman_one = {
  ArrowUp: BombermanKey.UP,
  ArrowDown: BombermanKey.DOWN,
  ArrowLeft: BombermanKey.LEFT,
  ArrowRight: BombermanKey.RIGHT,
  Shift: BombermanKey.BOMB
}
export const Bomberman_two = {
  w: BombermanKey.UP,
  s: BombermanKey.DOWN,
  a: BombermanKey.LEFT,
  d: BombermanKey.RIGHT,
  e: BombermanKey.BOMB
}
