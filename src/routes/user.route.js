//router
import { Router } from "express";
import userController from '../controllers/user.controller.js'

const router = Router()

router.get('/', userController.listUsers);
router.get('/:id', userController.getUsuario);
router.post('/', userController.addUsuario);

export default router
