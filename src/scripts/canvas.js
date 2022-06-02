const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
// const mouse = {
//   x: undefined,
//   y: undefined
// }

// canvas attribues
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.background = 'white'

// window resize function
addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
})

function setCanvas() {
  ctx.fillStyle = 'white'
  ctx.fillRect(0, 0, canvas.width, canvas.height)
}

export { setCanvas, ctx, canvas }
