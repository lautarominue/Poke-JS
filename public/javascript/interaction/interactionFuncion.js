import { cureTeam, npcDetected } from "../function/index.js"
import { openPc } from "../function/openPc.js";
import { cureCODE, marketCODE, pcCODE } from "../map/index.js"
import { openMarket } from "../market/initMarket.js";

const interactionFuncion = () => {
    let key = npcDetected.id
    switch (key) {
        case cureCODE: cureTeam(); break;
        case pcCODE: openPc(); break;
        case marketCODE: openMarket(); break;
        default: console.error('key no existe'); break;
    }
}

export { interactionFuncion }