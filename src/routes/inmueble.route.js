//router
import { Router } from "express";
import inmuebleController from '../controllers/inmueble.controller.js'
import * as inmuebleService from '../services/inmueble.service.js';


const router = Router()

router.get('/', inmuebleController.getAllInmuebles);
router.get('/:id', inmuebleController.getInmuebleById);

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

// Actualizar un inmueble
router.put('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const datos = req.body;
    const inmuebleActualizado = await inmuebleService.updateInmueble(id, datos);
    res.json(inmuebleActualizado);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al actualizar inmueble', error });
  }
});

// Eliminar un inmueble
router.delete('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const resultado = await inmuebleService.deleteInmueble(id);
    res.json(resultado);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar inmueble', error });
  }
});

export default router
