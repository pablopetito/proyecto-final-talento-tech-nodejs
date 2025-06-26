// controller

import userService from '../services/user.service.js';

const listUsers = async (req, res) => {
  const usuarios = userService.getAllUsers();
  res.status(200).json(usuarios);
};

const getUsuario = (req, res) => {
  const id = req.params.id;
  const usuario = userService.getUsersById(id);

  if (!usuario) {
    return res.status(404).json({ mensaje: 'Usuario no encontrado' });
  }

  res.status(200).json(usuario);
};

const addUsuario = (req, res) => {
  const { name, mail } = req.body;
  if (!name || !mail) return res.status(400).json({ error: 'Faltan datos' });
  const nuevo = userService.createUser(name, mail);
  res.status(201).json(nuevo);
};

export default { listUsers, getUsuario, addUsuario };

