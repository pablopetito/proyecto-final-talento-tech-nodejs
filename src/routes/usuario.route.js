// usuario.route.js 

import express from 'express';
import { loginUsuario } from '../controllers/usuario.controller.js';

const router = express.Router();

router.post('/login', loginUsuario); 

export default router;