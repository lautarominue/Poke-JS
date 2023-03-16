import { ContenedorMongoDB } from "../container/index.container.js"
import mongoose from "mongoose"

const Schema = mongoose.Schema

class DaoMongoDb extends ContenedorMongoDB {

    constructor() {
        super(
            'objects',
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
                image: {
                    thumnail: {
                        type: String,
                        required: false
                    },
                    sprite: {
                        type: String,
                        required: false
                    }
                },
                category: {
                    name: {
                        type: String,
                        required: true
                    },
                    stats: {
                        required: false
                    }
                }
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

    async getByCategory(category) {
        try {
            let objects = await super.getAll();
            const object = objects.filter((n) => n.category.name === category)
            return object
        }
        catch (error) {
            loggerError.error(error)
            throw Error("Error en getByCategory");
        }
    }

}

export { DaoMongoDb as ObjectDaoMongoDB }