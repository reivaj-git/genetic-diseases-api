// Controladores para las rutas relacionadas con enfermedades genéticas

// Obtener todas las enfermedades genéticas
exports.findAll = (req, res) => {
  // Extraer propiedades de la solicitud, como el tiempo de solicitud y saludo1
  const { requestTime, saludo1 } = req;

  // Enviar una respuesta JSON con información sobre la solicitud y un mensaje
  return res.status(200).json({
    message: "Method GET - Find All",
    requestTime,
    saludo1,
  });
};

// Crear una nueva enfermedad genética
exports.create = (req, res) => {
  // Extraer propiedades de la solicitud, como el tiempo de solicitud y la enfermedad
  const { requestTime } = req;
  const disease = req.body;

  // Enviar una respuesta JSON con información sobre la solicitud y los datos de la enfermedad creada
  return res.status(201).json({
    message: "Method POST - Create",
    data: disease,
    requestTime,
  });
};

// Obtener una enfermedad genética por su ID
exports.findOne = (req, res) => {
  // Extraer propiedades de la solicitud, como el tiempo de solicitud y los parámetros de la URL
  const { requestTime } = req;

  // Imprimir los parámetros de la URL en la consola (puedes ajustar esto según sea necesario)
  console.log(req.params);

  // Enviar una respuesta JSON con información sobre la solicitud y el ID de la enfermedad solicitada
  return res.status(200).json({
    message: "Method GET - Find One",
    id: req.params.id,
    requestTime,
  });
};

// Actualizar una enfermedad genética por su ID
exports.update = (req, res) => {
  // Extraer propiedades de la solicitud, como el tiempo de solicitud y saludo2
  const { requestTime, saludo2 } = req;
  const { id } = req.params;

  // Enviar una respuesta JSON con información sobre la solicitud, el ID y saludo2
  return res.status(200).json({
    message: "Method PATCH - Update",
    id,
    requestTime,
    saludo2,
  });
};

// Eliminar una enfermedad genética por su ID
exports.deleteGeneticDiseases = (req, res) => {
  // Extraer propiedades de la solicitud, como el tiempo de solicitud y saludo2
  const { requestTime, saludo2 } = req;
  const { id } = req.params;

  // Enviar una respuesta JSON con información sobre la solicitud, el ID y saludo2
  return res.status(200).json({
    message: "Method DELETE - Delete",
    id,
    requestTime,
    saludo2,
  });
};
