// 1. Importar express
const express = require("express");
const geneticDiseases = require("./genetic-diseases/genetic-diseases.route");

// 2. Crear una constante 'app' que tendrá
// todas las funcionalidades de express
const app = express();

// Middleware para calcular el tiempo de la solicitud
const calculateRequestTime = (req, res, next) => {
  // Obtener la hora actual en formato ISO
  const requestTime = new Date().toISOString();

  // Agregar la hora de la solicitud al objeto de solicitud
  req.requestTime = requestTime;

  // Llamar a la función 'next' para pasar al siguiente middleware o controlador
  next();
};

// Configuración de middleware
app.use(express.json()); // Permitir obtener el body en formato JSON
app.use(express.urlencoded({ extended: true })); // Permitir obtener el body en formato url-encoded
app.use(calculateRequestTime); // Middleware personalizado para calcular el tiempo de la solicitud

// Montar las rutas
app.use("/api/v1", geneticDiseases);

// Exportar la aplicación para que pueda ser utilizada en otros archivos
module.exports = app;
