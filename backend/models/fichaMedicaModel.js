const sql = require('mssql');
const { poolPromise } = require('../config/db');

const getFichaMedicaByCedula = async (cedula) => {
  try {
    const pool = await poolPromise;
    const result = await pool.request()
      .input('cedula', sql.VarChar, cedula)
      .query('SELECT * FROM FichaMedica WHERE cedula = @cedula');
    return result.recordset[0];
  } catch (error) {
    console.error('Error obteniendo la ficha médica: ', error);
    throw error;
  }
};


const crearFichaMedica = async (data) => {

  // Asegúrate de que la cédula no sea undefined o null
  console.log('Datos recibidos:', data); // Imprime aquí para verificar

  const {
    cedula,
    tipo_sangre,
    peso,
    altura,
    factor_actividad,
    convulsiones,
    alergias,
    medicamentos,
    enfermedades,
    observaciones,
    discapacidad_fisica,
    atencion_especial,
    calendario_vacunacion_completo,
    diabetes,
    hipertension,
    fracturas,
    hernias
  } = data;

  try {
    const pool = await poolPromise;
    const result = await pool.request()
      .input('cedula', sql.NVarChar, cedula) // Incluir cédula
      .input('tipo_sangre', sql.NVarChar, tipo_sangre)
      .input('peso', sql.Decimal(5, 2), peso)
      .input('altura', sql.Decimal(5, 2), altura)
      .input('factor_actividad', sql.NVarChar, factor_actividad)
      .input('diabetes', sql.Bit, diabetes)
      .input('hipertension', sql.Bit, hipertension)
      .input('fracturas', sql.Bit, fracturas)
      .input('hernias', sql.Bit, hernias)
      .input('convulsiones', sql.Bit, convulsiones)
      .input('alergias', sql.NVarChar, alergias)
      .input('medicamentos', sql.NVarChar, medicamentos)
      .input('enfermedades', sql.NVarChar, enfermedades)
      .input('observaciones', sql.NVarChar, observaciones)
      .input('discapacidad_fisica', sql.Bit, discapacidad_fisica)
      .input('atencion_especial', sql.Bit, atencion_especial)
      .input('calendario_vacunacion_completo', sql.Bit, calendario_vacunacion_completo)
      .query(`
        INSERT INTO FichaMedica (cedula, tipo_sangre, peso, altura,  factor_actividad, diabetes, hipertension, fracturas, hernias, convulsiones, alergias, medicamentos,
          enfermedades, observaciones, discapacidad_fisica, atencion_especial, calendario_vacunacion_completo) 
          VALUES (
          @cedula, @tipo_sangre, @peso, @altura, @factor_actividad, @diabetes, @hipertension, @fracturas, @hernias, @convulsiones, @alergias, @medicamentos, @enfermedades,
          @observaciones, @discapacidad_fisica, @atencion_especial, @calendario_vacunacion_completo)
      `);

    // 2. Realiza el UPDATE para establecer la fecha de actualización
    const fechaActualizacion = new Date(); // Fecha y hora actuales
    await pool.request()
      .input('cedula', sql.NVarChar, cedula) // Usar la misma cédula para actualizar el registro
      .input('fecha_actualizacion', sql.DateTime, fechaActualizacion)
      .query(`
           UPDATE FichaMedica 
           SET fecha_actualizacion = @fecha_actualizacion
           WHERE cedula = @cedula
         `);

    await pool.request()
      .input('cedula', sql.NVarChar, cedula) // Usar la misma cédula para actualizar el registro
      .input('fecha_actualizacion', sql.DateTime, fechaActualizacion)
      .query(`
              UPDATE FichaMedica 
              SET fecha_actualizacion = @fecha_actualizacion
              WHERE cedula = @cedula
            `);
    return result;
  } catch (error) {
    console.error('Error al crear la ficha médica:', error);
    throw error;
  }
};


const actualizarFichaMedica = async (cedula, data) => {
  const {
    tipo_sangre,
    peso,
    altura,
    factor_actividad,
    alergias,
    medicamentos,
    enfermedades,
    observaciones
  } = data;

  try {
    const pool = await poolPromise;
    await pool.request()
      .input('cedula', sql.NVarChar, cedula) // Para encontrar la ficha por cédula
      .input('tipo_sangre', sql.NVarChar, tipo_sangre)
      .input('peso', sql.Decimal(5, 2), peso)
      .input('altura', sql.Decimal(5, 2), altura)
      .input('factor_actividad', sql.NVarChar, factor_actividad)
      .input('alergias', sql.NVarChar, alergias)
      .input('medicamentos', sql.NVarChar, medicamentos)
      .input('enfermedades', sql.NVarChar, enfermedades)
      .input('observaciones', sql.NVarChar, observaciones)
      .query(`
        UPDATE FichaMedica 
        SET tipo_sangre = @tipo_sangre,
            peso = @peso,
            altura = @altura,
            factor_actividad = @factor_actividad,
            alergias = @alergias,
            medicamentos = @medicamentos,
            enfermedades = @enfermedades,
            observaciones = @observaciones
        WHERE cedula = @cedula
      `);

    // 2. Realiza el UPDATE para establecer la fecha de actualización
    const fechaActualizacion = new Date(); // Fecha y hora actuales
    await pool.request()
      .input('cedula', sql.NVarChar, cedula) // Usar la misma cédula para actualizar el registro
      .input('fecha_actualizacion', sql.DateTime, fechaActualizacion)
      .query(`
           UPDATE FichaMedica 
           SET fecha_actualizacion = @fecha_actualizacion
           WHERE cedula = @cedula
         `);

  }
  catch (error) {
    console.error('Error al actualizar la ficha médica:', error);
    throw error;
  }
};

module.exports = {
  getFichaMedicaByCedula,
  crearFichaMedica,
  actualizarFichaMedica
};
