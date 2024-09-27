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

  const {
    cedula,
    tipo_sangre,
    peso,
    altura,
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
      .input('peso', sql.Decimal(5, 2), parseFloat(peso.toString().replace(',', '.')))
      .input('altura', sql.Decimal(5, 2), parseFloat(altura.toString().replace(',', '.')))
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
        INSERT INTO FichaMedica (cedula, tipo_sangre, peso, altura, diabetes, hipertension, fracturas, hernias, convulsiones, alergias, medicamentos,
          enfermedades, observaciones, discapacidad_fisica, atencion_especial, calendario_vacunacion_completo) 
          VALUES (
          @cedula, @tipo_sangre, @peso, @altura, @diabetes, @hipertension, @fracturas, @hernias, @convulsiones, @alergias, @medicamentos, @enfermedades,
          @observaciones, @discapacidad_fisica, @atencion_especial, @calendario_vacunacion_completo)
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
    await pool.request()
      .input('cedula', sql.NVarChar, cedula) // Para encontrar la ficha por cédula
      .input('tipo_sangre', sql.NVarChar, tipo_sangre)
      .input('peso', sql.Decimal(5, 2), parseFloat(peso.toString().replace(',', '.')))
      .input('altura', sql.Decimal(5, 2), parseFloat(altura.toString().replace(',', '.')))
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
      .input('musculo_esqueletico', sql.Decimal(3, 2), musculo_esqueletico)
      .input('oseo', sql.Decimal(3, 2), oseo)
      .input('sal_inorganica', sql.Decimal(3, 2), sal_inorganica)
      .input('proteinas', sql.Decimal(3, 2), proteinas)
      .input('grasa_subcutanea', sql.Decimal(3, 2), grasa_subcutanea)
      .input('masa_magra', sql.Decimal(3, 2), masa_magra)
      .input('imb', sql.Decimal(3, 2), imb)
      .input('amr', sql.Decimal(3, 2), amr)
      .query(`
        UPDATE FichaMedica 
        SET tipo_sangre = @tipo_sangre,
            peso = @peso,
            altura = @altura,
            diabetes = @diabetes,
            hipertension = @hipertension,
            fracturas = @fracturas,
            hernias = @hernias,
            convulsiones = @convulsiones,
            alergias = @alergias,
            medicamentos = @medicamentos,
            enfermedades = @enfermedades,
            observaciones = @observaciones,
            discapacidad_fisica = @discapacidad_fisica,
            atencion_especial = @atencion_especial,
            calendario_vacunacion_completo = @calendario_vacunacion_completo
        WHERE cedula = @cedula
      `);
  } catch (error) {
    console.error('Error al actualizar la ficha médica:', error);
    throw error;
  }
};

module.exports = {
  getFichaMedicaByCedula,
  crearFichaMedica,
  actualizarFichaMedica
};
