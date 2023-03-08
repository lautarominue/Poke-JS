import { Sprite } from "../class/index.js"

const battleBackgroundImage = new Image()
battleBackgroundImage.src = './img/battle/battleBackground.png'

const battleBackground = new Sprite({
    position: {
        x: 0,
        y: 0
    },
    image: battleBackgroundImage
})

export { battleBackground }
