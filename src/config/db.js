import dotenv from 'dotenv'; 
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

dotenv.config();

import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

// Emular __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Cargar .env desde la raíz
dotenv.config({ path: resolve(__dirname, '../../.env') });

const firebaseConfig = {
  apiKey: process.env.FIREBASE_APIKEY,
  authDomain: process.env.FIREBASE_AUTHDOMAIN,
  projectId: process.env.FIREBASE_PROJECTID,
  storageBucket: process.env.FIREBASE_STORAGEBUCKET,
  messagingSenderId:process.env.FIREBASE_MESSAGINGSENDER_ID,
  appId: process.env.FIREBASE_APPID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

// Validar carga
console.log("CONFIG COMPLETA =>", firebaseConfig);


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore

const db = getFirestore(app); 

export default db;