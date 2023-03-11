import { Router } from "express";
import { pcController } from "../controller/index.controller.js";
const router = Router()

router.get('/', pcController.getAll)

router.get('/:id', pcController.getById)

router.post("/", pcController.create);

router.put("/:id", pcController.update);

router.delete("/:id", pcController.remove);



export { router as pcRouter }
