import { PcDaoMongo } from '../index.dao.js'


const opcion = process.argv[2] || 'Mongo'

let dao

switch (opcion) {
    case 'Mongo':
        dao = new PcDaoMongo()
        // await dao.init()
        break

    default:
        console.log('falta DAO')
    // dao = new PersonasDaoMem()
}

class DaoFactory {
    static getDao() {
        return dao
    }
}

export { DaoFactory as PcDaoFactory }