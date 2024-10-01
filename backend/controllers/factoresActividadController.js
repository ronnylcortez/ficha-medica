const factorActividadModel = require('../models/factorActividadModel');

exports.getFactoresActividad = async (req,res) => {
    try {
        const factoresActividad = await factorActividadModel.getFactoresActividad();
        res.json(factoresActividad);
    } catch (error) {
        res.status(500).send('Error obteniendo los tipos de sangre');
    }
};