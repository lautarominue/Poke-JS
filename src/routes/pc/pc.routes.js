import { Router } from "express";
import { pcController } from "../../controllers/index.controller.js";
const router = Router()

router.get('/',pcController.getPc)

router.post("/", pcController.create);

router.put("/:id", pcController.update);


// router.get('/', pcController.getAll)

// router.get('/:id', pcController.getById)


// router.put("/:id", pcController.update);

// router.delete("/:id", pcController.remove);



export { router as pcRouter }
