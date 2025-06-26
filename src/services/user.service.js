// services
import User from '../models/user.model.js';
import createRandomUsers from '../utils/seedUsers.js';
import db from '../config/db.js';
import { fakerES_MX as faker } from '@faker-js/faker';

const users = db.users;
console.log("Usuarios cargados al iniciar:", db.users);

const getAllUsers = () => {
  return users;
};

const getUsersById = (id) => {
  return users.find(usuario => usuario.id === id);
};

const createUser = (name, mail) => {
  const id = faker.database.mongodbObjectId();
  const newUser = new User(id, name, mail);
  users.push(newUser);
  return newUser;
}

export default { getAllUsers, getUsersById, createUser };