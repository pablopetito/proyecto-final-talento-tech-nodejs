// controller INMUEBLES
import * as inmuebleService from '../services/inmueble.service.js';

export const getAllInmuebles = async (req, res) => {
  try {
    const inmuebles = await inmuebleService.getAllInmuebles();
    res.json(inmuebles);
  } catch (error) {
    res.status(500).json({
      mensaje: "Error interno del servidor",
      error: error.message
    });
  }
};

const getInmuebleById = async (req, res) => {
  try {
    const id = req.params.id;
    const inmueble = await inmuebleService.getInmuebleById(id);

    if (!inmueble) {
      return res.status(404).json({ message: "Inmueble no encontrado" });
    }

    res.json(inmueble);
  } catch (error) {
    res.status(500).json({ message: "Error al buscar inmueble por ID", error });
  }
};

export default { getAllInmuebles, getInmuebleById };