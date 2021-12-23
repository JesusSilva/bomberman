# Bomberman 
>Link al juego: https://jesussilva.github.io/bomberman/
#

![GitHub package.json version (branch)](https://img.shields.io/github/package-json/v/jesussilva/bomberman/main?color=blue&style=for-the-badge)
![npm type definitions](https://img.shields.io/npm/types/typescript?logo=typescript&logoColor=white&style=for-the-badge)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/jesussilva/bomberman?color=blueviolet&label=CODE%20SIZE&logo=github&style=for-the-badge)
![GitHub](https://img.shields.io/github/license/jesussilva/bomberman?logo=linux&logoColor=white&style=for-the-badge)
![GitHub forks](https://img.shields.io/github/forks/jesussilva/bomberman?color=success&logo=github&logoColor=white&style=for-the-badge)

### Issues
![GitHub issues](https://img.shields.io/github/issues/jesussilva/bomberman?logo=github&style=for-the-badge)
![GitHub issues by-label](https://img.shields.io/github/issues/jesussilva/bomberman/report?color=DE874C&logo=github&style=for-the-badge)
![GitHub issues by-label](https://img.shields.io/github/issues/jesussilva/bomberman/epic?color=FB6942&logo=github&style=for-the-badge)
![GitHub issues by-label](https://img.shields.io/github/issues/jesussilva/bomberman/zero-energy?color=B1BF22&logo=github&style=for-the-badge)
![GitHub issues by-label](https://img.shields.io/github/issues/jesussilva/bomberman/low-energy?color=FB6942&logo=github&style=for-the-badge)
![GitHub issues by-label](https://img.shields.io/github/issues/jesussilva/bomberman/middle-energy?color=135DE3&logo=github&style=for-the-badge)
![GitHub issues by-label](https://img.shields.io/github/issues/jesussilva/bomberman/high-energy?color=A932F7&logo=github&style=for-the-badge)
![GitHub issues by-label](https://img.shields.io/github/issues/jesussilva/bomberman/bug?color=d73a4a&logo=github&style=for-the-badge)
![GitHub issues by-label](https://img.shields.io/github/issues/jesussilva/bomberman/help-wanted?color=008672&logo=github&style=for-the-badge)
![GitHub issues by-label](https://img.shields.io/github/issues/jesussilva/bomberman/question?color=d876e3&logo=github&style=for-the-badge)
![GitHub closed issues](https://img.shields.io/github/issues-closed/jesussilva/bomberman?color=yellow&logo=github&style=for-the-badge)
#

<p align="center">
  <img src="https://i.imgur.com/pzgW3ht.png" style="width: 100%">
</p>


### Descripción del proyecto
Bomberman es un juego de estilo arcade-estratégico, donde el principal objetivo de este juego es pasar niveles usando bombas, que explotan unos segundos después de ser puestas, para destruir obstáculos y enemigos, Las explosiones de las bombas también pueden hacer explotar a otras bombas o accionar objetos, matar o herir al personaje del jugador, destruir potenciadores e incluso “enfadar” a la puerta de salida haciendo que esta haga aparecer mas enemigos.

La mayoría de juegos del Bomberman incluyen un modo multijugador, donde varios oponentes luchan entre ellos y donde gana el que consiga sobrevivir. En este modo de juego se puede jugar contra oponentes controlados por la maquina o contra rivales humanos que estarán a tu lado insultando y demás. Este último modo es el mas divertido y hay versiones del juego en los que pueden participar hasta 10 personas jugando al mismo tiempo.
#

### Motivación
La motivación que me lleva a desarrollar este juego, es que fue uno de los juegos arcades a los que mas hora dediqué de pequeño. 

### Niveles
#### Nivel 1:

```js
const map = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];
```
![Imgur](https://i.imgur.com/mfpXof9.png)


### Instalación y Ejecución
Para descargarnos el juego, instalarlo y ejecutarlo, deberemos ejecutar los siguientes comandos.

```sh
git clone https://github.com/JesusSilva/bomberman.git
cd bomberman
yarn install
yarn run dev
```
#

### Librerias

| Plugin | Link | Uso |
| ------ | ------ | ------ |
| Lodash | https://www.npmjs.com/package/lodash | Facilitar operaciones con arrays u objetos                       |
| Rxjs   | https://www.npmjs.com/package/rxjs   | Usar observables para evitar la ejecución constante de funciones |
#

### Development
Comando para ejecutar el juego:

```sh
yarn run dev
```
#

### Building

Comando para compilar el juego:

```sh
yarn run build
```
#

### Requerimientos
- El juego estará desarrollado en `HTML Canvas Graphics Juego`
- Trabajaremos sobre un entorno de `Node.js` 
- Deberemos incluir las instrucciones o descripción del objetivo del juego
- El 50% de nuestros ficheros, mínimo, estarán en formato `Typescript` 
- Está permitido el uso de librerias de utilidades como: lodash, ramda, luxon o momentjs
- El usuario debe poder interactuar con el juego mediante la detección de acciones sobre las teclas del teclado
- El juego debe poseer un indicador de rendimiento en frames por segundo
- Se mantendrá en todo momento un ratio de `60fps/seg`
- Quedará registrado un evento durante el flujo normal del juego en el momento en que dos o más actores colisionen
- Entregar el juego en github pages `<usuario>.github.io/<repositorio>`
- Desplegar el juego en github pages compilandolo con `parcel`

#
### Sprites a utilizar para la representación del juego:
![Imgur](https://i.imgur.com/nXofEnQ.png)

### License
***GNU GPL***
