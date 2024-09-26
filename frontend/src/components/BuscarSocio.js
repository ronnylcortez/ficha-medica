import React, { useState, useRef } from 'react';
import axios from 'axios';
import CrearFichaMedica from './CrearFichaMedica'; // Asegúrate de que la ruta sea correcta
import FichaMedica from './FichaMedica';
import '../styles/BuscarSocio.css';

const BuscarSocio = () => {
  const [cedula, setCedula] = useState('');
  const [socio, setSocio] = useState(null);
  const [error, setError] = useState(null);
  const [showCreateFicha, setShowCreateFicha] = useState(false); // Estado para mostrar el formulario de creación de ficha médica
  const [fichaMedica, setFichaMedica] = useState(null); // Estado para la ficha médica

  const handleInputChange = (e) => {
    setCedula(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSocio(null);
    setFichaMedica(null); // Reseteamos la ficha médica
    setError(null);
    setShowCreateFicha(false);
    
    if (!cedula.trim()) {
      setError('Por favor, ingrese un número de cédula');
      return;
    }

    try {
      // Realizamos la solicitud para obtener el socio
      const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/socios/${cedula}`);
      const socioData = response.data;
      setSocio(socioData);
      setCedula('');

      // Ahora verificamos si tiene una ficha médica
      try {
        const fichaData = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/ficha/${cedula}`);
        setFichaMedica(fichaData.data); // Si la ficha médica existe, la guardamos en el estado
        console.log(fichaMedica);
      } catch (fichaError) {
        if (fichaError.response && fichaError.response.status === 404) {
          // Preguntamos al usuario si desea crear una nueva ficha médica
          const confirmCreate = window.confirm('El socio no tiene una ficha médica. ¿Desea crear una nueva?');
          if (confirmCreate) {
            setShowCreateFicha(true);
          }
        } else {
          console.error('Error al obtener la ficha médica:', fichaError);
          setError('Error al obtener la ficha médica');
        }
      }

    } catch (error) {
      if (error.response && error.response.status === 404) {
        setError('El socio con esa cédula no existe.')
      } else {
        console.error('Error al obtener el socio:', error);
        setError('No se pudo obtener la información del socio');
      }
      setSocio(null);
    }
  };


  return (
    <div className='form-container'>
      <form className='form' onSubmit={handleSubmit}>
        {/* Campo de entrada para la cédula */}
        <div className='form__input-container'>
          <input
            className='form__input'
            type='text'
            id='cedula'
            value={cedula}
            onChange={handleInputChange}
            placeholder="Ingrese la cédula"
            minLength={10}
            maxLength={13}
          />
        <button className='form__button' type="submit">Consultar ficha médica</button>
        </div>
      </form>

      {error && <p className="form__error">{error}</p>}

      {socio && showCreateFicha && (
        <CrearFichaMedica cedula={socio.cedula} setShowCreateFicha={setShowCreateFicha} socio={socio} />
      )}

      {socio && fichaMedica && (
        <FichaMedica fichaMedica={fichaMedica} socio={socio} />
      )}
    </div>
  );
};

export default BuscarSocio;
