import { DaoFactory } from "../../models/factory.js"

const dao = DaoFactory.getObjectDao()

let instaciaObject = null


class Service {

    static getInstance = () => {
        if (!instaciaObject)
            instaciaObject = new Service()
        return instaciaObject
    }

    async getAll() {
        try {
            return await dao.getAll();
        } catch (error) {
            console.error(error);
            return false;
        }
    }

    async getObjectById(id) {
        try {
            const object = await dao.getById(id)
            return object;
        } catch (error) {
            console.error(error);
            return false;
        }
    }

    async getObjectByCategory(category){
        try {
            const object = await dao.getByCategory(category)
            return object;
        } catch (error) {
            console.error(error);
            return false;
        }
    }

    async getObjectByCode(code) {
        try {
            // const object = await dao.getById(code)
            const object = await dao.getByCode(code)
            return object;
        } catch (error) {
            console.error(error);
            return false;
        }
    }

    async createObject(object) {
        try {
            return await dao.create(object)
        } catch (error) {
            console.error(error);
            return false;
        }
    }

    async updateObjectById(id, object) {
        try {
            await dao.updateById(id, object)
            return true;
        } catch (error) {
            console.error(error);
            return false;
        }
    }

    async deleteObjectById(id) {
        try {
            return await dao.deleteById(id)
        } catch (error) {
            console.error(error);
            return false;
        }
    }
}

export { Service as ObjectService }