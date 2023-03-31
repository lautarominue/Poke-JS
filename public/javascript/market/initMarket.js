import { removeInteraction } from '../interaction/removeInteraction.js'
import { market, displayFLEX, itemContainer, VOIDTEXT, OBJECTURL, LOCALHOST, marketTotal, displayNONE } from '../utils/index.js'
import { bagObject } from '../invertory/index.js'
import PrintObjectSell from './printObjectSell.js'
import initButtonsMarket from './marketButtons.js'

let itemsMarket = null
let positionItemMarket = 0
const changePositionMarket = postion => positionItemMarket = postion
let MAX = 0

const actBag = async () =>{
    let bag = await bagObject.getItems()
    itemContainer.innerHTML = VOIDTEXT
    bag.forEach(item => {
        let htmlItemBag = ` <div class="market__left__container__items" id="${item._id}">
                                <img src="../img/asset/items/${item.image.thumnail}">
                                <div >${item.name}</div>
                                <span>x${item.cant}</span>
                            </div>`
        itemContainer.innerHTML += htmlItemBag
    })
}
const actGoldMarket = () =>{
    let gold = bagObject.getGold()
    marketTotal.innerHTML = `$${gold}`
}

const initMarket = async () => {
    const URL = LOCALHOST + OBJECTURL
    let objects = await fetch(URL)
    objects = await objects.json()
    itemsMarket = objects
}

const openMarket = async () => {
    removeInteraction()
    await initMarket()
    market.style.display = displayFLEX
    await actBag()
    actGoldMarket()
    PrintObjectSell(itemsMarket[positionItemMarket])
    initButtonsMarket(true)
    MAX = itemsMarket.length - 1
}

const closeMarket = () =>{
    market.style.display = displayNONE
}



export { openMarket, itemsMarket, positionItemMarket, changePositionMarket, MAX, actBag, closeMarket }