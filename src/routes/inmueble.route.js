//router
import { Router } from "express";
import inmuebleController from '../controllers/inmueble.controller.js'

const router = Router()

router.get('/', inmuebleController.listInmueble);
router.get('/:id', inmuebleController.getInmueble);

export default router
