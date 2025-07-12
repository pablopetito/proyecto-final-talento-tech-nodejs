import jwt from 'jsonwebtoken';
import 'dotenv/config';

const secret_key = process.env.JWT_SECRET_KEY;

// Middleware para verificar token
export const authentication = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  
  if (!authHeader) return res.status(401).json({ mensaje: 'Token no proporcionado' });

  const token = authHeader.split(' ')[1];
  if (!token) return res.status(401).json({ mensaje: 'Token no válido' });

  jwt.verify(token, secret_key, (err, decoded) => {
    if (err) return res.status(403).json({ mensaje: 'Acceso denegado' });

    req.usuario = decoded; 
    next();
  });
};

// Middleware para verificar rol de los usuarios
export const soloAdmins = (req, res, next) => {
  if (req.usuario?.rol !== 'admin') {
    return res.status(403).json({ mensaje: 'Acceso permitido solo a administradores' });
  }
  next();
};