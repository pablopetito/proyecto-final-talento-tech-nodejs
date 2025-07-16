// models Inmueble 
import { db } from '../config/db.js'
import { collection, doc, getDoc, getDocs, addDoc, updateDoc, deleteDoc } from 'firebase/firestore';

const inmueblesCollection = collection(db, 'Inmuebles')

// buscar inmueble por id
export const getInmuebleById = async (id) => {
  const docRef = doc(inmueblesCollection, id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() };
  } else {
    return null;
  }
};

// todos los inmuebles
export const getAllInmuebles = async () => {
  const snapshot = await getDocs(inmueblesCollection);
  const inmuebles = snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
  return inmuebles;
};

// agregar nuevo inmueble
export const addInmueble = async (inmuebleData) => {
  try {
    const docRef = await addDoc(inmueblesCollection, inmuebleData);
    return { id: docRef.id, ...inmuebleData };
  } catch (error) {
    console.error("Error al agregar inmueble en el modelo:", error);
    throw error;
  }
};

// actualizar un inmueble
export const updateInmueble = async (id, datosActualizados) => {
  try {
    
    const docRef = doc(db, 'Inmuebles', String(id));
    await updateDoc(docRef, datosActualizados);
    return { id, ...datosActualizados };
  } catch (error) {
    console.error("Model - Error al actualizar el inmueble:", error);
    throw error;
  }
};

// eliminar un inmueble
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