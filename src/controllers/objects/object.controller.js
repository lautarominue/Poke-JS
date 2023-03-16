import { ObjectService } from "../../services/index.service.js";

const service = ObjectService.getInstance();
const controller = {}

controller.getAll = async (req, res) => {
    const objects = await service.getAll();
    objects
        ? res.status(200).json(objects)
        : res.status(400).json({ "error": "there was a problem when trying to get the Objects" })
}

controller.getById = async (req, res) => {
    const { id } = req.params;
    const object = await service.getObjectById(id);

    object
        ? res.status(200).json(object)
        : res.status(400).json({ "error": "Object not found" })
}

controller.getByCategory = async (req, res) => {
    const { category } = req.params;
    const object = await service.getObjectByCategory(category);

    object
        ? res.status(200).json(object)
        : res.status(400).json({ "error": "Object not found" })
}

controller.getByCode = async (req, res) => {
    const { code } = req.params;
    const object = await service.getObjectByCode(code);

    object
        ? res.status(200).json(object)
        : res.status(400).json({ "error": "Object not found" })
}

controller.create = async (req, res) => {
    const { body } = req;
    const newObject = await service.createObject(body);

    newObject
        ? res.status(200).json({ "success": "Object added with ID " + newObject._id })
        : res.status(400).json({ "error": "there was an error, please verify the body content match the schema" })
}

controller.update = async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    const wasUpdated = await service.updateObjectById(id, body);

    wasUpdated
        ? res.status(200).json({ "success": "Object updated" })
        : res.status(404).json({ "error": "Object not found or invalid body content." })
}

controller.remove = async (req, res) => {
    const { id } = req.params;
    const wasDeleted = await service.deleteObjectById(id)

    wasDeleted
        ? res.status(200).json({ "success": "Object successfully removed" })
        : res.status(404).json({ "error": "Object not found" })
}


export { controller as objectController }