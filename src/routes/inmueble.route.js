//router
import { Router } from "express";
import inmuebleController from '../controllers/inmueble.controller.js'
import inmuebleService from '../services/inmueble.service.js';


const router = Router()

router.get('/', inmuebleController.listInmueble);
router.get('/:id', inmuebleController.getInmueble);

// Ruta POST para agregar
router.post('/', async (req, res) => {
  try {
    const nuevoInmueble = req.body;
    const inmuebleAgregado = await inmuebleService.addInmueble(nuevoInmueble);
    res.status(201).json(inmuebleAgregado);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al agregar inmueble', error });
  }
});

export default router
