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

const addInmueble = async (req, res) => {
  try {
    const nuevoInmueble=req.body;
    
    const inmuebleCreado =  await inmuebleService.addInmueble(nuevoInmueble);
    res.status(200).json({ message: "Inmueble Nuevo", payload: inmuebleCreado });
  } catch (error) {
    res
      .status(500)
      .json({ message: "error interno del servidor", error: error.message });
  }
};

const updateInmueble = async (req, res) => {
  try {
    const id = req.params.id;
    const datosActualizados = req.body;
    
    const resultado = await inmuebleService.updateInmueble(id, datosActualizados);

    res.status(200).json({
      mensaje: 'Inmueble actualizado correctamente',
      payload: resultado
    });
  } catch (error) {
    res.status(500).json({
      mensaje: 'Error al actualizar inmueble (controller)',
      error: error.message
    });
  }
};

// Elimina un Inmueble 
const deleteInmueble = async (req, res) => {
  
  try {
    const id = req.params.id;
    const resultado = await inmuebleService.deleteInmueble(id);
    res.status(200).json({
        payload: resultado
    });
  } catch (error) {
    console.error("Error en el servicio al eliminar:", error);
    throw error;
  }
};


export default { getAllInmuebles, getInmuebleById, addInmueble, updateInmueble, deleteInmueble };