// services

import { getAllInmuebles as getAllInmueblesModel } from '../models/inmueble.model.js';

const getAllInmuebles = async () => {
  try {
  
    return await getAllInmueblesModel();
  
  } catch (error) {
      console.error("Error en el servicio:", error);
    throw error;
  }
};

const getInmuebleById = (id) => {
  return inmuebles.find(inmueble => inmueble.id === id);
}

export default { getAllInmuebles, getInmuebleById };
