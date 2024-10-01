const { poolPromise } = require('../config/db');

const getFactoresActividad = async () => {
    try {
        const pool = await poolPromise;
        const response = await pool.request()
            .query('SELECT * FROM FactorActividad');
        return response.recordset;
    } catch (error) {
        console.log('Error al obtener los factores de actividad:', error);
    }
}

module.exports = {
    getFactoresActividad
}