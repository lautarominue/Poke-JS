import { POST,INVENTORYURL, LOCALHOST } from "../utils/index.js"

const createBag = async () => {
    let bag = {
        gold: 0,
        items:[]
    }
    const URL = LOCALHOST + INVENTORYURL
    POST.body = JSON.stringify(bag)
    let inventory = await fetch(URL, POST)
    inventory = await inventory.json()
    return inventory.ok
}

export {createBag}