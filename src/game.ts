import { Bomberman } from './bomberman'
import { Actor } from './classes/Actor'
import { FPSviewer } from './fps-viewer'

window.onload = () => {
  const canvas = document.getElementById('canvas') as HTMLCanvasElement
  const ctx = canvas?.getContext('2d') as CanvasRenderingContext2D

  const actors: Actor[] = [
    new FPSviewer({ x: 24, y: 48 }),
    new Bomberman({ x: 200, y: 100 }, 10)
  ]

  let lastFrame = 0

  const render = (time: number) => {
    new Map()
    const delta: number = (time - lastFrame) / 1000
    lastFrame = time
    console.log(delta)
    actors.forEach((actor: Actor) => {
      actor.update(delta)
      ctx?.clearRect(0, 0, canvas.width, canvas.height)
    })

    actors.forEach((actor: Actor) => {
      actor.draw(delta, ctx)
    })

    actors[0].draw(delta, ctx)

    window.requestAnimationFrame(render)
  }

  window.requestAnimationFrame(render)

  document.body.addEventListener('keydown', (event) => {
    actors.forEach((actor) => {
      actor.keyboard_event(event.key)
    })
  })
}
