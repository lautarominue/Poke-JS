//Incio canvas
const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')
const resolution = { width: 1280, height: 720 }

canvas.width = resolution.width
canvas.height = resolution.height

export {c, canvas}
