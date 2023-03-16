import { DaoFactory } from "../../models/factory.js"

const dao = DaoFactory.getInventoryDao()

let instaciaInventory = null


class Service {

    static getInstance = () => {
        if (!instaciaInventory)
            instaciaInventory = new Service()
        return instaciaInventory
    }

    async getInventoryUser(idUser) {
        try {
            const inventory = await dao.getInventoryUser(idUser)
            if (inventory) {
                return { state: "ok", inventory: inventory }
            } else {
                return { state: "inventoryFalse" }
            }
        } catch (error) {
            console.error(error);
            return false;
        }
    }

    async createInventory(object) {
        try {
            return await dao.create(object)
        } catch (error) {
            console.error(error);
            return false;
        }
    }

    /**
     * Body recibe solo un objeto el cual debe ser agregado al arrary de objetos del invtory
     * @param {object} body 
     * @param {ObjectId} idUser 
     * @returns { state, bag }
     */
    async updateBag(item, idUser) {
        try {
            const inventory = await dao.getInventoryUser(idUser)

            if (inventory) {
                inventory.bag.push(item)
                let id = inventory._id
                const bag = await dao.update(id, inventory)
                if (bag)
                    return { state: "ok", bag: bag }
                else
                    return { state: "bagFalse" }
            } else {
                return { state: "inventoryFalse" }
            }

        } catch (error) {
            console.error(error);
            return false;
        }
    }

    async updateBagRemove(item, idUser) {
        try {
            const inventory = await dao.getInventoryUser(idUser)

            if (inventory) {
                const isLargeNumber = (element) => element > item
                let indexItem = inventory.bag.findIndex(isLargeNumber)
                inventory.bag.splice(indexItem, 1)
                let id = inventory._id
                const bag = await dao.update(id, inventory)
                if (bag)
                    return { state: "ok", bag: bag }
                else
                    return { state: "bagFalse" }
            } else {
                return { state: "inventoryFalse" }
            }

        } catch (error) {
            console.error(error);
            return false;
        }
    }

}

export { Service as InventoryService }