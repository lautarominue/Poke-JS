import { DaoFactory } from "../../models/factory.js"

const daoInventory = DaoFactory.getPcDao()
const daoUser = DaoFactory.getUserDao()

let instaciaPc = null


class Service {

    static getInstance = () => {
        if (!instaciaPc)
            instaciaPc = new Service()
        return instaciaPc
    }

    async getInventory(idUser) {
        try {
            let pc = await daoInventory.getPcUser(idUser)
            if (pc) {
                return { estado: "ok", pc: pc }
            } else {
                return { estado: "pcFalse" }
            }
        }
        catch (error) {
            console.error(error)
            throw Error("Error en getByUsername");
        }
    }

    async updateObjectById(id, object) {
        try {
            await daoInventory.updateById(id, object)
            return true;
        } catch (error) {
            console.error(error);
            return false;
        }
    }

    async createPc(object) {
        try {
            return await daoInventory.create(object)
        } catch (error) {
            console.error(error);
            return false;
        }
    }
}

export { Service as PcService }