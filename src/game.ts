import { Bomberman } from './bomberman'
import { Actor } from './classes/Actor'
import { FPSviewer } from './fps-viewer'
import { Map } from './map'
import { Bomberman_one, Bomberman_two } from './utils/keyboard-map'

window.onload = () => {
  const canvas = document.getElementById('canvas') as HTMLCanvasElement
  const ctx = canvas.getContext('2d') as CanvasRenderingContext2D

  const map = new Map(ctx, 1)
  const fps = new FPSviewer(ctx, { x: 12.5, y: 25 + 12.5 })
  const bombermanOne = new Bomberman(ctx, { x: 50, y: 50 }, Bomberman_one, 1)
  const bombermanTwo = new Bomberman(ctx, { x: 1050, y: 650 }, Bomberman_two, 2)

  const actors: Actor[] = [bombermanOne, bombermanTwo]

  let lastFrame = 0

  const render = (time: number) => {
    const delta = (time - lastFrame) / 1000
    lastFrame = time

    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)

    map.draw()
    fps.draw(delta)

    actors.forEach((actor: Actor) => {
      actor.draw()
      actor.update()
    })

    window.requestAnimationFrame(render)
  }

  window.requestAnimationFrame(render)

  document.body.addEventListener('keydown', (event: KeyboardEvent) => {
    actors.forEach((actor) => {
      if (actor.keyboard_event_down) {
        actor.keyboard_event_down(event)
      }
    })
  })

  document.body.addEventListener('keyup', (event: KeyboardEvent) => {
    actors.forEach((actor) => {
      if (actor.keyboard_event_up) {
        actor.keyboard_event_up(event.key)
      }
    })
  })
}
