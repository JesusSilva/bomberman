# Bomberman 
>Link al juego: https://jesussilva.github.io/bomberman/
#
![GitHub package.json version (branch)](https://img.shields.io/github/package-json/v/jesussilva/bomberman/main?color=blue&style=for-the-badge)
![npm type definitions](https://img.shields.io/npm/types/typescript?logo=typescript&logoColor=white&style=for-the-badge)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/jesussilva/bomberman?color=blueviolet&label=CODE%20SIZE&logo=github&style=for-the-badge)
![GitHub](https://img.shields.io/github/license/jesussilva/bomberman?logo=linux&logoColor=white&style=for-the-badge)
![GitHub forks](https://img.shields.io/github/forks/jesussilva/bomberman?color=success&logo=github&logoColor=white&style=for-the-badge)

<p align="center">
  <img src="https://i.imgur.com/F4WpIq5.jpg" style="width: 100%">
</p>


## Descripción del proyecto
Bomberman es un juego de estilo arcade-estratégico, donde el principal objetivo de este juego es pasar niveles usando bombas, que explotan unos segundos después de ser puestas, para destruir obstáculos y enemigos, Las explosiones de las bombas también pueden hacer explotar a otras bombas o accionar objetos, matar o herir al personaje del jugador, destruir potenciadores e incluso “enfadar” a la puerta de salida haciendo que esta haga aparecer mas enemigos.

La mayoría de juegos del Bomberman incluyen un modo multijugador, donde varios oponentes luchan entre ellos y donde gana el que consiga sobrevivir. En este modo de juego se puede jugar contra oponentes controlados por la maquina o contra rivales humanos que estarán a tu lado insultando y demás. Este último modo es el mas divertido y hay versiones del juego en los que pueden participar hasta 10 personas jugando al mismo tiempo.
#

## Motivación
La motivación que me lleva a desarrollar este juego, es que fue uno de los juegos arcades a los que mas hora dediqué de pequeño. 

## Niveles
### Nivel 1:

```js
[
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 1],
  [1, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 1],
  [1, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 1],
  [1, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 1],
  [1, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 1],
  [1, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 1],
  [1, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 1],
  [1, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 1],
  [1, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 1],
  [1, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 1],
  [1, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 1],
  [1, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 1],
  [1, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];
```

<p align="center">
  <img src="https://i.imgur.com/DZ1dv9Y.png" style="width: 100%">
</p>

### Nivel 2:
```js
[
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
]
```

<p align="center">
  <img src="https://i.imgur.com/sdryaal.png" style="width: 100%">
</p>


## Instalación
Para descargarnos el juego, instalarlo, deberemos ejecutar los siguientes comandos.

- Clonamos el repositorio
```sh
git clone https://github.com/JesusSilva/bomberman.git
```

- Nos movemos a la carpeta bomberman
```sh
cd bomberman
```

- Instalamos las dependencias
```sh
yarn install
```
#

### Ejecución
- Comando para ejecutar el juego en modo desarrollo
```sh
yarn run dev
```
#

- Comando para ejecutar el juego en modo producción
```sh
yarn run start
```
#

### Building

- Comando para compilar el juego
```sh
yarn run build
```
#

### Limpiar cache
- Comando para eliminar la cache del juego
```sh
yarn run clean
```
#

## Mapa de teclas

| Tecla  | Acción            |
| ------ | ----------------- |
| 1      | Nivel 1           |
| 2      | Nivel 2           |
| Enter  | Seleccionar Nivel |

| Movimiento | Jugador 1 | Jugador 2 |
| ---------- | --------- | --------- |
| Subir      | ⬆        | W         |
| Derecha    | ➡         | D         |
| Bajar      | ⬇        | S         |
| Izquierda  | ⬅        | L         |

#

## Requerimientos mínimos

1. El juego estará desarrollado en [HTML Canvas Graphics Juego](https://www.w3schools.com/html/html5_canvas.asp)
1. Trabajaremos sobre un entorno de [Node.js](https://nodejs.org/es/)
1. Deberemos incluir las `instrucciones` o descripción del objetivo del juego
1. Tomará como modelos los proyectos `Pacman` y `Canvas car` vistos en clase
1. El `50%` de nuestros ficheros, mínimo, estarán en formato `typescript`
1. Está permitido el uso de librerias de utilidades como: `lodash`, `ramda`, `luxon` o `momentjs`
1. El usuario debe poder `interactuar` con el juego mediante la detección de acciones sobre las teclas del teclado
1. El juego debe poseer un indicador de rendimiento en `frames por segundo`
1. Se mantendrá en todo momento un ratio de `60fps/seg`
1. Quedará registrado un evento durante el flujo normal del juego en el momento en que dos o más actores `colisionen`

#

### Sprites a utilizar para la representación del juego:
<p align="center">
  <img src="https://i.imgur.com/nXofEnQ.png" style="width: 100%">
</p>

### License
***GNU GPL***
