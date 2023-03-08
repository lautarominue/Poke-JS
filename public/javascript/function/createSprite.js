import { SpriteBattle } from "../class/index.js"

/**
 * Crea un objeto con
 * @param {object} pokemon 
 * @param {object} position { postion.X and position.Y }
 * @returns 
 */
const createSprite = (sprite,position,size) => {
    const image = new Image()
    image.src = sprite
    const imageBackground = new SpriteBattle({
        image: image,
        size: size,
        position: position
    })
    return imageBackground
}

export { createSprite }


