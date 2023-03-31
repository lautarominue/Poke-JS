import { getBag, pushBag, pushItem, removeItem, getObject } from "../invertory/index.js"

class BagClass {
    constructor({ gold, items }) {
        this.gold = gold
        this.items = items
    }

    getItems = () => this.items

    getGold = () => this.gold

    getBag = async () => await getBag()

    pushBag = async bag => await pushBag(bag)

    addItem = async item => {
        let res = await pushItem(item)
        if (res) {
            this.items.push(item)
            return this.items
        }
        return false
    }

    consumeItem = async item => {
        let res = await removeItem(item)
        if (res) {
            let filterOne = this.items.filter(it => it === item)
            let filterTwo = this.items.filter(it => it !== item)
            filterOne.pop()
            filterOne.forEach(element => filterTwo.push(element));
            this.items = filterTwo
            return this.items
        }
        return false
    }

    consumeGold = async consume => {
        let newGold = this.gold - parseInt(consume)
        if (newGold >= 0) {
            let res = await this.changeGold(newGold)
            if (res) {
                this.gold = newGold
                return this.gold
            }
            return false
        } else {
            return false
        }
    }

    winGold = async win => {
        let newGold = this.gold + parseInt(win)
        let res = await this.changeGold(newGold)
        if (res) {
            this.gold = newGold
            return this.gold
        }
        return false
    }

    changeGold = async gold => {
        let bag = await this.getBag()
        bag.gold = gold
        let res = await this.pushBag(bag)
        if (res)
            return true
        return false
    }

    getItems = async () => {
        const items = this.items.reduce((prev, cur) => ((prev[cur] = prev[cur] + 1 || 1), prev), {})
        let res = []
        for (let key in items) {
            let object = await getObject(key)
            object.cant = items[key]
            res.push(object)
        }
        return res
    }

    pokeball = async () => {
        let idPokeBall = '642371e209cdd2b6ce2e6729'
        let idMasterBall = '6423642209cdd2b6ce2e6426'
        let ball = []
        this.items.forEach((item, index) => {
            idMasterBall == item ? ball.push(index) : ''
            idPokeBall == item ? ball.push(index) : ''
        })
        if (ball.length) {
            let indiceDelete = ball[0]
            removeItem(this.items[indiceDelete])
            this.items.splice(indiceDelete, 1)
            return true
        } else {
            return false
        }
    }

    cantPokeball() {
        let idPokeBall = '642371e209cdd2b6ce2e6729'
        let ball = this.items.filter(item => item == idPokeBall)
        return ball.length
    }
    cantMasterball(){
        let idMasterBall = '6423642209cdd2b6ce2e6426'
        let ball = this.items.filter(item => item == idMasterBall)
        return ball.length
    }

}

export { BagClass }