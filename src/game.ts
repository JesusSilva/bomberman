import { Bomberman } from './bomberman'
import { Bombs } from './bombs'
import { Actor } from './classes/Actor'
import { FPSviewer } from './fps-viewer'
import { Map } from './map'
import { Bomberman_one, Bomberman_two } from './utils/keyboard-map'

window.onload = () => {
  const canvas = document.getElementById('canvas') as HTMLCanvasElement
  const canvasAux = document.getElementById('canvas-aux') as HTMLCanvasElement
  const ctx = canvas.getContext('2d') as CanvasRenderingContext2D
  const ctxAux = canvasAux.getContext('2d') as CanvasRenderingContext2D

  const level = 1
  const map = new Map(ctx, level)
  const fps = new FPSviewer(ctxAux, { x: 12.5, y: 25 + 12 })
  const bombs = new Bombs(map, level)
  const bombermanOne = new Bomberman(ctx, map, { x: 50, y: 50 }, Bomberman_one, 1, bombs)
  const bombermanTwo = new Bomberman(ctx, map, { x: 1050, y: 650 }, Bomberman_two, 2, bombs)

  const actors: Actor[] = [bombermanOne, bombermanTwo]

  let lastFrame = 0
  let finish = false

  const render = (time: number) => {
    const delta = (time - lastFrame) / 1000
    lastFrame = time

    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    ctxAux.clearRect(0, 0, ctxAux.canvas.width, ctxAux.canvas.height)
    ctxAux.beginPath()
    ctxAux.strokeStyle = '#EF7E00'
    ctxAux.fillStyle = '#EF7E00'
    ctxAux.fillRect(0, 0, 1150, 50)
    ctxAux.stroke()
    ctxAux.font = '24px Bomberman'
    ctxAux.fillStyle = 'black'
    ctxAux.fillText(`Level: ${level}`, 125, 25 + 12)

    map.draw()
    fps.draw(delta)

    actors.forEach((actor: Actor) => {
      actor.draw()
      actor.update()

      const playerNumber = actor.finishGame()

      if (playerNumber) {
        window.cancelAnimationFrame(myRequest)
        ctx.font = '80px Bomberman'
        ctx.fillStyle = 'black'
        ctx.fillText(`Jugador ${playerNumber === 1 ? 2 : 1}`, 330, 330)
        ctx.fillText(`Gana la partida`, 155, 430)
        ctx.fillStyle = 'white'
        ctx.fillText(`Jugador ${playerNumber === 1 ? 2 : 1}`, 325, 325)
        ctx.fillText(`Gana la partida`, 150, 425)
        finish = true
      }
    })

    if (!finish) {
      window.requestAnimationFrame(render)
    }
  }

  const myRequest = window.requestAnimationFrame(render)

  document.body.addEventListener('keydown', (event: KeyboardEvent) => {
    actors.forEach((actor) => {
      if (actor.keyboard_event_down && !finish) {
        actor.keyboard_event_down(event)
      }
    })
  })

  document.body.addEventListener('keyup', (event: KeyboardEvent) => {
    actors.forEach((actor) => {
      if (actor.keyboard_event_up && !finish) {
        actor.keyboard_event_up(event.key)
      }
    })
  })
}
