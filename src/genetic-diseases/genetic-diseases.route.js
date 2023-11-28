// Importar el módulo express para manejar rutas
const express = require("express");

// Importar controladores y middleware para las rutas relacionadas con enfermedades genéticas
const geneticController = require("./genetic-diseases.controller");
const geneticMiddleware = require("./genetic-diseases.middleware.js");

// Crear una instancia de un router express
const router = express.Router();

// Definir los endpoints para las rutas relacionadas con enfermedades genéticas

// Endpoint para buscar todas las enfermedades genéticas
router.get(
  "/genetic-diseases",
  geneticMiddleware.saludo1, // Middleware que agrega un saludo1 a la solicitud
  geneticController.findAll // Controlador que maneja la búsqueda de todas las enfermedades genéticas
);

// Endpoint para crear una enfermedad genética
router.post("/genetic-diseases", geneticController.create);

// Endpoint para buscar una enfermedad genética por su ID
router.get("/genetic-diseases/:id", geneticController.findOne);

// Endpoint para actualizar una enfermedad genética por su ID
router.patch(
  "/genetic-diseases/:id",
  geneticMiddleware.saludo2, // Middleware que agrega un saludo2 a la solicitud
  geneticController.update
);

// Endpoint para borrar una enfermedad genética por su ID
router.delete(
  "/genetic-diseases/:id",
  geneticMiddleware.saludo2, // Middleware que agrega un saludo2 a la solicitud
  geneticController.deleteGeneticDiseases
);

// Exportar el router para que pueda ser utilizado en otros archivos, como app.js
module.exports = router;
