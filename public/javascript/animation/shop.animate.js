import { rectangularCollision, changeNpcDetected } from "../function/index.js"
import { player } from "../player/index.js"
import { keys, lastKey } from "../keys/keys.js"
import { changeAnimation } from "./changeAnimation.js"
import { createBackground, createBoundaries, createMovables, createForeground, offset } from "../map/index.js"
import { collisionShop } from "../coordinates/index.js"
import { stateInteraction } from "../interaction/stateInteraction.js"
import { removeInteraction } from "../interaction/removeInteraction.js"
import { BATTLEZONE, DOOR, NPC, OBJECT, WALL } from "../map/index.js"
// Ubicacion de Mapas
const shop = 'pokemonShop/shop'
const shopForeground = 'pokemonShop/shopForeground'
const boundaryX = 30
const boundaryY = 30
const position = { x: 600, y: -820 }

let backgroundShop = createBackground(shop)
let foregroundShop = createForeground(shopForeground)
let boundaries = createBoundaries(collisionShop, boundaryX, boundaryY)
let movables = createMovables(backgroundShop, boundaries, foregroundShop)

// Acomodar la posicion en la que aparece
movables.forEach((movable) => {
    movable.position.y += position.y
    movable.position.x += position.x
})

let animate = () => {
    const animationId = window.requestAnimationFrame(animate)
    backgroundShop.draw()
    player.draw()
    // foregroundCenter.draw()
    //dibujar el perimetro

    // boundaries.forEach((boundary) => {
    //     boundary.draw()
    //     if (rectangularCollision({
    //         rectangle1: player,
    //         rectangle2: boundary
    //     })) {
    //         console.log("CollisionBoundary")
    //     }
    // })

    let moving = true
    player.moving = false
    if (keys.w.pressed && lastKey == 'w') {
        player.moving = true
        player.image = player.sprites.up
        for (let i = 0; i < boundaries.length; i++) {
            const boundary = boundaries[i]
            if (rectangularCollision({
                rectangle1: player,
                rectangle2: {
                    ...boundary, position: {
                        x: boundary.position.x,
                        y: boundary.position.y + 3
                    }
                }
            })) {
                if (boundary.symbol > DOOR.start && boundary.symbol <= DOOR.final) {
                    window.cancelAnimationFrame(animationId)
                    changeAnimation(boundary.symbol)
                }
                if (boundary.symbol > NPC.start && boundary.symbol <= NPC.final) {
                    changeNpcDetected(true, boundary.symbol)
                }
                moving = false
                break
            }
        }
        if (moving)
            movables.forEach((movable) => {
                movable.position.y += 3
            })
        stateInteraction ? removeInteraction() : ''
    }
    else if (keys.a.pressed && lastKey == 'a') {
        player.moving = true
        player.image = player.sprites.left
        for (let i = 0; i < boundaries.length; i++) {
            const boundary = boundaries[i]
            if (rectangularCollision({
                rectangle1: player,
                rectangle2: {
                    ...boundary, position: {
                        x: boundary.position.x + 3,
                        y: boundary.position.y
                    }
                }
            })) {
                // console.log(boundary.symbol)
                if (boundary.symbol > DOOR.start && boundary.symbol <= DOOR.final) {
                    window.cancelAnimationFrame(animationId)
                    changeAnimation(boundary.symbol)
                }
                if (boundary.symbol > NPC.start && boundary.symbol <= NPC.final) {
                    changeNpcDetected(true, boundary.symbol)
                }
                moving = false
                break
            }
        }
        if (moving)
            movables.forEach((movable) => {
                movable.position.x += 3
            })
        stateInteraction ? removeInteraction() : ''
    }
    else if (keys.s.pressed && lastKey == 's') {
        player.moving = true
        player.image = player.sprites.down
        for (let i = 0; i < boundaries.length; i++) {
            const boundary = boundaries[i]
            if (rectangularCollision({
                rectangle1: player,
                rectangle2: {
                    ...boundary, position: {
                        x: boundary.position.x,
                        y: boundary.position.y - 3
                    }
                }
            })) {
                // console.log(boundary.symbol)
                if (boundary.symbol > DOOR.start && boundary.symbol <= DOOR.final) {
                    window.cancelAnimationFrame(animationId)
                    changeAnimation(boundary.symbol)
                }
                if (boundary.symbol > NPC.start && boundary.symbol <= NPC.final) {
                    changeNpcDetected(true, boundary.symbol)
                }
                moving = false
                break
            }
        }
        if (moving)
            movables.forEach((movable) => {
                movable.position.y -= 3
            })
        stateInteraction ? removeInteraction() : ''
    }
    else if (keys.d.pressed && lastKey == 'd') {
        player.moving = true
        player.image = player.sprites.rigth
        for (let i = 0; i < boundaries.length; i++) {
            const boundary = boundaries[i]
            if (rectangularCollision({
                rectangle1: player,
                rectangle2: {
                    ...boundary, position: {
                        x: boundary.position.x - 3,
                        y: boundary.position.y
                    }
                }
            })) {
                // console.log(boundary.symbol)
                if (boundary.symbol > DOOR.start && boundary.symbol <= DOOR.final) {
                    window.cancelAnimationFrame(animationId)
                    changeAnimation(boundary.symbol)
                }
                if (boundary.symbol > NPC.start && boundary.symbol <= NPC.final) {
                    changeNpcDetected(true, boundary.symbol)
                }
                moving = false
                break
            }
        }
        if (moving)
            movables.forEach((movable) => {
                movable.position.x -= 3
            })
        stateInteraction ? removeInteraction() : ''
    }


}
export { animate as animateShop }
