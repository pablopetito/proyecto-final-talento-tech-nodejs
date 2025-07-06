// model
import db from '../config/db.js'
import { collection, doc, getDoc, getDocs, addDoc, updateDoc, deleteDoc } from 'firebase/firestore';

console.log("db es instancia de Firestore?", typeof db); // debería mostrar 'object'
console.log("db:", db);

const inmueblesCollection = collection(db, 'Inmuebles')

// Método para obtener todos los productos
export const getAllInmuebles = async () => {

  try {
 
    const querySnapshot = await getDocs(inmueblesCollection); 
    const inmuebles = []; 
  
    querySnapshot.forEach((doc) => { 
      inmuebles.push({ id: doc.id, ...doc.data() });
    });
  
   return inmuebles;
  
  } catch (error) {
    console.error("error en el modelo:", error);
    throw error;
  }

};