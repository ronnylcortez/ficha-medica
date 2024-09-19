import React from 'react';

const FichaMedica = ({ fichaMedica }) => {
  return (
    <div>
      <h3>Ficha Médica</h3>
      <ul className='ficha-list'>
        <li>Tipo de Sangre: {fichaMedica.tipo_sangre}</li>
        <li>Peso: {fichaMedica.peso}</li>
        <li>Altura: {fichaMedica.altura}</li>
        <li>Presión Arterial: {fichaMedica.presion_arterial}</li>
        <li>Alergias: {fichaMedica.alergias}</li>
        <li>Medicamentos: {fichaMedica.medicamentos}</li>
        <li>Enfermedades: {fichaMedica.enfermedades}</li>
        <li>Observaciones: {fichaMedica.observaciones}</li>
      </ul>
    </div>
  );
};

export default FichaMedica;
