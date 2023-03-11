import mongoose from 'mongoose'
import { asDtoPc } from '../../dtos/index.dtos.js'
import dotenv from "dotenv";
import { logger } from '../../utils/log/log4jsLogger.js';

dotenv.config();

const Schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        max: 20
    },
    type: {
        type: Object,
        required: true
    },
    idPokedex: {
        type: Number,
        required: true,
        max: 1000
    },
    image: {
        type: object,
        required: true
    }
})
const modelMoongoose = mongoose.model('pc', Schema)

class DaoMongo {

    ID = "_id";

    async getAll() {
        try {
            const objects = await modelMoongoose.find({})
            return asDtoObject(objects)
        } catch (error) {
            logger.error(error);
            return false;
        }
    }

    async getById(code) {
        try {
            const object = await modelMoongoose.findOne({
                [this.CODE]: code
            })
            return asDtoObject(object)
        } catch (error) {
            logger.error(error);
            return false;
        }
    }

    async create(object) {
        try {
            await modelMoongoose.create(object)
            return asDtoObject(object)
        } catch (error) {
            logger.error(error);
            return false;
        }
    }

    async deleteById(id) {
        try {
            const borrada = await modelMoongoose.findOneAndDelete({ [this.CODE]: id })
            return asDtoObject(borrada)
        } catch (error) {
            logger.error(error);
            return false;
        }
    }


    async updateById(id, object) {

        try {
            const actualizada = await this.personas.findOneAndUpdate(
                {
                    [this.CODE]: id
                },
                object,
                {
                    runValidators: true
                })
            return asDtoObject(actualizada)
        } catch (error) {
            logger.error(error);
            return false;
        }
    }
}

export { DaoMongo as PcDaoMongo }