const sql = require('mssql');
const { poolPromise } = require('../config/db');

const getTiposSangre = async () => {
    try {
        const pool = await poolPromise;
        const response = await pool.request()
            .query('SELECT * FROM TiposSangre');
        return response.recordset;
    } catch (error) {
        console.error('Error obteniendo los tipos de sangre:', error);
        throw error;
    }  
} 

module.exports = {
    getTiposSangre
};