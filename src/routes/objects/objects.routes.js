import { Router } from "express";
import { objectController } from "../../controllers/index.controller.js";
const router = Router()

router.get('/', objectController.getAll)

router.get('/:id', objectController.getById)

router.get('/:category', objectController.getByCategory)

router.get('/:code', objectController.getByCode)

router.post("/", objectController.create);

router.put("/:id", objectController.update);

router.delete("/:id", objectController.remove);



export { router as objectRouter }
