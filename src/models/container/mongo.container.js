import mongoose from "mongoose";
import { logger } from '../../utils/log/log4jsLogger.js';
// import dotenv from "dotenv";

// dotenv.config();

// mongoose.connect(process.env.MONGO_URI, (err) => {
//     err
//         ? logger.error("⛔ Error al conectarse a MongoDB")
//         : logger.info("🆗 Conectados a MongoDB")
// })



class ContenedorMongoDB {
    USERNAME_FIELD = 'username';
    CODE = 'code'

    constructor(name, esquema) {
        this.coleccion = mongoose.model(name, esquema);
    }

    async getAll() {
        try {
            let docs = await this.coleccion.find({});
            return docs;
        } catch (error) {
            logger.error(error);
            throw Error("Error en el getAll");
        }
    }

    async getById(num) {
        try {
            let docs = false;
            docs = await this.coleccion.findOne({ _id: num });
            return docs;
        } catch (error) {
            logger.error(error);
            throw Error("Error en el getById");
        }
    }

    async create(nuevoElem) {
        try {
            let doc = await this.coleccion.create(nuevoElem);
            return doc;
        } catch (error) {
            logger.error(error);
            throw Error("Error en el save");
        }
    }

    async deleteById(num) {
        try {
            const item = await this.coleccion.findOneAndDelete({ _id: num });
            if (item) {
                return item;
            } else {
                return { err: "Error en item, id no encontrado" };
            }
        } catch (error) {
            logger.error(error);
            throw Error("Error en el deleteById");
        }
    }

    async deleteAll() {
        try {
            await this.coleccion.deleteMany({});
            return { msg: "Todos los productos borrados" };
        } catch (error) {
            logger.error(error);
            throw Error("Error en el deleteAll()");
        }
    }

    async updateById(id, object) {
        try {
            const actualizada = await this.coleccion.findOneAndUpdate(
                {
                    ["_id"]: id
                },
                object,
                {
                    runValidators: true
                })
            return actualizada
        } catch (error) {
            logger.error(error);
            throw Error("Error en el update");
        }
    }

    async loginUser(object) {
        try {
            const user = await this.coleccion.findOne({
                [this.USERNAME_FIELD]: object.username
            });
            if (!user) {
                this.logger.info(`User '${object.username}' does not exist`)
                return null;
            }

            return await user.comparePassword(object.password);

        } catch (error) {
            this.logger.error(error);
            return null;
        }
    }

    async getByCode(code) {
        try {
            let npc = await this.coleccion.findOne({ [this.CODE]: code })
            return npc
        } catch (error) {
            logger.error(error)
            throw Error("Error en el getById")
        }
    }
}

export { ContenedorMongoDB }