import { rectangularCollision, changeNpcDetected } from "../function/index.js"
import { player } from "../player/index.js"
import { keys, lastKey } from "../keys/keys.js"
import { changeAnimation } from "./changeAnimation.js"
import { createBackground, createBoundaries, createMovables, createForeground, offset } from "../map/index.js"
import { collisionCenter } from "../coordinates/index.js"
import { interactionAdmin } from "../interaction/index.js"
import { stateInteraction } from "../interaction/stateInteraction.js"
import { removeInteraction } from "../interaction/removeInteraction.js"
import { DOOR, NPC, WALL } from "../map/index.js"
import { c } from "../canvas/canvas.js"
// Ubicacion de Mapas
const center = 'pokemonCenter/center'
const centerForeground = 'pokemonCenter/centerForeground'
const boundaryX = 30
const boundaryY = 30
const position = { x: -700, y: 600 }
const chatWelcome = 'Aqui podras curar tus pokemones. Recuerda presiona "E" para comezar el dialogo y "SPACE" para interactuar.'
const timeout = 5000

let visit = true
let foregroundCenter = createForeground(centerForeground)
let backgroundCenter = createBackground(center)
let boundariesTow = createBoundaries(collisionCenter, boundaryX, boundaryY)
let movables = createMovables(backgroundCenter, boundariesTow, foregroundCenter)

// Acomodar la posicion en la que aparece
movables.forEach((movable) => {
    movable.position.y += position.x
    movable.position.x += position.y
})



let animate = () => {
    const animationId = window.requestAnimationFrame(animate)
    backgroundCenter.draw()
    player.draw()

    if (!visit) {
        visit = true
        interactionAdmin(chatWelcome)
        setTimeout(() => {
            removeInteraction()
        }, timeout);
    }

    // foregroundCenter.draw()
    //dibujar el perimetro

    // boundariesTow.forEach((boundary) => {
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
        for (let i = 0; i < boundariesTow.length; i++) {
            const boundary = boundariesTow[i]
            if (rectangularCollision({
                rectangle1: player,
                rectangle2: {
                    ...boundary, position: {
                        x: boundary.position.x,
                        y: boundary.position.y + 3
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
                movable.position.y += 3
            })
        stateInteraction ? removeInteraction() : ''
    }
    else if (keys.a.pressed && lastKey == 'a') {
        player.moving = true
        player.image = player.sprites.left
        for (let i = 0; i < boundariesTow.length; i++) {
            const boundary = boundariesTow[i]
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
        for (let i = 0; i < boundariesTow.length; i++) {
            const boundary = boundariesTow[i]
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
        for (let i = 0; i < boundariesTow.length; i++) {
            const boundary = boundariesTow[i]
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
export { animate as animateCenter }
