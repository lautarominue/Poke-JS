import { LOCALHOST, INVENTORYURL, PUT,OBJECTURL } from "../utils/index.js"

const getBag = async () => {
    const URL = LOCALHOST + INVENTORYURL
    let bag = await fetch(URL)
    bag = await bag.json()
    if (!bag.error)
        return bag
    return false
}
const pushBag = async bag => {
    const URL = LOCALHOST + INVENTORYURL
    PUT.body = JSON.stringify(bag)
    let res = await fetch(URL, PUT)
    if (res)
        return true
    return false
}

const pushItem = async item => {
    const URL = LOCALHOST + INVENTORYURL + `add/${item}`
    let bag = {}
    PUT.body = JSON.stringify(bag)
    let res = await fetch(URL, PUT)
    if (res.ok)
        return true
    return false
}

const removeItem = async item => {
    const URL = LOCALHOST + INVENTORYURL + `remove/${item}`
    let res = await fetch(URL, PUT)
    if (res.ok)
        return true
    return false
}

const getObject = async id =>{
    const URL = LOCALHOST + OBJECTURL + id
    let object = await fetch(URL)
    object = await object.json()
    if (!object.error)
        return object
    return false
}

export { getBag, pushBag, pushItem, removeItem,getObject }