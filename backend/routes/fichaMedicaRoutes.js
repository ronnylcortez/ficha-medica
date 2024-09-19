const express = require('express');
const router = express.Router();
const fichaMedicaController = require('../controllers/fichaMedicaController');

router.post('/ficha', fichaMedicaController.crearFichaMedica);

module.exports = router;
