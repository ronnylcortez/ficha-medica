import React, { useState, useRef } from 'react';

const BuscarFormulario = ({ onBuscar }) => {
  const [cedula, setCedula] = useState('');
  const inputRef = useRef(null);

  const handleInputChange = (e) => {
    setCedula(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onBuscar(cedula);
    setCedula('');
    if (inputRef.current) {
      inputRef.current.blur();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={cedula}
        onChange={handleInputChange}
        ref={inputRef}
        placeholder="Ingrese la cédula"
      />
      <button type="submit">Buscar por Cédula</button>
    </form>
  );
};

export default BuscarFormulario;
