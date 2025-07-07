// services

import { getAllInmuebles as getAllInmueblesModel } from '../models/inmueble.model.js';
import { addInmueble as addInmuebleModel } from '../models/inmueble.model.js';

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

const addInmueble = async (nuevoInmueble) => {
  try {
    return await addInmuebleModel(nuevoInmueble);
  } catch (error) {
    console.error("Error en el servicio al agregar inmueble:", error);
    throw error;
  }
};

export default { getAllInmuebles, getInmuebleById, addInmueble };
