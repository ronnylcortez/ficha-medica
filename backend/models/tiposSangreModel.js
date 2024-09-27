const { poolPromise } = require('../config/db');

const getTiposSangre = async () => {
    try {
        const pool = await poolPromise;
        const result = await pool.request()
        .query('SELECT * FROM TiposSangre');
        return result.recordset;
    } catch (error) {
        console.error('Error obteniendo los tipos de sangre:', error);
        throw error; // Lanza para que pueda ser manejado en otra parte del código.
    }
};

module.exports = {
    getTiposSangre
};