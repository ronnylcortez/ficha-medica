const fichaMedicaModel = require('../models/fichaMedicaModel');

exports.crearFichaMedica = async (req, res) => {
  try {
    await fichaMedicaModel.crearFichaMedica(req.body);
    res.status(201).send('Ficha médica creada exitosamente.');
  } catch (error) {
    console.error('Error al crear la ficha médica:', error);
    res.status(500).send('Error al crear la ficha médica.');
  }
};
