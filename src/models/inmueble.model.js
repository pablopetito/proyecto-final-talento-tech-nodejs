// model
import db from '../config/db.js'
import { collection, doc, getDoc, getDocs, addDoc, updateDoc, deleteDoc } from 'firebase/firestore';

const inmueblesCollection = collection(db, 'Inmuebles')

// Método obtener inmueble por id
export const getInmuebleById = async (id) => {
  const docRef = doc(inmueblesCollection, id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() };
  } else {
    return null;
  }
};

// Método obtener todos los inmuebles
export const getAllInmuebles = async () => {
  const snapshot = await getDocs(inmueblesCollection);
  const inmuebles = snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
  return inmuebles;
};

// Método agregar nuevo inmueble
export const addInmueble = async (nuevoInmueble) => {
  try {
    const docRef = await addDoc(inmueblesCollection, nuevoInmueble);
    return { id: docRef.id, ...nuevoInmueble };
  } catch (error) {
    console.error("Error al agregar inmueble en el modelo:", error);
    throw error;
  }
};

// Método actualizar inmueble
export const updateInmueble = async (id, datosActualizados) => {
  try {
    const docRef = doc(db, 'Inmuebles', id);
    await updateDoc(docRef, datosActualizados);
    return { id, ...datosActualizados };
  } catch (error) {
    console.error("Error al actualizar el inmueble:", error);
    throw error;
  }
};

// Método eliminar inmueble
export const deleteInmueble = async (id) => {
  try {
    const docRef = doc(db, 'Inmuebles', id);
    await deleteDoc(docRef);
    return { mensaje: "Inmueble eliminado correctamente", id };
  } catch (error) {
    console.error("Error al eliminar inmueble:", error);
    throw error;
  }
};