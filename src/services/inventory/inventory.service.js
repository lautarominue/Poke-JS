import { DaoFactory } from "../../models/factory.js"

const dao = DaoFactory.getInventoryDao()

let instaciaInventory = null


class Service {

    static getInstance = () => {
        if (!instaciaInventory)
            instaciaInventory = new Service()
        return instaciaInventory
    }

    async getAll() {
        try {
            return await dao.getAll();
        } catch (error) {
            console.error(error);
            return false;
        }
    }

    async getInventoryById(id) {
        try {
            const object = await dao.getById(id)
            return object;
        } catch (error) {
            console.error(error);
            return false;
        }
    }

    async getInventoryByCode(code) {
        try {
            // const object = await dao.getById(code)
            const object = await dao.getByCode(code)
            return object;
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

    async updateInventoryById(id, object) {
        try {
            await dao.updateById(id, object)
            return true;
        } catch (error) {
            console.error(error);
            return false;
        }
    }

    async deleteInventoryById(id) {
        try {
            return await dao.deleteById(id)
        } catch (error) {
            console.error(error);
            return false;
        }
    }
}

export { Service as InventoryService }