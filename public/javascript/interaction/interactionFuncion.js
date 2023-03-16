import { cureTeam, npcDetected } from "../function/index.js"
import { openPc } from "../function/openPc.js";
import { cureCODE, pcCODE } from "../map/index.js"

const interactionFuncion = () => {
    let key = npcDetected.id
    key = pcCODE
    switch (key) {
        case cureCODE: cureTeam(); break;
        case pcCODE: openPc(); break;
        default: console.error('key no existe'); break;
    }
}

export { interactionFuncion }