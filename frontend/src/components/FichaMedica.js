import React, { useState } from 'react';
import axios from 'axios';
import '../styles/fichaMedica.css';

const FichaMedica = ({ fichaMedica, socio }) => {
  // Estado para manejar los datos de la ficha médica
  const [formData, setFormData] = useState(fichaMedica);

  // Manejo de cambios en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Función para manejar la actualización
  const handleUpdate = async (e) => {
    e.preventDefault(); // Evitar el comportamiento predeterminado del formulario
    try {
      const response = await axios.put(`${process.env.REACT_APP_BACKEND_URL}/api/ficha/${socio.cedula}`, formData);
      console.log('Ficha médica actualizada:', response.data);
      alert('Ficha médica actualizada exitosamente.');
      // Puedes agregar aquí una notificación o redirigir al usuario
    } catch (error) {
      console.error('Error al actualizar la ficha médica:', error);
    }
  };

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
      <form onSubmit={handleUpdate}>
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
              <input 
                className='ficha-medica__value'
                type='number'
                name='peso'
                value={formData.peso}
                onChange={handleChange}
              />
            </li>
            <li className='ficha-medica__item'>
              <div className='ficha-medica__label'>Altura(m)</div>
              <input 
                className='ficha-medica__value'
                type='number'
                name='altura'
                value={formData.altura}
                onChange={handleChange}
              />
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
              <input 
                className='ficha-medica__value'
                type='number'
                name='imc'
                value={formData.imc}
                onChange={handleChange}
              />
            </li>
            <li className='ficha-medica__item'>
              <div className='ficha-medica__label'>Grasa Corporal(%)</div>
              <input 
                className='ficha-medica__value'
                type='number'
                name='imc'
                value={formData.grasa_corporal}
                onChange={handleChange}
              />
            </li>
            <li className='ficha-medica__item'>
              <div className='ficha-medica__label'>Agua(%)</div>
              <input 
                className='ficha-medica__value'
                type='number'
                name='agua'
                value={formData.agua}
                onChange={handleChange}
              />
            </li>
            <li className='ficha-medica__item'>
              <div className='ficha-medica__label'>Músculo Esquelético(%)</div>
              <input 
                className='ficha-medica__value'
                type='number'
                name='musculo_esqueletico'
                value={formData.musculo_esqueletico}
                onChange={handleChange}
              />
            </li>
            <li className='ficha-medica__item'>
              <div className='ficha-medica__label'>Óseo(%)</div>
              <input 
                className='ficha-medica__value'
                type='number'
                name='oseo'
                value={formData.oseo}
                onChange={handleChange}
              />
            </li>
            <li className='ficha-medica__item'>
              <div className='ficha-medica__label'>Sal Inorgánica(lb)</div>
              <input 
                className='ficha-medica__value'
                type='number'
                name='sal_inorganica'
                value={formData.sal_inorganica}
                onChange={handleChange}
              />
            </li>
            <li className='ficha-medica__item'>
              <div className='ficha-medica__label'>Proteínas(%)</div>
              <input 
                className='ficha-medica__value'
                type='number'
                name='proteinas'
                value={formData.proteinas}
                onChange={handleChange}
              />
            </li>
            <li className='ficha-medica__item'>
              <div className='ficha-medica__label'>Grasa subcutánea(lb)</div>
              <input 
                className='ficha-medica__value'
                type='number'
                name='grasa_subcutanea'
                value={formData.grasa_subcutanea}
                onChange={handleChange}
              />
            </li>
            <li className='ficha-medica__item'>
              <div className='ficha-medica__label'>Masa magra(lb)</div>
              <input 
                className='ficha-medica__value'
                type='number'
                name='masa_magra'
                value={formData.masa_magra}
                onChange={handleChange}
              />
            </li>
            <li className='ficha-medica__item'>
              <div className='ficha-medica__label'>Somatotipo</div>
              <input 
                className='ficha-medica__value'
                type='text'
                name='somatotipo'
                value={formData.somatotipo}
                onChange={handleChange}
              />
            </li>
            <li className='ficha-medica__item'>
              <div className='ficha-medica__label'>IMB</div>
              <input 
                className='ficha-medica__value'
                type='number'
                name='imb'
                value={formData.imb}
                onChange={handleChange}
              />
            </li>
            <li className='ficha-medica__item'>
              <div className='ficha-medica__label'>AMR</div>
              <input 
                className='ficha-medica__value'
                type='number'
                name='amr'
                value={formData.amr}
                onChange={handleChange}
              />
            </li>
          </ul>
        </div>
        {/* Botón de actualización */}
        <button type='submit' className='ficha-medica__update-button'>
          Actualizar Ficha Médica
        </button>
      </form>
    </div>
  );
};

export default FichaMedica;
