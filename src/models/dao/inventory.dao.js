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

    async getByCode(code) {
        try {
            let objects = await super.getAll();
            const object = objects.filter((n) => n.code === code)
            return object;
        }
        catch (error) {
            loggerError.error(error)
            throw Error("Error en getByCategory");
        }
    }
    // async getInventoryUser(idUser) {
    //     try {
    //         let user = await super().coleccion.findOne({ [this.ID_USER]: idUser })
    //         return user
    //     } catch (error) {
    //         logger.error(error)
    //         throw Error("Error en el getById")
    //     }
    // }
    // async getInventoryUser(idUser) {
    //     try {
    //         let objects = await super.getAll();
    //         console.log("desde DAO",objects)
    //         const object = objects.filter((n) => n.idUser === idUser)
    //         return object;
    //     } catch (error) {
    //         logger.error(error)
    //         throw Error("Error en el getById")
    //     }
    // }
}

export { DaoMongoDb as InventoryDaoMongoDB }