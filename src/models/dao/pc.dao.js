import { ContenedorMongoDB } from "../container/index.container.js"
import mongoose from "mongoose"
import { ObjectId } from "bson";

const Schema = mongoose.Schema

class DaoMongoDb extends ContenedorMongoDB {

    constructor() {
        super(
            'pc',
            new Schema({
                idUser: {
                    type: ObjectId,
                    required: true
                },
                pokemons: [{
                    name: {
                        type: String,
                        required: true
                    },
                    idPokedex: {
                        type: Number,
                        required: true
                    },
                    types: {
                        one: {
                            type: String,
                            required: true
                        },
                        two: {
                            type: String,
                            required: false
                        }
                    },
                    image: {
                        thumnail: {
                            type: String,
                            required: true
                        },
                        front: {
                            type: String,
                            required: true
                        },
                        back: {
                            type: String,
                            required: true
                        }
                    }
                }]
            })
        )
    }

    async getPcUser(idUser) {
        try {
            let objects = await super.getAll();
            const object = objects.find((n) => String(n.idUser) === String(idUser))
            return object;
        } catch (error) {
            logger.error(error)
            throw Error("Error en el getById")
        }
    }
}

export { DaoMongoDb as PcDaoMongoDB }