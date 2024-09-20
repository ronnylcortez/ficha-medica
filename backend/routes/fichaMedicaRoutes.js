const express = require('express');
const router = express.Router();
const fichaMedicaController = require('../controllers/fichaMedicaController');

router.get('/ficha/:cedula', fichaMedicaController.getFichaMedicaByCedula);

router.post('/ficha', fichaMedicaController.crearFichaMedica);

module.exports = router;
