// services Inmuebles 

import { getInmuebleById as getById } from '../models/inmueble.model.js';
import { getAllInmuebles as getAll } from '../models/inmueble.model.js';
import { addInmueble as addInmuebleModel } from '../models/inmueble.model.js';
import { updateInmueble as updateInmuebleModel } from '../models/inmueble.model.js';
import { deleteInmueble as deleteInmuebleModel } from '../models/inmueble.model.js';

// Todos los Inmuebles
export const getAllInmuebles = async () => {
  try {
  
    return await getAll();
  
  } catch (error) {
      console.error("Error en el servicio:", error);
    throw error;
  }
};

// Busca Inmueble por ID
export const getInmuebleById = async (id) => {
  return await getById(id);
};

export const addInmueble = async (nuevoInmueble) => {
  try {
    return await addInmuebleModel(nuevoInmueble);
  } catch (error) {
    console.error("Error en el servicio al agregar inmueble:", error);
    throw error;
  }
};

// Actualiza un Inmueble
export const updateInmueble = async (id, datosActualizados) => {
  try {
    return await updateInmuebleModel(id, datosActualizados);
  } catch (error) {
    console.error("Error en el servicio al actualizar:", error);
    throw error;
  }
};

// Elimina un Inmueble 
export const deleteInmueble = async (id) => {
  try {
    return await deleteInmuebleModel(id);
  } catch (error) {
    console.error("Error en el servicio al eliminar:", error);
    throw error;
  }
};