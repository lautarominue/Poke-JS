import { Router } from "express";
import { npcController } from "../../controllers/index.controller.js";
const router = Router()

router.get('/code/:code', npcController.getByCode)

// router.get('/', npcController.getAll)

// router.get('/:id', npcController.getById)


// router.post("/", npcController.create);

// router.put("/:id", npcController.update);

// router.delete("/:id", npcController.remove);



export { router as npcRouter }
