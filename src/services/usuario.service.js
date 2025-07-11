import * as usuarioModel from '../models/usuario.model.js';

export const obtenerTodosLosUsuarios = async () => {
  return await usuarioModel.getAllUsuarios();
};

export const obtenerUsuarioPorEmail = async (email) => {
  return await usuarioModel.getUsuarioByEmail(email);
};