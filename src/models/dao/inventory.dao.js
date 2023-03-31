import { ContenedorMongoDB } from "../container/index.container.js"
import mongoose from "mongoose"
import { ObjectId } from "bson";

const Schema = mongoose.Schema

class DaoMongoDb extends ContenedorMongoDB {
    ID_USER = 'idUser';

    constructor() {
        super(
            'inventory',
            new Schema({
                idUser: {
                    type: ObjectId,
                    required: true
                },
                gold: {
                    type: Number
                },
                bag: [
                    {
                        idObjct: { type: ObjectId }
                    }]
            })
        )
    }

    async getInventoryUser(idUser) {
        try {
            let inventorys = await super.getAll();
            const inventory = inventorys.find((n) => String(n.idUser) === String(idUser))
            return inventory
        } catch (error) {
            logger.error(error)
            throw Error("Error en el getById")
        }
    }

    async updateBag(idUser, bag) {
        try {
            let inventorys = await super.getAll();
            const inventory = inventorys.find((n) => String(n.idUser) === String(idUser))
            let id = inventory._id
            let update = await super.updateById(id, bag);
            return update
        } catch (error) {
            logger.error(error)
            throw Error('Error en el getById')
        }
    }
}

export { DaoMongoDb as InventoryDaoMongoDB }