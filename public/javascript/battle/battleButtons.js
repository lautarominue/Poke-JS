import { btnAtackOne, btnCapture, btnInventario, btnSkip } from "../utils/index.js"
import { atack, capture, inventoryBattle, skipBattle } from "./index.js"

const stopButtons = () => {
    btnAtackOne.removeEventListener('click', atack, true)
    btnCapture.removeEventListener('click', capture, true)
    btnInventario.removeEventListener('click', inventoryBattle, true)
    btnSkip.removeEventListener('click', skipBattle, true)
}

const initButtons = () => {
    btnAtackOne.addEventListener('click', atack, true)
    btnCapture.addEventListener('click', capture, true)
    btnInventario.addEventListener('click', inventoryBattle, true)
    btnSkip.addEventListener('click', skipBattle, true)
}

export { initButtons, stopButtons }
