// controller

import inmuebleService from '../services/inmueble.service.js';

const listInmueble = async (req, res) => {
  const inmuebles = inmuebleService.getAllInmuebles();
  res.status(200).json(inmuebles);
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