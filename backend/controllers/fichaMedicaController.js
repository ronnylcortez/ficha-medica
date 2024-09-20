const fichaMedicaModel = require('../models/fichaMedicaModel');

exports.getFichaMedicaByCedula = async(req, res) => {
  const cedulaSocio =  req.params.cedula
  try {
    const ficha = await fichaMedicaModel.getFichaMedicaByCedula(cedulaSocio);
    if (ficha) {
      res.json(ficha);
    } else {
      res.status(404).json({ message: 'No se encontró la ficha médica para esta cédula.'});
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al buscar ficha médica.'});
  }
};

exports.crearFichaMedica = async (req, res) => {
  try {
    await fichaMedicaModel.crearFichaMedica(req.body);
    res.status(201).send('Ficha médica creada exitosamente.');
  } catch (error) {
    console.error('Error al crear la ficha médica:', error);
    res.status(500).send('Error al crear la ficha médica.');
  }
};
