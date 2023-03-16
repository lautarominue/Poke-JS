import { printDialogDefault } from "../dialog/index.js";
import { changeNpcDetected, npcDetected } from "../function/index.js";
import { interactionFuncion, interactionNpc } from "../interaction/index.js";
import { changeStateInteraction, stateInteraction } from "../interaction/stateInteraction.js";
import { closeInventory, openInventory, stateOpenInventory } from "../invertory/index.js"
import { pcCODE } from "../map/index.js";
import { urlFaceset } from "../utils/index.js";

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
        if (npcDetected.id !== pcCODE) {
            interactionNpc()
        } else {
            let faceset = 'facesetPc.png'
            let chat = 'Presiona "Space" para acceder a todos tus Pokemones'
            printDialogDefault({ faceset, chat })
        }
    }
}

const initSpace = () => {
    if (stateDialogNpc) {
        interactionFuncion()
    }
}


export { keys, lastKey }