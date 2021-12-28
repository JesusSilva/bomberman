import { Bomberman } from './bomberman'
import { Actor } from './classes/Actor'
import { FPSviewer } from './fps-viewer'
import { Map } from './map'
import { Bomberman_one, Bomberman_two } from './utils/keyboard-map'

window.onload = () => {
  const canvas = document.getElementById('canvas') as HTMLCanvasElement
  const ctx = canvas.getContext('2d') as CanvasRenderingContext2D

  const map = new Map(1)
  const fps = new FPSviewer({ x: 12.5, y: 25 + 12.5 })
  const bombermanOne = new Bomberman({ x: 50, y: 50 }, Bomberman_one)
  const bombermanTwo = new Bomberman({ x: 1050, y: 650 }, Bomberman_two)

  const actors: Actor[] = [map, fps, bombermanOne, bombermanTwo]

  let lastFrame = 0

  const render = (time: number) => {
    const delta = (time - lastFrame) / 1000
    lastFrame = time

    actors.forEach((actor: Actor) => {
      actor.draw(delta, ctx)
      actor.update(delta)
    })
    window.requestAnimationFrame(render)
  }

  window.requestAnimationFrame(render)

  document.body.addEventListener('keydown', (e) => {
    actors.forEach((actor) => {
      if (actor.keyboard_event_down) {
        actor.keyboard_event_down(e.key)
      }
    })
  })

  document.body.addEventListener('keyup', (e) => {
    actors.forEach((actor) => {
      if (actor.keyboard_event_up) {
        actor.keyboard_event_up(e.key)
      }
    })
  })
}
