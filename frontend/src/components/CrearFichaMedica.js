import React, { useState } from 'react';
import axios from 'axios';

const CrearFichaMedica = ({ cedula, setShowCreateFicha }) => {
  const [tipoSangre, setTipoSangre] = useState('');
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [presionArterial, setPresionArterial] = useState('');
  const [alergias, setAlergias] = useState('');
  const [medicamentos, setMedicamentos] = useState('');
  const [enfermedades, setEnfermedades] = useState('');
  const [observaciones, setObservaciones] = useState('');
  const [discapacidadFisica, setDiscapacidadFisica] = useState(false);
  const [atencionEspecial, setAtencionEspecial] = useState(false);
  const [calendarioVacunacionCompleto, setCalendarioVacunacionCompleto] = useState(false);
  const [diabetes, setDiabetes] = useState(false);
  const [hipertension, setHipertension] = useState(false);
  const [fracturas, setFracturas] = useState(false);
  const [hernias, setHernias] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    switch (id) {
      case 'tipo_sangre':
        setTipoSangre(value);
        break;
      case 'peso':
        setPeso(value);
        break;
      case 'altura':
        setAltura(value);
        break;
      case 'presion_arterial':
        setPresionArterial(value);
        break;
      case 'alergias':
        setAlergias(value);
        break;
      case 'medicamentos':
        setMedicamentos(value);
        break;
      case 'enfermedades':
        setEnfermedades(value);
        break;
      case 'observaciones':
        setObservaciones(value);
        break;
      case 'discapacidad_fisica':
        setDiscapacidadFisica(checked);
        break;
      case 'atencion_especial':
        setAtencionEspecial(checked);
        break;
      case 'calendario_vacunacion_completo':
        setCalendarioVacunacionCompleto(checked);
        break;
      case 'diabetes':
        setDiabetes(checked);
        break;
      case 'hipertension':
        setHipertension(checked);
        break;
      case 'fracturas':
        setFracturas(checked);
        break;
      case 'hernias':
        setHernias(checked);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/ficha`, {
        cedula,
        tipo_sangre: tipoSangre,
        peso,
        altura,
        presion_arterial: presionArterial,
        alergias,
        medicamentos,
        enfermedades,
        observaciones,
        discapacidad_fisica: discapacidadFisica,
        atencion_especial: atencionEspecial,
        calendario_vacunacion_completo: calendarioVacunacionCompleto,
        diabetes,
        hipertension,
        fracturas,
        hernias
      });
      alert('Ficha médica creada exitosamente.');
      setShowCreateFicha(false);
    } catch (error) {
      console.error('Error al crear la ficha médica:', error);
      setError('No se pudo crear la ficha médica.');
    }
  };

  return (
    <div>
      <h3>Crear Ficha Médica</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='tipo_sangre'>Tipo de Sangre:</label>
          <input
            type='text'
            id='tipo_sangre'
            value={tipoSangre}
            onChange={handleChange}
            placeholder='Ingrese tipo de sangre'
          />
        </div>

        <div>
          <label htmlFor='peso'>Peso (kg):</label>
          <input
            type='number'
            id='peso'
            value={peso}
            onChange={handleChange}
            placeholder='Ingrese peso'
          />
        </div>

        <div>
          <label htmlFor='altura'>Altura (m):</label>
          <input
            type='number'
            id='altura'
            value={altura}
            onChange={handleChange}
            placeholder='Ingrese altura'
          />
        </div>

        <div>
          <label htmlFor='presion_arterial'>Presión Arterial:</label>
          <input
            type='text'
            id='presion_arterial'
            value={presionArterial}
            onChange={handleChange}
            placeholder='Ingrese presión arterial'
          />
        </div>

        <div>
          <label htmlFor='alergias'>Alergias:</label>
          <input
            type='text'
            id='alergias'
            value={alergias}
            onChange={handleChange}
            placeholder='Ingrese alergias'
          />
        </div>

        <div>
          <label htmlFor='medicamentos'>Medicamentos:</label>
          <input
            type='text'
            id='medicamentos'
            value={medicamentos}
            onChange={handleChange}
            placeholder='Ingrese medicamentos'
          />
        </div>

        <div>
          <label htmlFor='enfermedades'>Enfermedades:</label>
          <input
            type='text'
            id='enfermedades'
            value={enfermedades}
            onChange={handleChange}
            placeholder='Ingrese enfermedades'
          />
        </div>

        <div>
          <label htmlFor='discapacidad_fisica'>¿Discapacidad Física?:</label>
          <input
            type='checkbox'
            id='discapacidad_fisica'
            checked={discapacidadFisica}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor='atencion_especial'>¿Atención Especial?:</label>
          <input
            type='checkbox'
            id='atencion_especial'
            checked={atencionEspecial}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor='calendario_vacunacion_completo'>¿Calendario de Vacunación Completo?:</label>
          <input
            type='checkbox'
            id='calendario_vacunacion_completo'
            checked={calendarioVacunacionCompleto}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor='diabetes'>¿Diabetes?:</label>
          <input
            type='checkbox'
            id='diabetes'
            checked={diabetes}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor='hipertension'>¿Hipertensión?:</label>
          <input
            type='checkbox'
            id='hipertension'
            checked={hipertension}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor='fracturas'>¿Fracturas?:</label>
          <input
            type='checkbox'
            id='fracturas'
            checked={fracturas}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor='hernias'>¿Hernias?:</label>
          <input
            type='checkbox'
            id='hernias'
            checked={hernias}
            onChange={handleChange}
          />
        </div>

        <button type='submit'>Guardar</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default CrearFichaMedica;
