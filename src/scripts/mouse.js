import { canvas } from './canvas.js';

const mouse = {
  x: undefined,
  y: undefined
}

canvas.addEventListener('mousedown', (e) => {
  mouse.x = e.x
  mouse.y = e.y - canvas.offsetTop
})

canvas.addEventListener('mousemove', (e) => {
  if (e.buttons === 1) {
    mouse.x = e.x
    mouse.y = e.y - canvas.offsetTop
  }
})

canvas.addEventListener('mouseup', (e) => {
  mouse.x = e.x
  mouse.y = e.y - canvas.offsetTop
})

export { mouse }