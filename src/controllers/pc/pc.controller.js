import { PcService } from "../../services/index.service.js";

const service = PcService.getInstance();
const controller = {}

controller.getPc = async (req, res) => {
    try {
        const { idUser, username } = req.session
        const response = await service.getPc(idUser)
        if (response.estado === "ok") {
            res.status(201)
            res.send(response.pc)
        } else if (response.estado === "pcFalse") {
            res.status(400)
            res.send({ error: `pc ${username} no existe` })
        }
    } catch (error) {
        console.error(error)
        throw Error("Error en addPtoToCarrito carritoController")
    }
}


controller.update = async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    const wasUpdated = await service.updateObjectById(id, body);

    wasUpdated
        ? res.status(200).json({ "success": "Object updated" })
        : res.status(404).json({ "error": "Object not found or invalid body content." })
}

controller.create = async (req, res) => {
    const { body } = req;
    const newPc = await service.createPc(body);

    newPc
        ? res.status(200).json({ "success": "Pc added with ID " + newPc._id })
        : res.status(400).json({ "error": "there was an error, please verify the body content match the schema" })
}


export { controller as pcController }