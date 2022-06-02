import { canvas } from './canvas.js';

const buttons = document.querySelectorAll('.toolbar-btn');

buttons.forEach((btn) => {
  btn.addEventListener('click', () => {
    if (btn.dataset.cursor) {
      canvas.style.cursor = btn.dataset.cursor
    }
  })
});

export {}
