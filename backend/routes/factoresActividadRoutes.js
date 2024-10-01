const express = require('express');
const router = express.Router();
const factoresActividadController = require('../controllers/factoresActividadController');

router.get('/factores-actividad', factoresActividadController.getFactoresActividad);

module.exports = router;