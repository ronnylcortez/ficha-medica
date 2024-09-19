import React from 'react';

const DatosSocio = ({ socio }) => {
  return (
    <div>
      <h3>Datos del usuario</h3>
      <ul className='socio-list'>
        <li>Nombres: {socio.nombre}</li>
        <li>Cédula: {socio.cedula}</li>
        <li>Edad: {socio.edad}</li>
        <li>Grado: {socio.grado}</li>
        <li>Fuerza: {socio.fuerza}</li>
      </ul>
    </div>
  );
};

export default DatosSocio;
