import { BagClass } from "../class/index.js"
import { createBag,getBag } from "./index.js"

let bagObject = {}

const initBag = async () =>{
    let bag = await getBag()
    !bag ? await createBag() : ''
    bag = await getBag()
    let gold = bag.gold
    let items = []
    bag.bag.forEach(object => {
        items.push(object._id)  
    })
    if(bag)
        bagObject = new BagClass({gold,items})    
}



export {initBag,bagObject}