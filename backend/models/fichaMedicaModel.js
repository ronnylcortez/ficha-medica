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
    hernias,
    imc,
    grasa_corporal,
    agua,
    musculo_esqueletico,
    oseo,
    sal_inorganica,
    proteinas,
    grasa_subcutanea,
    masa_magra,
    somatotipo,
    imb,
    amr
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
      .input('imc', sql.Decimal(3, 2), imc)
      .input('grasa_corporal', sql.Decimal(3, 2), grasa_corporal)
      .input('agua', sql.Decimal(3, 2), agua)
      .input('musculo_esqueletico', sql.Decimal(3, 2), musculo_esqueletico)
      .input('oseo', sql.Decimal(3, 2), oseo)
      .input('sal_inorganica', sql.Decimal(3, 2), sal_inorganica)
      .input('proteinas', sql.Decimal(3, 2), proteinas)
      .input('grasa_subcutanea', sql.Decimal(3, 2), grasa_subcutanea)
      .input('masa_magra', sql.Decimal(3, 2), masa_magra)
      .input('somatotipo', sql.NVarChar, somatotipo)
      .input('imb', sql.Decimal(3, 2), imb)
      .input('amr', sql.Decimal(3, 2), amr)
      .query(`
        INSERT INTO FichaMedica (cedula, tipo_sangre, peso, altura, diabetes, hipertension, fracturas, hernias, convulsiones, alergias, medicamentos,
          enfermedades, observaciones, discapacidad_fisica, atencion_especial, calendario_vacunacion_completo, imc, grasa_corporal, agua, musculo_esqueletico,
          oseo, sal_inorganica, proteinas, grasa_subcutanea, masa_magra, somatotipo, imb, amr) 
          VALUES (
          @cedula, @tipo_sangre, @peso, @altura, @diabetes, @hipertension, @fracturas, @hernias, @convulsiones, @alergias, @medicamentos, @enfermedades,
          @observaciones, @discapacidad_fisica, @atencion_especial, @calendario_vacunacion_completo, @imc, @grasa_corporal, @agua, @musculo_esqueletico,
          @oseo, @sal_inorganica, @proteinas, @grasa_subcutanea, @masa_magra, @somatotipo, @imb, @amr)
      `);

    return result;
  } catch (error) {
    console.error('Error al crear la ficha médica:', error);
    throw error;
  }
};

module.exports = {
  getFichaMedicaByCedula,
  crearFichaMedica
};
