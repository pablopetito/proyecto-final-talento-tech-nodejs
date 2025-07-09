// controller

//import inmuebleService from '../services/inmueble.service.js';
import * as inmuebleService from '../services/inmueble.service.js';

export const getAllInmuebles = async (req, res) => {
  try {
    const inmuebles = await inmuebleService.getAllInmuebles();
    res.json(inmuebles);
  } catch (error) {
    console.error("Error al listar inmuebles:", error); // LOG útil
    res.status(500).json({
      mensaje: "Error interno del servidor",
      error: error.message
    });
  }
};

/* export const listInmueble = async (req, res) => {
  try {
    
    const inmuebles = await inmuebleService.getAllInmuebles();
    res.status(200).json({ payload: inmuebles });
  
  } catch (error) {
    console.error("Error en el controlador:", error);
    res.status(500).json({ mensaje: "Error interno del servidor" });
  }
}; */

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