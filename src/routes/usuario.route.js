// route Usuarios 

import express from 'express';
import { loginUsuario } from '../controllers/usuario.controller.js';
import { listarUsuarios } from '../controllers/usuario.controller.js';
import { authentication, soloAdmins } from '../middlewares/authentication.js';


const router = express.Router();

//Ruta login Usuario 
router.post('/login', loginUsuario); 

//Ruta Listado Usuarios
router.get('/', authentication, soloAdmins, listarUsuarios);

export default router;