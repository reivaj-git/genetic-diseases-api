// Importar el módulo 'dotenv' para cargar las variables de entorno desde el archivo .env
require("dotenv").config();

// Importar el módulo 'env-var' para validar y obtener valores de las variables de entorno
const env = require("env-var");

// Exportar un objeto que contiene las variables de entorno requeridas
exports.envs = {
  // Puerto en el que el servidor escuchará las solicitudes
  PORT: env.get("PORT").required().asPortNumber(),

  // URI de la base de datos que se utilizará en la aplicación
  DB_URI: env.get("DB_URI").required().asString(),
};
