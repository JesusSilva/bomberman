import { Bomberman } from './bomberman'
import { Bombs } from './bombs'
import { Actor } from './classes/Actor'
import { FPSviewer } from './fps-viewer'
import { Levels } from './levels'
import { Map } from './map'
import { Bomberman_one, Bomberman_two } from './utils/keyboard-map'

window.onload = () => {
  const canvasAux = document.getElementById('canvas-aux') as HTMLCanvasElement
  const ctxAux = canvasAux.getContext('2d') as CanvasRenderingContext2D
  const bgAux = '#FFD737'
  const colorTextAux = 'black'
  const canvasGame = document.getElementById('canvas') as HTMLCanvasElement
  const ctxGame = canvasGame.getContext('2d') as CanvasRenderingContext2D

  const levels = new Levels(ctxAux)
  let level = levels.getLevel()

  let map = new Map(ctxGame, level)
  let fps = new FPSviewer(ctxAux, { x: 12.5, y: 25 + 12 })
  let bombs = new Bombs(map, level)
  let bombermanOne = new Bomberman(ctxGame, map, { x: 50, y: 50 }, Bomberman_one, 1, bombs)
  let bombermanTwo = new Bomberman(ctxGame, map, { x: 1050, y: 650 }, Bomberman_two, 2, bombs)

  let actors: Actor[] = [bombermanOne, bombermanTwo]

  let lastFrame = 0
  let finish = false

  const render = (time: number) => {
    const delta = (time - lastFrame) / 1000
    lastFrame = time

    ctxGame.clearRect(0, 0, ctxGame.canvas.width, ctxGame.canvas.height)
    ctxAux.clearRect(0, 0, ctxAux.canvas.width, ctxAux.canvas.height)

    levels.draw(bgAux, colorTextAux)
    fps.draw(delta, colorTextAux)
    map.draw()

    actors.forEach((actor: Actor) => {
      actor.draw()
      actor.update()

      const playerFinishNumber = actor.finishGame()

      if (playerFinishNumber) {
        // window.cancelAnimationFrame(myRequest)
        ctxGame.font = '80px Bomberman'
        ctxGame.fillStyle = 'black'
        ctxGame.fillText(`Jugador ${playerFinishNumber === 1 ? 2 : 1}`, 330, 330)
        ctxGame.fillText(`Gana la partida`, 155, 430)
        ctxGame.fillStyle = 'white'
        ctxGame.fillText(`Jugador ${playerFinishNumber === 1 ? 2 : 1}`, 325, 325)
        ctxGame.fillText(`Gana la partida`, 150, 425)
        finish = true
      }
    })

    // if (!finish) {
    window.requestAnimationFrame(render)
    // }
  }

  const myRequest = window.requestAnimationFrame(render)

  document.body.addEventListener('keydown', (event: KeyboardEvent) => {
    actors.forEach((actor) => {
      if (actor.keyboard_event_down && !finish) {
        actor.keyboard_event_down(event)
      }
    })

    levels.keyboard_event_down(event.key)

    if (event.key === 'Enter') {
      level = levels.getLevel()
      console.log(level)

      map = new Map(ctxGame, level)
      fps = new FPSviewer(ctxAux, { x: 12.5, y: 25 + 12 })
      bombs = new Bombs(map, level)
      bombermanOne = new Bomberman(ctxGame, map, { x: 50, y: 50 }, Bomberman_one, 1, bombs)
      bombermanTwo = new Bomberman(ctxGame, map, { x: 1050, y: 650 }, Bomberman_two, 2, bombs)

      actors = [bombermanOne, bombermanTwo]
    }
  })

  document.body.addEventListener('keyup', (event: KeyboardEvent) => {
    actors.forEach((actor) => {
      if (actor.keyboard_event_up && !finish) {
        actor.keyboard_event_up(event.key)
      }
    })
  })
}
