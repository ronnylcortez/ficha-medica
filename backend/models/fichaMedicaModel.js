const sql = require('mssql');
const { poolPromise } = require('../config/db');

const crearFichaMedica = async (data) => {

  // Asegúrate de que la cédula no sea undefined o null
  console.log('Datos recibidos:', data); // Imprime aquí para verificar

  const {
    cedula,
    tipo_sangre,
    peso,
    altura,
    presion_arterial,
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
  // Asegúrate de que la cédula no sea undefined o null
  console.log('Cédula:', cedula);
  try {
    const pool = await poolPromise;
    const result = await pool.request()
      .input('cedula', sql.NVarChar, cedula) // Incluir cédula
      .input('tipo_sangre', sql.NVarChar, tipo_sangre)
      .input('peso', sql.Decimal(5, 2), peso)
      .input('altura', sql.Decimal(5, 2), altura)
      .input('presion_arterial', sql.NVarChar, presion_arterial)
      .input('alergias', sql.NVarChar, alergias)
      .input('medicamentos', sql.NVarChar, medicamentos)
      .input('enfermedades', sql.NVarChar, enfermedades)
      .input('observaciones', sql.NVarChar, observaciones)
      .input('discapacidad_fisica', sql.Bit, discapacidad_fisica)
      .input('atencion_especial', sql.Bit, atencion_especial)
      .input('calendario_vacunacion_completo', sql.Bit, calendario_vacunacion_completo)
      .input('diabetes', sql.Bit, diabetes)
      .input('hipertension', sql.Bit, hipertension)
      .input('fracturas', sql.Bit, fracturas)
      .input('hernias', sql.Bit, hernias)
      .query(`
        INSERT INTO FichaMedica (cedula, tipo_sangre, peso, altura, presion_arterial, alergias, medicamentos,
          enfermedades, observaciones, discapacidad_fisica, atencion_especial, calendario_vacunacion_completo, diabetes, hipertension, fracturas, hernias
        ) VALUES (
          @cedula, @tipo_sangre, @peso, @altura, @presion_arterial, @alergias, @medicamentos, @enfermedades,
          @observaciones, @discapacidad_fisica, @atencion_especial, @calendario_vacunacion_completo, @diabetes, @hipertension, @fracturas, @hernias
        )
      `);

    return result;
  } catch (error) {
    console.error('Error al crear la ficha médica:', error);
    throw error;
  }
};

module.exports = {
  crearFichaMedica
};
