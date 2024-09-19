
import '../styles/buscarSocio.css'
import React, { useState, useRef } from 'react';
import axios from 'axios';
import CrearFichaMedica from './CrearFichaMedica'; // Asegúrate de que la ruta sea correcta

const BuscarSocio = () => {
  const [numTarjeta, setNumTarjeta] = useState('');
  const [cedula, setCedula] = useState('');
  const [socio, setSocio] = useState(null);
  const [error, setError] = useState(null);
  const [inputFocused, setInputFocused] = useState(false);
  const [searchType, setSearchType] = useState(''); // Estado para saber si es tarjeta o cédula
  const [showCreateFicha, setShowCreateFicha] = useState(false); // Estado para mostrar el formulario de creación de ficha médica
  const [showConfirmCreate, setShowConfirmCreate] = useState(false); // Estado para mostrar la confirmación de creación de ficha médica
  const inputRef = useRef(null);

  const handleInputChange = (e) => {
    if (searchType === 'cedula') {
      setCedula(e.target.value);
    } else {
      setNumTarjeta(e.target.value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSocio(null);
    setError(null);
    setShowConfirmCreate(false); // Oculta el diálogo de confirmación

    try {
      let response;
      if (searchType === 'tarjeta' && numTarjeta) {
        response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/socios/tarjeta/${numTarjeta}`);
        setNumTarjeta('');
      } else if (searchType === 'cedula' && cedula) {
        response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/socios/${cedula}`);
        setCedula('');
      } else {
        setError('Por favor, ingrese un número de tarjeta o cédula.');
        return;
      }

      setSocio(response.data);

      // Verifica si el socio tiene una ficha médica
      if (!response.data.fichaMedica) {
        // Muestra el diálogo de confirmación
        const confirmCreate = window.confirm('El socio no tiene una ficha médica. ¿Desea crear una nueva?');
        if (confirmCreate) {
          setShowCreateFicha(true);
        } else {
          setShowCreateFicha(false);
        }
      } else {
        setShowCreateFicha(false);
      }

      if (inputRef.current) {
        inputRef.current.blur();
      }
    } catch (error) {
      console.error('Error al obtener el socio:', error);
      setError('No se pudo obtener la información del socio');
      setSocio(null);
    }
  };

  const handleReadButtonClick = () => {
    setSearchType('tarjeta'); // Establecer búsqueda por tarjeta
    setSocio(null);
    setError(null);
    setShowCreateFicha(false);
    setShowConfirmCreate(false);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleCedulaButtonClick = () => {
    setSearchType('cedula'); // Establecer búsqueda por cédula
    setShowCreateFicha(false);
    setSocio(null);
    setError(null);
  };

  const handleFocus = () => {
    setInputFocused(true);
  };

  const handleBlur = () => {
    setInputFocused(false);
  };

  return (
    <div>
      <div>
        <button type="button" onClick={handleReadButtonClick}>
          Buscar por Tarjeta
        </button>
        <button type="button" onClick={handleCedulaButtonClick}>
          Buscar por Cédula
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Campo de entrada para la tarjeta */}
        {searchType === 'tarjeta' && (
          <div>
            <input
              type='text'
              id='tarjeta'
              value={numTarjeta}
              onChange={handleInputChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              ref={inputRef}
              placeholder="Acérque la tarjeta"
              className="hidden-input"
            />
            {inputFocused && <p>El campo está activo. Por favor, acérque la tarjeta.</p>}
          </div>
        )}

        {/* Campo de entrada para la cédula */}
        {searchType === 'cedula' && (
          <div>
            <input
              type='text'
              id='cedula'
              value={cedula}
              onChange={handleInputChange}
              placeholder="Ingrese cédula"
            />
          </div>
        )}

        {/* Mostrar botón Buscar solo si se ha seleccionado cédula */}
        {searchType === 'cedula' && <button type="submit">Buscar</button>}
      </form>

      {error && <p>{error}</p>}

      {socio && showCreateFicha && (
        <CrearFichaMedica cedula={cedula} setShowCreateFicha={setShowCreateFicha} />
      )}

      {socio && socio.fichaMedica && (
        <div>
          <h3>FICHA MÉDICA</h3>
          <ul className='socio-list'>
            <li>Nombres: {socio.nombres}</li>
            <li>C. I.: {socio.cedula}</li>
            <li>Edad: {socio.edad}</li>
            <li>Grado: {socio.grado}</li>
            <li>Fuerza: {socio.fuerza}</li>
            <li>Dirección: {socio.direccion}</li>
            <li>Teléfono: {socio.celular}</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default BuscarSocio;
