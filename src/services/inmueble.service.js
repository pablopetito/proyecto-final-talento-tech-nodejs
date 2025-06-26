// services

import inmuebles from '../models/inmueble.model.js';

const getAllInmuebles = () => {
  return inmuebles;
};

const getInmuebleById = (id) => {
  return inmuebles.find(inmueble => inmueble.id === id);
}

export default { getAllInmuebles, getInmuebleById };
