import React from 'react';
import '../styles/fichaMedica.css';

const FichaMedica = ({ fichaMedica, socio }) => {
  return (
    <div className="ficha-medica-container">
      <h3>FICHA MÉDICA</h3>
      
      {/* Datos Personales */}
      <h4>Datos Personales</h4>
      <ul className='content'>
        <li>
          <div className="label-box">Nombres:</div>
          <div className="value-box">{socio.nombres}</div>
        </li>
        <li>
          <div className="label-box">C. I.:</div>
          <div className="value-box">{socio.cedula}</div>
        </li>
        <li>
          <div className="label-box">Edad:</div>
          <div className="value-box">{socio.edad}</div>
        </li>
        <li>
          <div className="label-box">Grado:</div>
          <div className="value-box">{socio.grado}</div>
        </li>
        <li>
          <div className="label-box">Fuerza:</div>
          <div className="value-box">{socio.fuerza}</div>
        </li>
        <li>
          <div className="label-box">Dirección:</div>
          <div className="value-box">{socio.direccion}</div>
        </li>
        <li>
          <div className="label-box">Teléfono:</div>
          <div className="value-box">{socio.celular}</div>
        </li>
      </ul>

      {/* Información médica */}
      <h4>Datos Médicos</h4>
      <ul className='content'>
        <li>
          <div className="label-box">Peso:</div>
          <div className="value-box">{fichaMedica.peso}</div>
        </li>
        <li>
          <div className="label-box">Altura:</div>
          <div className="value-box">{fichaMedica.altura}</div>
        </li>
        <li>
          <div className="label-box">Presión Arterial:</div>
          <div className="value-box">{fichaMedica.presion_arterial}</div>
        </li>
      </ul>

      {/* Historial médico */}
      <h4>Historial Médico</h4>
      <ul className='content'>
        <li>
          <div className="label-box">Alergias:</div>
          <div className="value-box">{fichaMedica.alergias}</div>
        </li>
        <li>
          <div className="label-box">Medicamentos:</div>
          <div className="value-box">{fichaMedica.medicamentos}</div>
        </li>
        <li>
          <div className="label-box">Enfermedades:</div>
          <div className="value-box">{fichaMedica.enfermedades}</div>
        </li>
        <li>
          <div className="label-box">Observaciones:</div>
          <div className="value-box">{fichaMedica.observaciones}</div>
        </li>
      </ul>

      {/* Necesidades Especiales */}
      <h4>Necesidades Especiales</h4>
      <ul className='content'>
        <li>
          <div className="label-box">Discapacidad Física:</div>
          <div className="value-box">{fichaMedica.discapacidadFisica ? 'Sí' : 'No'}</div>
        </li>
        <li>
          <div className="label-box">Atención Especial:</div>
          <div className="value-box">{fichaMedica.atencionEspecial ? 'Sí' : 'No'}</div>
        </li>
        <li>
          <div className="label-box">Calendario de Vacunación Completo:</div>
          <div className="value-box">{fichaMedica.calendarioVacunacionCompleto ? 'Sí' : 'No'}</div>
        </li>
      </ul>

      {/* Otras Condiciones */}
      <h4>Otras Condiciones</h4>
      <ul className='content'>
        <li>
          <div className="label-box">Diabetes:</div>
          <div className="value-box">{fichaMedica.diabetes ? 'Sí' : 'No'}</div>
        </li>
        <li>
          <div className="label-box">Hipertensión:</div>
          <div className="value-box">{fichaMedica.hipertension ? 'Sí' : 'No'}</div>
        </li>
        <li>
          <div className="label-box">Fracturas:</div>
          <div className="value-box">{fichaMedica.fracturas ? 'Sí' : 'No'}</div>
        </li>
        <li>
          <div className="label-box">Hernias:</div>
          <div className="value-box">{fichaMedica.hernias ? 'Sí' : 'No'}</div>
        </li>
      </ul>
    </div>
  );
};

export default FichaMedica;
