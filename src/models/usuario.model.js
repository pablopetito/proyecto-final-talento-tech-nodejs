// model Usuarios
import { db } from '../config/db.js';
import { collection, getDocs, addDoc, doc, getDoc, updateDoc, deleteDoc } from 'firebase/firestore';

const usuariosCollection = collection(db, 'Usuarios');

// todos los usuarios
export const getAllUsuarios = async () => {
  const snapshot = await getDocs(usuariosCollection);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

// usuario por email (para autenticación)
export const getUsuarioByEmail = async (email) => {
  const snapshot = await getDocs(usuariosCollection);
  const usuarios = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  return usuarios.find(user => user.email === email) || null;
};