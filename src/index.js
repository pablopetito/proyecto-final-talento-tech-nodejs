import express from "express";
import cors from "cors";
import path from 'path';
import { fileURLToPath } from 'url';
import 'dotenv/config';

import userRoutes from "./routes/usuario.route.js";
import inmueblesRoutes from "./routes/inmueble.route.js";

import authRouter from './routes/usuario.route.js';
import bodyParser from 'body-parser';

// path setup
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.set("PORT", 3000);

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "frontend"))); // para los HTML
app.use(bodyParser.json());

// RUTAS - ROUTERS

// Autemticacion 
app.use('/auth', authRouter);

// Home
app.get("/", (req, res) => {
  console.log(__dirname);
  res.sendFile(path.join(__dirname, '..', 'frontend', 'index.html'));
});

// Formulario Agregar Usuario 
app.get("/nuevoUsuario", (req, res) => {
  console.log(__dirname);
  res.sendFile(path.join(__dirname, 'frontend', 'nuevoUsuario.html'));
});
// Listado Usuarios 
app.get("/listaUsuarios", (req, res) => {
  console.log(__dirname);
  res.sendFile(path.join(__dirname, 'frontend', 'listaUsuarios.html'));
});

app.use("/usuarios", userRoutes);
app.use("/inmuebles", inmueblesRoutes);

app.listen(app.get("PORT"), () => {
  console.log(`Server on http://localhost:${app.get("PORT")}`);
});