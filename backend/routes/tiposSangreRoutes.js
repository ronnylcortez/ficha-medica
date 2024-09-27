const express = require('express');
const router = express.Router();
const tiposSangreController = require('../controllers/tiposSangreController');

router.get('/tipos-sangre', tiposSangreController.getTiposSangre);

module.exports = router;