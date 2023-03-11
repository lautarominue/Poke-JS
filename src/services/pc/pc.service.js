import { PcRepo } from "../../repository/index.repository.js"

let instaciaPc = null

const repo = new PcRepo


class Service {

    static getInstance = () => {
        if (!instaciaPc)
            instaciaPc = new Service()
        return instaciaPc
    }

    async getAll() {
        try {
            return await repo.getAll();
        } catch (error) {
            console.error(error);
            return false;
        }
    }

    async getProductById(id) {
        try {
            const pokemon = await repo.getById(id)
            return pokemon;
        } catch (error) {
            console.error(error);
            return false;
        }
    }

    async createProduct(pokemon) {
        try {
            return await repo.create(pokemon)
        } catch (error) {
            console.error(error);
            return false;
        }
    }

    async updateProductById(id, pokemon) {
        try {
            await repo.updateById(id, pokemon)
            return true;
        } catch (error) {
            console.error(error);
            return false;
        }
    }

    async deleteProductById(id) {
        try {
            return await repo.removeById(id)
        } catch (error) {
            console.error(error);
            return false;
        }
    }

}

export { Service as PcService }