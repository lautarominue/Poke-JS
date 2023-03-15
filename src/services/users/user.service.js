import { DaoFactory } from "../../models/factory.js"

const dao = DaoFactory.getUserDao()

let instaciaUser = null

class Service {

    static getInstance = () => {
        if (!instaciaUser)
            instaciaUser = new Service()
        return instaciaUser
    }

    async createUser(user) {
        try {
            return await dao.createUser(user)
        } catch (error) {
            console.error(error);
            return false;
        }
    }

    async loginUser(loginUser) {
        try {
            const user = await dao.loginUser(loginUser)

            return  user

        } catch (error) {
            console.error(error);
            return null;
        }
    }

}

export { Service as UserService }