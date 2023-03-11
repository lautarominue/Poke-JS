import { PcModel } from '../models/index.models.js'
import { PcDaoFactory } from '../daos/factory/index.factory.js'
import { asDtoPc } from '../dtos/index.dtos.js'
import { AdaptadorPc } from '../dtos/adaptadores/index.adaptador.js'

class Repo {
    #dao

    constructor() {
        this.#dao = PcDaoFactory.getDao()
    }

    async getAll() {
        const pokemons = await this.#dao.getAll()
        return pokemons.map(o => new AdaptadorPc(new PcModel(o)).devolver())
    }

    async getById(id) {
        const pokemon = await this.#dao.getById(id)
        return  new AdaptadorPc(new AdaptadorPc(pokemon)).devolver()
    }

    async create(newPokemon) {
        await this.#dao.create(asDtoPc(newPokemon))
    }

    async removeById(id) {
        const delet = await this.#dao.deleteById(id)
        return  new AdaptadorPc(new AdaptadorPc(delet)).devolver()
    }

    async updateById(id, pokemon) {
        await this.#dao.updateById(id, pokemon)
    }
}

export { Repo as PcRepo }