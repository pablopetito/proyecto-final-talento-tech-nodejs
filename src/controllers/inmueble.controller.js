// controller

import inmuebleService from '../services/inmueble.service.js';

const listInmueble = async (req, res) => {
  try {
    
    const inmuebles = await inmuebleService.getAllInmuebles();
    res.status(200).json({ payload: inmuebles });
  
  } catch (error) {
    console.error("Error en el controlador:", error);
    res.status(500).json({ mensaje: "Error interno del servidor" });
  }
};


const getInmueble = (req, res) => {
  const id = parseInt(req.params.id);
  const inmueble = inmuebleService.getInmuebleById(id);

  if (!inmueble) {
    return res.status(404).json({ mensaje: 'Inmueble no encontrado' });
  }

  res.status(200).json(inmueble);
};

export default { listInmueble, getInmueble };