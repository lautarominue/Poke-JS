import { npcDetected } from "../function/index.js"
import { printDialogDefault } from "../dialog/index.js"
const interactionNpc = () => {
    const { id } = npcDetected
    fetch(`http://localhost:3040/api/npc/code/${id}`)
        .then((response) => response.json())
        .then((data) => {
            printDialogDefault(data)
        })

}

export { interactionNpc }