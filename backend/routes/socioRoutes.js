const express = require('express');
const router = express.Router();
const socioController = require('../controllers/socioController');

// Rutas para los usuarios

router.get('/', socioController.getAllSocios);

router.get('/:cedula', socioController.getSocioByCedula);

router.get('/tarjeta/:numTarjeta', socioController.getSocioByNumTarjeta);




module.exports = router;