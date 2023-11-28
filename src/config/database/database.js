// Importar el constructor Sequelize de la biblioteca sequelize
const { Sequelize } = require("sequelize");

// Importar las variables de entorno desde el archivo enviroments.js
const { envs } = require("../enviroments/enviroments");

// Crear una nueva instancia Sequelize con la URI de la base de datos y opciones de configuración
const sequelize = new Sequelize(envs.DB_URI, {
  // Deshabilitar el logging para evitar la salida de consultas en la consola
  logging: false,
});

// Función asincrónica para autenticar la conexión a la base de datos
const authenticated = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully. 😃");
  } catch (error) {
    // Manejar errores en caso de que la autenticación falle
    console.log(error);
  }
};

// Función asincrónica para sincronizar el modelo con la base de datos
const syncUp = async () => {
  try {
    // Sincronizar el modelo con la base de datos
    await sequelize.sync();
    console.log("Connection has been synced successfully. 👌");
  } catch (error) {
    // Manejar errores en caso de que la sincronización falle
    console.log(error);
  }
};

// Exportar las funciones de autenticación y sincronización, así como la instancia de Sequelize
module.exports = {
  authenticated,
  syncUp,
  sequelize,
};
