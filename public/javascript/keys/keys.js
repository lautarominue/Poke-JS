import { printDialogDefault } from "../dialog/index.js";
import { changeNpcDetected, npcDetected,cureTeam } from "../function/index.js";
import { interactionNpc } from "../interaction/index.js";
import { changeStateInteraction, stateInteraction } from "../interaction/stateInteraction.js";
import { closeInventory, openInventory, stateOpenInventory } from "../invertory/index.js"

let stateDialogNpc = false
let lastKey = ''


// Teclas a utilizar
const keys = {
    w: {
        pressed: false
    },
    s: {
        pressed: false
    },
    a: {
        pressed: false
    },
    d: {
        pressed: false
    },
    e: {
        pressed: false
    },
    space: {
        pressed: false
    }
}


window.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'w': keys.w.pressed = true; lastKey = 'w'; break
        case 's': keys.s.pressed = true; lastKey = 's'; break
        case 'a': keys.a.pressed = true; lastKey = 'a'; break
        case 'd': keys.d.pressed = true; lastKey = 'd'; break
        case 'e': keys.e.pressed = true; lastKey = 'e'; break
        // case 'i': keys.i.pressed = true; lastKey = 'i'; break
    }
})
window.addEventListener('keyup', (e) => {
    switch (e.key) {
        case 'w': keys.w.pressed = false; break
        case 's': keys.s.pressed = false; break
        case 'a': keys.a.pressed = false; break
        case 'd': keys.d.pressed = false; break
        case 'e': initE(); break;
        case ' ': initSpace(); break;
        case 'i': activeInventory(); break
    }
})
const activeInventory = () => {
    if (stateOpenInventory) {
        closeInventory()
    } else {
        openInventory()
    }
}

const initE = () => {
    if (npcDetected.state) {
        stateDialogNpc = true
        interactionNpc()
    }
}

const initSpace = () => {
    if (stateDialogNpc) {
        npcDetected.id == 392 ? cureTeam() : ''
    }
}


export { keys, lastKey }