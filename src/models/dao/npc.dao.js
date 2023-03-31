import { ContenedorMongoDB } from "../container/index.container.js"
import mongoose from "mongoose"

const Schema = mongoose.Schema

class DaoMongoDb extends ContenedorMongoDB {
    ID_USER = 'idUser';

    constructor() {
        super(
            'npcPokemon',
            new Schema({
                name: {
                    type: String,
                    required: true,
                    max: 20
                },
                description: {
                    type: String,
                    required: true,
                    max: 200
                },
                code: {
                    type: Number,
                    required: true,
                    max: 1000
                },
                faceset: {
                    type: String,
                    required: true,
                    max: 130
                },
                chat: {
                    type: String,
                    required: true,
                    max: 500
                }
            })
        )
    }

    // async getByCode(idUser) {
    //     try {
    //         let npc = await super().coleccion.findOne({ [this.ID_USER]: idUser })
    //         return npc
    //     } catch (error) {
    //         logger.error(error)
    //         throw Error("Error en el getById")
    //     }
    // }
}

export { DaoMongoDb as NpcDaoMongoDB}