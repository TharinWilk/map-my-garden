
const tooltips = document.querySelectorAll('[data-bs-toggle="tooltip"]')

tooltips.forEach(tip => {
  new bootstrap.Tooltip(tip)
})

export {}
