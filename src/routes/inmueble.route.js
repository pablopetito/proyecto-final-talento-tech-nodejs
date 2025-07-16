//router Inmuebles 
import { Router } from "express";
import inmuebleController from '../controllers/inmueble.controller.js'
import * as inmuebleService from '../services/inmueble.service.js';
import { authentication, soloAdmins } from '../middlewares/authentication.js';


const router = Router()

router.get('/', inmuebleController.getAllInmuebles);
router.get('/:id', inmuebleController.getInmuebleById);

// Ruta POST para agregar un inmueble
router.post('/', authentication, soloAdmins,  inmuebleController.addInmueble); 

// Ruta PUT Actualizar un inmueble
router.put('/:id', authentication, soloAdmins, inmuebleController.updateInmueble);

// Ruta DELETE Eliminar un inmueble
router.delete('/:id', authentication, soloAdmins, async (req, res) => {
  try {
    const id = req.params.id;
    const resultado = await inmuebleService.deleteInmueble(id);
    res.json(resultado);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar inmueble', error });
  }
});

export default router
