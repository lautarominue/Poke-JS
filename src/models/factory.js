import {
    ObjectDaoMongoDB,
    NpcDaoMongoDB,
    InventoryDaoMongoDB,
    UserDaoMongoDB,
    PcDaoMongoDB
} from "./dao/index.dao.js"


let object
let npc
let inventory
let user
let pc

const opcion = process.argv[2] || 'MONGO'

switch (opcion) {
    case 'MONGO':
        object = new ObjectDaoMongoDB();
        npc = new NpcDaoMongoDB();
        inventory = new InventoryDaoMongoDB();
        user = new UserDaoMongoDB();
        pc = new PcDaoMongoDB();
        break
    case 'txt':
        break
    case 'firebase':
        break

}

class DaoFactory {
    static getObjectDao() {
        return object
    }
    static getNpcDao() {
        return npc
    }
    static getInventoryDao() {
        return inventory
    }
    static getUserDao() {
        return user
    }
    static getPcDao() {
        return pc
    }
}

export { DaoFactory }