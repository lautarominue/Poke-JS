import { bagObject } from "../invertory/index.js"
import { marketTotal } from "../utils/index.js"
import { actBag, itemsMarket, positionItemMarket } from "./initMarket.js"

const buyItem = async () => {
    let gold = await bagObject.consumeGold(itemsMarket[positionItemMarket].price)
    if (gold) {
        let res = await bagObject.addItem(itemsMarket[positionItemMarket]._id)
        actBag()
        marketTotal.textContent = '$' + gold
    }else{
        console.log('oro Insuficiente')
    }
}

export { buyItem }