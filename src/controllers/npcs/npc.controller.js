import { NpcService } from "../../services/index.service.js";

const service = NpcService.getInstance();
const controller = {}

controller.getAll = async (req, res) => {
    const npcs = await service.getAll();
    npcs
        ? res.status(200).json(npcs)
        : res.status(400).json({ "error": "there was a problem when trying to get the Npcs" })
}

controller.getById = async (req, res) => {
    const { id } = req.params;
    const npc = await service.getNpcById(id);

    npc
        ? res.status(200).json(npc)
        : res.status(400).json({ "error": "Npc not found" })
}

controller.getByCode = async (req, res) => {
    const { code } = req.params
    const npc = await service.getNpcByCode(code);

    npc
        ? res.status(200).json(npc)
        : res.status(400).json({ "error": "Npc not found" })
}

controller.create = async  (req, res) => {
    const { body } = req;
    const newNPC = await service.createNpc(body);

    newNPC
        ? res.status(200).json({ "success": "NPC added with ID " + newNPC._id })
        : res.status(400).json({ "error": "there was an error, please verify the body content match the schema" })
}

controller.update = async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    const wasUpdated = await service.updateNpcById(id, body);

    wasUpdated
        ? res.status(200).json({ "success": "Npc updated" })
        : res.status(404).json({ "error": "Npc not found or invalid body content." })
}

controller.remove = async (req, res) => {
    const { id } = req.params;
    const wasDeleted = await service.deleteNpcById(id)

    wasDeleted
        ? res.status(200).json({ "success": "Npc successfully removed" })
        : res.status(404).json({ "error": "Npc not found" })
}


export { controller as npcController }