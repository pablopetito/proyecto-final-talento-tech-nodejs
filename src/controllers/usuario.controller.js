import * as usuarioService from '../services/usuario.service.js';
import { generateToken } from '../utils/token-generator.js';

export const loginUsuario = async (req, res) => {
  const { email, password } = req.body;
  try {
    const usuario = await usuarioService.obtenerUsuarioPorEmail(email);
    if (!usuario || usuario.password !== password) {
      return res.status(401).json({ mensaje: 'Credenciales inválidas' });
    }
    
    const token = generateToken(usuario);
    res.status(200).json({ mensaje: 'Login exitoso', token, usuario });

  } catch (error) {
    res.status(500).json({ mensaje: 'Error interno del servidor', error: error.message });
  }
};

export const listarUsuarios = async (req, res) => {
  try {
    const usuarios = await usuarioService.obtenerTodosLosUsuarios();
    res.status(200).json(usuarios);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener usuarios', error: error.message });
  }
};
