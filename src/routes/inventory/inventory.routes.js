import { Router } from "express";
import { inventoryController } from "../../controllers/index.controller.js";
const router = Router()

router.get('/', inventoryController.getAll)

router.get('/:id', inventoryController.getById)

router.post("/", inventoryController.create);

router.put("/:id", inventoryController.update);

router.delete("/:id", inventoryController.remove);



export { router as inventoryRouter }
