import { Router } from "express";
import { npcController } from "../../controllers/index.controller.js";
const router = Router()

router.get('/code/:code', npcController.getByCode)

export { router as npcRouter }
