import { DaoFactory } from "../../models/factory.js"

const dao = DaoFactory.getNpcDao()

let instaciaNpc = null


class Service {

    static getInstance = () => {
        if (!instaciaNpc)
            instaciaNpc = new Service()
        return instaciaNpc
    }

    async getAll() {
        try {
            return await dao.getAll();
        } catch (error) {
            console.error(error);
            return false;
        }
    }

    async getNpcById(id) {
        try {
            const object = await dao.getById(id)
            return object;
        } catch (error) {
            console.error(error);
            return false;
        }
    }

    async getNpcByCode(code) {
        try {
            const object = await dao.getByCode(code)
            return object;
        } catch (error) {
            console.error(error);
            return false;
        }
    }

    async createNpc(object) {
        try {
            return await dao.create(object)
        } catch (error) {
            console.error(error);
            return false;
        }
    }

    async updateNpcById(id, object) {
        try {
            await dao.updateById(id, object)
            return true;
        } catch (error) {
            console.error(error);
            return false;
        }
    }

    async deleteNpcById(id) {
        try {
            return await dao.deleteById(id)
        } catch (error) {
            console.error(error);
            return false;
        }
    }
}

export { Service as NpcService }