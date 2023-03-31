import { InventoryService } from "../../services/index.service.js";

const service = InventoryService.getInstance();
const controller = {}

controller.create = async (req, res) => {
    const { idUser } = req.session
    const { body } = req;
    body.idUser = idUser
    const newInventory = await service.createInventory(body);

    newInventory
        ? res.status(200).json({ "success": "NPC added with ID " + newInventory._id })
        : res.status(400).json({ "error": "there was an error, please verify the body content match the schema" })
}

controller.getInventoryUser = async (req, res) => {
    const { idUser, username } = req.session
    const inventory = await service.getInventoryUser(idUser)
    if (inventory.state === "ok") {
        res.status(201).json(inventory.inventory)
    } else if (inventory.state === "inventoryFalse") {
        res.status(400)
        res.send({ error: `inventory ${username} no exists` })
    }
}

controller.update = async (req, res) => {
    const { idUser } = req.session
    const { body } = req;
    const wasUpdated = await service.update(idUser, body);

    wasUpdated
        ? res.status(200).json({ "success": "Inventory updated" })
        : res.status(404).json({ "error": "Inventory not found or invalid body content." })
}

controller.updateBagAdd = async (req, res) => {
    const { idUser, username } = req.session
    const { item } = req.params;
    const inventory = await service.updateBag(item, idUser)

    if (inventory.state === "ok") {
        res.status(201).json({ "success": "Inventory updated" })
    } else if (inventory.state === "inventoryFalse") {
        res.status(400).send({ error: `inventory ${username} no exists` })
    } else if (inventory.state === "bagFalse") {
        res.status(400).send({ error: `bag ${username} no exists` })
    }
}

controller.updateBagRemove = async (req, res) => {
    const { idUser, username } = req.session
    const { item } = req.params
    const inventory = await service.updateBagRemove(item, idUser)
    if (inventory.state === "ok") {
        res.status(201).json({ "success": "Inventory updated" })
    } else if (inventory.state === "inventoryFalse") {
        res.status(400)
        res.send({ error: `inventory ${username} no exists` })
    } else if (inventory.state === "bagFalse") {
        res.status(400)
        res.send({ error: `bag ${username} no exists` })
    }
}

export { controller as inventoryController }