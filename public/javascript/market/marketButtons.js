import { marketBack, marketNext, marketNo, marketYes } from "../utils/index.js"
import { buyItem } from "./buyItem.js"
import { changePositionMarket, closeMarket, itemsMarket, MAX, positionItemMarket } from "./initMarket.js"
import PrintObjectSell from "./printObjectSell.js"


/**
 * True para iniciar Botones
 * False para detener Botones
 * @param {Boolean} state 
 */
const initButtonsMarket = state => {
    if (state) {
        marketBack.addEventListener('click', back, true)
        marketNext.addEventListener('click', next, true)
        marketYes.addEventListener('click', buyItem, true)
        marketNo.addEventListener('click', close, true)
    } else {
        marketBack.removeEventListener('click', back, true)
        marketNext.removeEventListener('click', next, true)
        marketYes.removeEventListener('click', buyItem, true)
        marketNo.removeEventListener('click', close, true)
    }
}

const back = () => {
    let number = positionItemMarket - 1
    if (number >= 0) {
        PrintObjectSell(itemsMarket[number])
        changePositionMarket(number)
    }
}

const next = () => {
    let number = positionItemMarket + 1
    if (number <= MAX) {
        PrintObjectSell(itemsMarket[number])
        changePositionMarket(number)
    }
}

const close = () => {
    closeMarket()
    initButtonsMarket(false)
}


export default initButtonsMarket