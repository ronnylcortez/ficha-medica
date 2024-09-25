import React from 'react';
import '../styles/FichaMedica.css';

const FichaMedica = ({ fichaMedica, socio }) => {
  return (
    <div className='ficha-medica'>
      <h2 className='ficha-medica__title'>FICHA MÉDICA</h2>

      <div className='ficha-medica__section'>
        <h3 className='ficha-medica__subtitle'>INFORMACIÓN PERSONAL</h3>
        {/* Datos Personales */}
        <h4 className='ficha-medica__subsection'>DATOS PERSONALES</h4>
        <ul className='ficha-medica__content'>
          <li className='ficha-medica__item'>
            <div className='ficha-medica__label'>Nombres</div>
            <div className='ficha-medica__value'>{socio.nombres}</div>
          </li>
          <li className='ficha-medica__item'>
            <div className='ficha-medica__label'>C. I.</div>
            <div className='ficha-medica__value'>{socio.cedula}</div>
          </li>
          <li className='ficha-medica__item'>
            <div className='ficha-medica__label'>Edad</div>
            <div className='ficha-medica__value'>{socio.edad}</div>
          </li>
          <li className='ficha-medica__item'>
            <div className='ficha-medica__label'>Grado</div>
            <div className='ficha-medica__value'>{socio.grado}</div>
          </li>
          <li className='ficha-medica__item'>
            <div className='ficha-medica__label'>Fuerza</div>
            <div className='ficha-medica__value'>{socio.fuerza}</div>
          </li>
        </ul>
        <h4 className='ficha-medica__subsection'>DATOS DE CONTACTO</h4>
        <ul className='ficha-medica__content'>
          <li className='ficha-medica__item'>
            <div className='ficha-medica__label'>Dirección</div>
            <div className='ficha-medica__value'>{socio.direccion}</div>
          </li>
          <li className='ficha-medica__item'>
            <div className='ficha-medica__label'>Teléfono</div>
            <div className='ficha-medica__value'>{socio.celular}</div>
          </li>
        </ul>
      </div>

      {/* Información médica */}
      <div className='ficha-medica__section'>
        <h3 className='ficha-medica__subtitle'>INFORMACIÓN MÉDICA</h3>
        <h4 className='ficha-medica__subsection'>DATOS BÁSICOS</h4>
        <ul className='ficha-medica__content'>
          <li className='ficha-medica__item'>
            <div className='ficha-medica__label'>Grupo sanguíneo</div>
            <div className='ficha-medica__value'>{fichaMedica.tipo_sangre}</div>
          </li>
          <li className='ficha-medica__item'>
            <div className='ficha-medica__label'>Peso (lb)</div>
            <div className='ficha-medica__value'>{fichaMedica.peso}</div>
          </li>
          <li className='ficha-medica__item'>
            <div className='ficha-medica__label'>Altura (m)</div>
            <div className='ficha-medica__value'>{fichaMedica.altura}</div>
          </li>
        </ul>

        {/* Enfermedades y padecimientos */}
        <h4 className='ficha-medica__subsection'>ENFERMEDADES / PADECIMIENTOS</h4>
        <ul className='ficha-medica__content'>
          <li className='ficha-medica__item'>
            <div className='ficha-medica__label'>Diabetes</div>
            <div className='ficha-medica__value'>{fichaMedica.diabetes ? 'Sí' : 'No'}</div>
          </li>
          <li className='ficha-medica__item'>
            <div className='ficha-medica__label'>Hipertensión</div>
            <div className='ficha-medica__value'>{fichaMedica.hipertension ? 'Sí' : 'No'}</div>
          </li>
          <li className='ficha-medica__item'>
            <div className='ficha-medica__label'>Fracturas</div>
            <div className='ficha-medica__value'>{fichaMedica.fracturas ? 'Sí' : 'No'}</div>
          </li>
          <li className='ficha-medica__item'>
            <div className='ficha-medica__label'>Hernias</div>
            <div className='ficha-medica__value'>{fichaMedica.hernias ? 'Sí' : 'No'}</div>
          </li>
          <li className='ficha-medica__item'>
            <div className='ficha-medica__label'>Convulsiones</div>
            <div className='ficha-medica__value'>{fichaMedica.diabetes ? 'Sí' : 'No'}</div>
          </li>
        </ul>

        {/* Historial médico */}
        <h4 className='ficha-medica__subsection'>HISTORIAL MÉDICO</h4>
        <ul className='ficha-medica__content'>
          <li className='ficha-medica__item'>
            <div className='ficha-medica__label'>Alergias</div>
            <div className='ficha-medica__value'>{fichaMedica.alergias}</div>
          </li>
          <li className='ficha-medica__item'>
            <div className='ficha-medica__label'>Medicamentos</div>
            <div className='ficha-medica__value'>{fichaMedica.medicamentos}</div>
          </li>
          <li className='ficha-medica__item'>
            <div className='ficha-medica__label'>Otras enfermedades</div>
            <div className='ficha-medica__value'>{fichaMedica.enfermedades}</div>
          </li>
          <li className='ficha-medica__item'>
            <div className='ficha-medica__label'>Observaciones</div>
            <div className='ficha-medica__value'>{fichaMedica.observaciones}</div>
          </li>
          <li className='ficha-medica__item'>
            <div className='ficha-medica__label'>Calendario de Vacunación Completo</div>
            <div className='ficha-medica__value'>{fichaMedica.calendarioVacunacionCompleto ? 'Sí' : 'No'}</div>
          </li>
        </ul>

        {/* Necesidades Especiales */}
        <h4 className='ficha-medica__subsection'>NECESIDADES ESPECIALES</h4>
        <ul className='ficha-medica__content'>
          <li className='ficha-medica__item'>
            <div className='ficha-medica__label'>Discapacidad Física</div>
            <div className='ficha-medica__value'>{fichaMedica.discapacidad_fisica ? 'Sí' : 'No'}</div>
          </li>
          <li className='ficha-medica__item'>
            <div className='ficha-medica__label'>Atención Especial</div>
            <div className='ficha-medica__value'>{fichaMedica.atencionEspecial ? 'Sí' : 'No'}</div>
          </li>
        </ul>


        {/* Informe de aplicación */}
        <h4 className='ficha-medica__subsection'>INFORME APLICACIÓN MÓVIL</h4>
        <ul className='ficha-medica__content'>
          <li className='ficha-medica__item'>
            <div className='ficha-medica__label'>IMC</div>
            <div className='ficha-medica__value'>{fichaMedica.imc}</div>
          </li>
          <li className='ficha-medica__item'>
            <div className='ficha-medica__label'>Grasa Corporal</div>
            <div className='ficha-medica__value'>{fichaMedica.grasa_corporal}</div>
          </li>
          <li className='ficha-medica__item'>
            <div className='ficha-medica__label'>Agua</div>
            <div className='ficha-medica__value'>{fichaMedica.agua}</div>
          </li>
          <li className='ficha-medica__item'>
            <div className='ficha-medica__label'>Músculo Esquelético</div>
            <div className='ficha-medica__value'>{fichaMedica.musculo_esqueletico}</div>
          </li>
          <li className='ficha-medica__item'>
            <div className='ficha-medica__label'>Óseo</div>
            <div className='ficha-medica__value'>{fichaMedica.oseo}</div>
          </li>
          <li className='ficha-medica__item'>
            <div className='ficha-medica__label'>Sal Inorgánica</div>
            <div className='ficha-medica__value'>{fichaMedica.sal_inorganica}</div>
          </li>
          <li className='ficha-medica__item'>
            <div className='ficha-medica__label'>Proteínas</div>
            <div className='ficha-medica__value'>{fichaMedica.proteinas}</div>
          </li>
          <li className='ficha-medica__item'>
            <div className='ficha-medica__label'>Grasa subcutánea</div>
            <div className='ficha-medica__value'>{fichaMedica.grasa_subcutanea}</div>
          </li>
          <li className='ficha-medica__item'>
            <div className='ficha-medica__label'>Masa magra</div>
            <div className='ficha-medica__value'>{fichaMedica.masa_magra}</div>
          </li>
          <li className='ficha-medica__item'>
            <div className='ficha-medica__label'>Somatotipo</div>
            <div className='ficha-medica__value'>{fichaMedica.somatotipo}</div>
          </li>
          <li className='ficha-medica__item'>
            <div className='ficha-medica__label'>IMB:</div>
            <div className='ficha-medica__value'>{fichaMedica.imb}</div>
          </li>
          <li className='ficha-medica__item'>
            <div className='ficha-medica__label'>AMR:</div>
            <div className='ficha-medica__value'>{fichaMedica.amr}</div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FichaMedica;
