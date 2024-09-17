import React, { useState, useRef } from 'react';
import axios from 'axios';
import '../styles/buscarSocio.css'; // Importa el archivo CSS específico para el componente

const BuscarSocio = () => {

  const [numTarjeta, setNumTarjeta] = useState('');
  const [socio, setSocio] = useState(null);
  const [error, setError] = useState(null);
  const [inputFocused, setInputFocused] = useState(false); // Estado para controlar el enfoque del campo
  const inputRef = useRef(null); // Referencia al campo de entrada

  const handleInputChange = (e) => {
    setNumTarjeta(e.target.value); // Captura el valor del input
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Previene la recarga de la página (Evita que el formulario se envíe automáticamente)

    // Limpia el estado antes de hacer la solicitud
    setSocio(null);
    setError(null);

    try {
      const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/socios/tarjeta/${numTarjeta}`);
      setSocio(response.data);
      setNumTarjeta(''); // Borra el valor del campo de entrada después de obtener la información
      if (inputRef.current) {
        inputRef.current.blur(); // Desenfoca el campo de entrada
      }
    } catch (error) {
      console.error('Error al obtener el socio:', error);
      setError('No se pudo obtener la información del socio');
      setSocio(null);
    }
  };

  const handleReadButtonClick = () => {
    // Limpia el estado antes de enfocar el campo
    setSocio(null);
    setError(null);

    // Enfoca el campo de entrada para que el lector de tarjetas pueda escribir en él
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleFocus = () => {
    setInputFocused(true); // Marca el campo como enfocado
  };

  const handleBlur = () => {
    setInputFocused(false); // Marca el campo como desenfocado
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          id='tarjeta'
          value={numTarjeta}
          onChange={handleInputChange}
          onFocus={handleFocus} // Maneja el enfoque del campo
          onBlur={handleBlur} // Maneja la pérdida de enfoque
          ref={inputRef} // Asigna la referencia al campo de entrada
          className="hidden-input" // Aplica la clase para ocultar el campo
        />
        <button type="button" onClick={handleReadButtonClick}>
          Registrar
        </button>
      </form>

      {inputFocused && <p>El campo está activo. Por favor, acérque la tarjeta.</p>} {/* Mensaje cuando el campo está enfocado */}

      {error && <p>{error}</p>}

      {socio && (
        <div>
          <h2>Usuario registrado</h2>
          <h3>Datos del usuario</h3>
          <ul className='socio-list'>
            <li>Nombres: {socio.nombres}</li>
            <li>Cédula: {socio.cedula}</li>
            <li>Edad: {socio.edad}</li>
            <li>Grado: {socio.grado}</li>
            <li>Fuerza: {socio.fuerza}</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default BuscarSocio;
