import * as usuarioModel from '../models/usuario.model.js';

// Todos los Usuarios
export const obtenerTodosLosUsuarios = async () => {
  return await usuarioModel.getAllUsuarios();
};

// Usuario por mail 
export const obtenerUsuarioPorEmail = async (email) => {
  return await usuarioModel.getUsuarioByEmail(email);
};