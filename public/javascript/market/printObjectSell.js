import {marketItemSell, marketPriceItem, VOIDTEXT} from "../utils/index.js"

const PrintObjectSell = item =>{
    marketItemSell.innerHTML = VOIDTEXT
    let htmlItemSell = `<img src="../img/asset/items/${item.image.thumnail}">
                        <span >${item.name}</span>`
    marketItemSell.innerHTML += htmlItemSell
    marketPriceItem.innerHTML = `$${item.price}`
}

export default PrintObjectSell