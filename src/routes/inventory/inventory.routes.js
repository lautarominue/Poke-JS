import { Router } from "express";
import { inventoryController } from "../../controllers/index.controller.js";
const router = Router()

router.get('/', inventoryController.getInventoryUser)

router.post("/", inventoryController.create)

router.put("/", inventoryController.update)

router.put("/add/:item", inventoryController.updateBagAdd)

router.put("/remove/:item", inventoryController.updateBagRemove)


export { router as inventoryRouter }
