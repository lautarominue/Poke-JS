import { InventoryService } from "../../services/index.service.js";

const service = InventoryService.getInstance();
const controller = {}

controller.getAll = async (req, res) => {
    const inventorys = await service.getAll();
    inventorys
        ? res.status(200).json(inventorys)
        : res.status(400).json({ "error": "there was a problem when trying to get the Inventorys" })
}

controller.getById = async (req, res) => {
    const { id } = req.params;
    const inventory = await service.getInventoryById(id);

    inventory
        ? res.status(200).json(inventory)
        : res.status(400).json({ "error": "Inventory not found" })
}

controller.create = async  (req, res) => {
    const { body } = req;
    const newInventory = await service.createInventory(body);

    newInventory
        ? res.status(200).json({ "success": "NPC added with ID " + newInventory._id })
        : res.status(400).json({ "error": "there was an error, please verify the body content match the schema" })
}

controller.update = async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    const wasUpdated = await service.updateInventoryById(id, body);

    wasUpdated
        ? res.status(200).json({ "success": "Inventory updated" })
        : res.status(404).json({ "error": "Inventory not found or invalid body content." })
}

controller.remove = async (req, res) => {
    const { id } = req.params;
    const wasDeleted = await service.deleteInventoryById(id)

    wasDeleted
        ? res.status(200).json({ "success": "Inventory successfully removed" })
        : res.status(404).json({ "error": "Inventory not found" })
}


export { controller as inventoryController }