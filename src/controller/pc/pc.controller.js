import { PcService } from "../../services/index.service.js";

const service = PcService.getInstance();
const controller = {}

controller.getAll = async (req, res) => {
    const pokemons = await service.getAll();
    pokemons
        ? res.status(200).json(pokemons)
        : res.status(400).json({ "error": "there was a problem when trying to get the products" })
}

controller.getById = async (req, res) => {
    const { id } = req.params;
    const pokemon = await service.getProductById(id);

    pokemon
        ? res.status(200).json(pokemon)
        : res.status(400).json({ "error": "product not found" })
}

controller.create = async  (req, res) => {
    const { body } = req;
    const newPokemon = await service.createProduct(body);

    newPokemon
        ? res.status(200).json({ "success": "NPC added with ID " + newPokemon._id })
        : res.status(400).json({ "error": "there was an error, please verify the body content match the schema" })
}

controller.update = async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    const wasUpdated = await service.updateProductById(id, body);

    wasUpdated
        ? res.status(200).json({ "success": "product updated" })
        : res.status(404).json({ "error": "product not found or invalid body content." })
}

controller.remove = async (req, res) => {
    const { id } = req.params;
    const wasDeleted = await service.deleteProductById(id)

    wasDeleted
        ? res.status(200).json({ "success": "product successfully removed" })
        : res.status(404).json({ "error": "product not found" })
}


export { controller as pcController }