// Importar la instancia de Express configurada en app.js
const app = require("./app");

// Importar funciones de configuración de la base de datos y variables de entorno
const { authenticated, syncUp } = require("./config/database/database");
const { envs } = require("./config/enviroments/enviroments");

// Función principal asíncrona
async function main() {
  try {
    // Autenticar y sincronizar la base de datos al iniciar la aplicación
    await authenticated();
    await syncUp();
  } catch (error) {
    // Capturar y manejar errores en la configuración de la base de datos
    console.log(error);
  }
}

// Llamar a la función principal
main();

// Iniciar el servidor Express en el puerto especificado en las variables de entorno
app.listen(envs.PORT, () => {
  // Mostrar un mensaje en la consola cuando el servidor esté en ejecución
  console.log("Server running on port: " + envs.PORT);
});
