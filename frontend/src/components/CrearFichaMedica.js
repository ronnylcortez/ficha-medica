import React, { useState } from 'react';
import axios from 'axios';
import '../styles/CrearFichaMedica.css'; // Asegúrate de que la ruta sea correcta

const CrearFichaMedica = ({ cedula, setShowCreateFicha }) => {
  const [tipoSangre, setTipoSangre] = useState('');
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [diabetes, setDiabetes] = useState(false);
  const [hipertension, setHipertension] = useState(false);
  const [fracturas, setFracturas] = useState(false);
  const [hernias, setHernias] = useState(false);
  const [convulsiones, setConvulsiones] = useState('');
  const [alergias, setAlergias] = useState('');
  const [medicamentos, setMedicamentos] = useState('');
  const [enfermedades, setEnfermedades] = useState('');
  const [observaciones, setObservaciones] = useState('');
  const [discapacidadFisica, setDiscapacidadFisica] = useState(false);
  const [atencionEspecial, setAtencionEspecial] = useState(false);
  const [calendarioVacunacionCompleto, setCalendarioVacunacionCompleto] = useState(false);
  const [imc, setImc] = useState('');
  const [grasaCorporal, setGrasaCorporal] = useState('');
  const [agua, setAgua] = useState('');
  const [musculoEsqueletico, setMusculoEsqueletico] = useState('');
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
      case 'convulsiones':
        setConvulsiones(checked);
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
      case 'imc':
        setImc(value);
        break;
      case 'grasa_corporal':
        setGrasaCorporal(value);
        break;
      case 'agua':
        setAgua(value);
        break;
      case 'musculo_esqueletico':
        setMusculoEsqueletico(value);
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
        convulsiones,
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
        hernias,
        imc,
        grasa_corporal: grasaCorporal,
        agua,
        musculo_esqueletico: musculoEsqueletico
      });
      alert('Ficha médica creada exitosamente.');
      setShowCreateFicha(false);
    } catch (error) {
      console.error('Error al crear la ficha médica:', error);
      setError('No se pudo crear la ficha médica.');
    }
  };

  return (
    <div className="crear-ficha-medica-container">
      <h3 className="titulo-ficha">Crear Ficha Médica</h3>
      <form onSubmit={handleSubmit}>
        <section className="seccion">
          <h4 className="subtitulo-seccion">Información Básica</h4>

          <div className="campo">
            <label htmlFor='tipo_sangre' className="label-campo">Tipo de Sangre:</label>
            <input
              type='text'
              id='tipo_sangre'
              value={tipoSangre}
              onChange={handleChange}
              placeholder='Ingrese el tipo de sangre'
              className="input-campo"
            />
          </div>

          <div className="campo">
            <label htmlFor='peso' className="label-campo">Peso (kg):</label>
            <input
              type='number'
              id='peso'
              value={peso}
              onChange={handleChange}
              placeholder='Ingrese peso'
              className="input-campo"
            />
          </div>

          <div className="campo">
            <label htmlFor='altura' className="label-campo">Altura (m):</label>
            <input
              type='number'
              id='altura'
              value={altura}
              onChange={handleChange}
              placeholder='Ingrese altura'
              className="input-campo"
            />
          </div>
        </section>

        <section>
          <h4 className="subtitulo-seccion">Enfermedades y padecimientos</h4>
          <div className="campo">
            <label htmlFor='diabetes' className="label-campo">¿Diabetes?:</label>
            <input
              type='checkbox'
              id='diabetes'
              checked={diabetes}
              onChange={handleChange}
            />
          </div>


          <div className="campo">
            <label htmlFor='hipertension' className="label-campo">¿Hipertensión?:</label>
            <input
              type='checkbox'
              id='hipertension'
              checked={hipertension}
              onChange={handleChange}
            />
          </div>

          <div className="campo">
            <label htmlFor='fracturas' className="label-campo">¿Fracturas?:</label>
            <input
              type='checkbox'
              id='fracturas'
              checked={fracturas}
              onChange={handleChange}
            />
          </div>

          <div className="campo">
            <label htmlFor='hernias' className="label-campo">¿Hernias?:</label>
            <input
              className='input-checkbox'
              type='checkbox'
              id='hernias'
              checked={hernias}
              onChange={handleChange}
            />
          </div>

          <div className="campo">
            <label className="label-campo">Convulsiones</label>
            <input
              className='input-checkbox'
              type='checkbox'
              id='convulsiones'
              checked={convulsiones}
              onChange={handleChange}
            />
          </div>
        </section>

        <section className="seccion">
          <h4 className="subtitulo-seccion">Alergias y Medicamentos</h4>
          <div className="campo">
            <label htmlFor='alergias' className="label-campo">Alergias:</label>
            <input
              type='text'
              id='alergias'
              value={alergias}
              onChange={handleChange}
              placeholder='Ingrese alergias'
              className="input-campo"
            />
          </div>

          <div className="campo">
            <label htmlFor='medicamentos' className="label-campo">Medicamentos:</label>
            <input
              type='text'
              id='medicamentos'
              value={medicamentos}
              onChange={handleChange}
              placeholder='Ingrese medicamentos'
              className="input-campo"
            />
          </div>
        </section>

        <section className="seccion">
          <h4 className="subtitulo-seccion">Historial Médico</h4>
          <div className="campo">
            <label htmlFor='enfermedades' className="label-campo">Enfermedades:</label>
            <input
              type='text'
              id='enfermedades'
              value={enfermedades}
              onChange={handleChange}
              placeholder='Ingrese enfermedades'
              className="input-campo"
            />
          </div>

          <div className="campo">
            <label htmlFor='observaciones' className="label-campo">Observaciones:</label>
            <input
              type='text'
              id='observaciones'
              value={observaciones}
              onChange={handleChange}
              placeholder='Ingrese observaciones'
              className="input-campo"
            />
          </div>
        </section>

        <section className="seccion">
          <h4 className="subtitulo-seccion">Condiciones Especiales</h4>
          <div className="campo">
            <label htmlFor='discapacidad_fisica' className="label-campo">¿Discapacidad Física?:</label>
            <input
              type='checkbox'
              id='discapacidad_fisica'
              checked={discapacidadFisica}
              onChange={handleChange}
            />
          </div>

          <div className="campo">
            <label htmlFor='atencion_especial' className="label-campo">¿Atención Especial?:</label>
            <input
              type='checkbox'
              id='atencion_especial'
              checked={atencionEspecial}
              onChange={handleChange}
            />
          </div>

          <div className="campo">
            <label htmlFor='calendario_vacunacion_completo' className="label-campo">¿Calendario de Vacunación Completo?:</label>
            <input
              type='checkbox'
              id='calendario_vacunacion_completo'
              checked={calendarioVacunacionCompleto}
              onChange={handleChange}
            />
          </div>

        </section>

        <section>
          <h4 className="subtitulo-seccion">Informe aplicación móvil</h4>
          <div className="campo">
            <label className="label-campo">IMC:</label>
            <input
              type='number'
              id='imc'
              value={imc}
              onChange={handleChange}
              placeholder='Ingrese IMC'
              className="input-campo"
            />
          </div>
          <div className="campo">
            <label className="label-campo">Grasa Corporal (%):</label>
            <input
              type='number'
              id='grasa_corporal'
              value={grasaCorporal}
              onChange={handleChange}
              placeholder='Ingrese IMC'
              className="input-campo"
            />
          </div>
          <div className="campo">
            <label className="label-campo">Agua (%):</label>
            <input
              type='number'
              id='agua'
              value={agua}
              onChange={handleChange}
              placeholder='Ingrese el porcentaje'              
              className="input-campo"
            />
          </div>

          <div className="campo">
            <label className="label-campo">Musculo Esqueletico (%):</label>
            <input
              type='number'
              id='musculo_esqueletico'
              value={musculoEsqueletico}
              onChange={handleChange}
              placeholder='Ingrese el porcentaje'
              className="input-campo"
            />
          </div>
        </section>

        <button type='submit' className="btn-enviar">Enviar</button>
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

export default CrearFichaMedica;
