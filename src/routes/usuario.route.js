// usuario.route.js 

import express from 'express';
import { loginUsuario } from '../controllers/usuario.controller.js';
import { listarUsuarios } from '../controllers/usuario.controller.js';
import { authentication, soloAdmins } from '../middlewares/authentication.js';


const router = express.Router();

router.post('/login', loginUsuario); 
router.get('/', authentication, soloAdmins, listarUsuarios);

export default router;