const tiposSangreModel = require('../models/tiposSangreModel');

exports.getTiposSangre = async (req, res) => {
    try {
        const tiposSangre = await tiposSangreModel.getTiposSangre();
        res.json(tiposSangre);
    } catch (error) {
        res.status(500).send('Error obteniendo los tipos de sangre');
    }
};
