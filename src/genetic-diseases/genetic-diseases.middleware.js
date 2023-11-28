// Middleware para agregar saludos a las solicitudes según la ruta

// TODO: El middleware 'saludo1' se ejecuta solo para la ruta del findAll.
// En el controlador correspondiente, se debe traer el saludo y enviarlo por la respuesta.
exports.saludo1 = (req, res, next) => {
  // Saludo específico para la ruta del findAll
  const saludo1 = "Hola, soy el saludo 1";

  // Agregar el saludo al objeto de solicitud (req)
  req.saludo1 = saludo1;

  // Llamar a la función 'next' para pasar al siguiente middleware o controlador
  next();
};

// TODO: El middleware 'saludo2' se ejecuta solo para las rutas patch y delete.
// En los controladores correspondientes, se debe traer el saludo y enviarlo por la respuesta.
exports.saludo2 = (req, res, next) => {
  // Saludo específico para las rutas patch y delete
  const saludo2 = "Hola, soy el saludo 2";

  // Agregar el saludo al objeto de solicitud (req)
  req.saludo2 = saludo2;

  // Llamar a la función 'next' para pasar al siguiente middleware o controlador
  next();
};
