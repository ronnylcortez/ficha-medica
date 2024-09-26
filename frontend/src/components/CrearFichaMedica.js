import React, { useState } from 'react';
import axios from 'axios';
import '../styles/crearFichaMedica.css'; // Asegúrate de que la ruta sea correcta

const CrearFichaMedica = ({ cedula, setShowCreateFicha, socio }) => {
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
  const [imc, setImc] = useState(null);
  const [grasaCorporal, setGrasaCorporal] = useState(null);
  const [agua, setAgua] =  useState(null);
  const [musculoEsqueletico, setMusculoEsqueletico] =  useState(null);
  const [oseo, setOseo] =  useState(null);
  const [salInorganica, setSalInorganica] =  useState(null);
  const [proteinas, setProteinas] =  useState(null);
  const [grasaSubcutanea, setGrasaSubcutanea] =  useState(null);
  const [masaMagra, setMasaMagra] = useState(null);
  const [somatotipo, setSomatotipo] =  useState('');
  const [imb, setImb] =  useState(null);
  const [amr, setAmr] =  useState(null);
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
      case 'oseo':
        setOseo(value);
        break;
      case 'sal_inorganica':
        setSalInorganica(value);
        break;
      case 'proteinas':
        setProteinas(value);
        break;
      case 'grasa_subcutanea':
        setGrasaSubcutanea(value);
        break;
      case 'masa_magra':
        setMasaMagra(value);
        break;
      case 'somatotipo':
        setSomatotipo(value);
        break;
      case 'imb':
        setImb(value);
        break;
      case 'amr':
        setAmr(value);
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
        musculo_esqueletico: musculoEsqueletico,
        oseo,
        sal_inorganica: salInorganica,
        proteinas,
        grasa_subcutanea: grasaSubcutanea,
        masa_magra: masaMagra,
        somatotipo,
        imb,
        amr,

      });
      alert('Ficha médica creada exitosamente.');
      setShowCreateFicha(false);
    } catch (error) {
      console.error('Error al crear la ficha médica:', error);
      setError('No se pudo crear la ficha médica.');
    }
  };

  return (
    <div className="crear-ficha-medica">
      <h2 className='crear-ficha-medica__titulo'>CREAR FICHA MÉDICA</h2>
      <form className="crear-ficha-medica__form" onSubmit={handleSubmit}>
      <p>{socio.nombres}</p>
      <p>{socio.cedula}</p>
        {/* Información Básica */}
        <section className="crear-ficha-medica__seccion crear-ficha-medica__seccion--basica">
          <h4 className="crear-ficha-medica__subtitulo">Información Básica</h4>
  
          <div className="crear-ficha-medica__campo">
            <label htmlFor="tipo_sangre" className="crear-ficha-medica__label">Tipo de Sangre:</label>
            <input
              type="text"
              id="tipo_sangre"
              value={tipoSangre}
              onChange={handleChange}
              placeholder="Ingrese el tipo de sangre"
              className="crear-ficha-medica__input"
              required
            />
          </div>
  
          <div className="crear-ficha-medica__campo">
            <label htmlFor="peso" className="crear-ficha-medica__label">Peso(kg):</label>
            <input
              type="number"
              id="peso"
              value={peso}
              onChange={handleChange}
              placeholder="Ingrese peso"
              className="crear-ficha-medica__input"
              required
            />
          </div>
  
          <div className="crear-ficha-medica__campo">
            <label htmlFor="altura" className="crear-ficha-medica__label">Altura(m):</label>
            <input
              type="number"
              id="altura"
              value={altura}
              onChange={handleChange}
              placeholder="Ingrese altura"
              className="crear-ficha-medica__input"
              required
            />
          </div>
        </section>
  
        {/* Enfermedades y padecimientos */}
        <section className="crear-ficha-medica__seccion crear-ficha-medica__seccion--enfermedades">
          <h4 className="crear-ficha-medica__subtitulo">Enfermedades y padecimientos</h4>
  
          <div className="crear-ficha-medica__campo">
            <label htmlFor="diabetes" className="crear-ficha-medica__label">¿Diabetes?:</label>
            <input
              type="checkbox"
              id="diabetes"
              checked={diabetes}
              onChange={handleChange}
              className="crear-ficha-medica__checkbox"
            />
          </div>
  
          <div className="crear-ficha-medica__campo">
            <label htmlFor="hipertension" className="crear-ficha-medica__label">¿Hipertensión?:</label>
            <input
              type="checkbox"
              id="hipertension"
              checked={hipertension}
              onChange={handleChange}
              className="crear-ficha-medica__checkbox"
            />
          </div>
  
          <div className="crear-ficha-medica__campo">
            <label htmlFor="fracturas" className="crear-ficha-medica__label">¿Fracturas?:</label>
            <input
              type="checkbox"
              id="fracturas"
              checked={fracturas}
              onChange={handleChange}
              className="crear-ficha-medica__checkbox"
            />
          </div>
  
          <div className="crear-ficha-medica__campo">
            <label htmlFor="hernias" className="crear-ficha-medica__label">¿Hernias?:</label>
            <input
              type="checkbox"
              id="hernias"
              checked={hernias}
              onChange={handleChange}
              className="crear-ficha-medica__checkbox"
            />
          </div>
  
          <div className="crear-ficha-medica__campo">
            <label htmlFor="convulsiones" className="crear-ficha-medica__label">Convulsiones:</label>
            <input
              type="checkbox"
              id="convulsiones"
              checked={convulsiones}
              onChange={handleChange}
              className="crear-ficha-medica__checkbox"
            />
          </div>
        </section>
  
        {/* Alergias y Medicamentos */}
        <section className="crear-ficha-medica__seccion crear-ficha-medica__seccion--alergias">
          <h4 className="crear-ficha-medica__subtitulo">Alergias y Medicamentos</h4>
  
          <div className="crear-ficha-medica__campo">
            <label htmlFor="alergias" className="crear-ficha-medica__label">Alergias:</label>
            <input
              type="text"
              id="alergias"
              value={alergias}
              onChange={handleChange}
              placeholder="Ingrese alergias"
              className="crear-ficha-medica__input"
            />
          </div>
  
          <div className="crear-ficha-medica__campo">
            <label htmlFor="medicamentos" className="crear-ficha-medica__label">Medicamentos:</label>
            <input
              type="text"
              id="medicamentos"
              value={medicamentos}
              onChange={handleChange}
              placeholder="Ingrese medicamentos"
              className="crear-ficha-medica__input"
            />
          </div>
        </section>
  
        {/* Historial Médico */}
        <section className="crear-ficha-medica__seccion crear-ficha-medica__seccion--historial">
          <h4 className="crear-ficha-medica__subtitulo">Historial Médico</h4>
  
          <div className="crear-ficha-medica__campo">
            <label htmlFor="enfermedades" className="crear-ficha-medica__label">Enfermedades:</label>
            <input
              type="text"
              id="enfermedades"
              value={enfermedades}
              onChange={handleChange}
              placeholder="Ingrese enfermedades"
              className="crear-ficha-medica__input"
            />
          </div>
  
          <div className="crear-ficha-medica__campo">
            <label htmlFor="observaciones" className="crear-ficha-medica__label">Observaciones:</label>
            <input
              type="text"
              id="observaciones"
              value={observaciones}
              onChange={handleChange}
              placeholder="Ingrese observaciones"
              className="crear-ficha-medica__input"
            />
          </div>
        </section>
  
        {/* Condiciones Especiales */}
        <section className="crear-ficha-medica__seccion crear-ficha-medica__seccion--condiciones">
          <h4 className="crear-ficha-medica__subtitulo">Condiciones Especiales</h4>
  
          <div className="crear-ficha-medica__campo">
            <label htmlFor="discapacidad_fisica" className="crear-ficha-medica__label">¿Discapacidad Física?:</label>
            <input
              type="checkbox"
              id="discapacidad_fisica"
              checked={discapacidadFisica}
              onChange={handleChange}
              className="crear-ficha-medica__checkbox"
            />
          </div>
  
          <div className="crear-ficha-medica__campo">
            <label htmlFor="atencion_especial" className="crear-ficha-medica__label">¿Atención Especial?:</label>
            <input
              type="checkbox"
              id="atencion_especial"
              checked={atencionEspecial}
              onChange={handleChange}
              className="crear-ficha-medica__checkbox"
            />
          </div>
  
          <div className="crear-ficha-medica__campo">
            <label htmlFor="calendario_vacunacion_completo" className="crear-ficha-medica__label">¿Calendario de Vacunación Completo?:</label>
            <input
              type="checkbox"
              id="calendario_vacunacion_completo"
              checked={calendarioVacunacionCompleto}
              onChange={handleChange}
              className="crear-ficha-medica__checkbox"
            />
          </div>
        </section>
  
        {/* Informe aplicación móvil */}
        <section className="crear-ficha-medica__seccion crear-ficha-medica__seccion--informe">
          <h4 className="crear-ficha-medica__subtitulo">Informe aplicación móvil</h4>
  
          <div className="crear-ficha-medica__campo">
            <label htmlFor="imc" className="crear-ficha-medica__label">IMC:</label>
            <input
              type="number"
              id="imc"
              value={imc}
              onChange={handleChange}
              placeholder="Ingrese el valor"
              className="crear-ficha-medica__input"
            />
          </div>
          <div className="crear-ficha-medica__campo">
            <label className="crear-ficha-medica__label">Grasa Corporal(%):</label>
            <input
              type='number'
              id='grasa_corporal'
              value={grasaCorporal}
              onChange={handleChange}
              placeholder='Ingrese el valor'
              className="crear-ficha-medica__input"
            />
          </div>
          <div className="crear-ficha-medica__campo">
            <label className="crear-ficha-medica__label">Agua(%):</label>
            <input
              type='number'
              id='agua'
              value={agua}
              onChange={handleChange}
              placeholder='Ingrese el valor'
              className="crear-ficha-medica__input"
            />
          </div>

          <div className="crear-ficha-medica__campo">
            <label className="crear-ficha-medica__label">Musculo Esqueletico(%):</label>
            <input
              type='number'
              id='musculo_esqueletico'
              value={musculoEsqueletico}
              onChange={handleChange}
              placeholder='Ingrese el valor'
              className="crear-ficha-medica__input"
            />
          </div>

          <div className="crear-ficha-medica__campo">
            <label className="crear-ficha-medica__label">Óseo(%):</label>
            <input
              type='number'
              id='oseo'
              value={oseo}
              onChange={handleChange}
              placeholder='Ingrese el valor'
              className="crear-ficha-medica__input"
            />
          </div>

          <div className="crear-ficha-medica__campo">
            <label className="crear-ficha-medica__label">Sal Inorgánica(lb):</label>
            <input
              type='number'
              id='sal_inorganica'
              value={salInorganica}
              onChange={handleChange}
              placeholder='Ingrese el valor'
              className="crear-ficha-medica__input"
            />
          </div>

          <div className="crear-ficha-medica__campo">
            <label className="crear-ficha-medica__label">Proteínas(%):</label>
            <input
              type='number'
              id='proteinas'
              value={proteinas}
              onChange={handleChange}
              placeholder='Ingrese el valor'
              className="crear-ficha-medica__input"
            />
          </div>

          <div className="crear-ficha-medica__campo">
            <label className="crear-ficha-medica__label">Grasa subcutánea(%):</label>
            <input
              type='number'
              id='grasa_subcutanea'
              value={grasaSubcutanea}
              onChange={handleChange}
              placeholder='Ingrese el valor'
              className="crear-ficha-medica__input"
            />
          </div>

          <div className="crear-ficha-medica__campo">
            <label className="crear-ficha-medica__label">Masa magra(lb):</label>
            <input
              type='number'
              id='masa_magra'
              value={masaMagra}
              onChange={handleChange}
              placeholder='Ingrese el valor'
              className="crear-ficha-medica__input"
            />
          </div>

          <div className="crear-ficha-medica__campo">
            <label className="crear-ficha-medica__label">Somatotipo:</label>
            <input
              type='number'
              id='somatotipo'
              value={somatotipo}
              onChange={handleChange}
              placeholder='Ingrese el texto'
              className="crear-ficha-medica__input"
            />
          </div>

          <div className="crear-ficha-medica__campo">
            <label className="crear-ficha-medica__label">IMB:</label>
            <input
              type='number'
              id='imb'
              value={imb}
              onChange={handleChange}
              placeholder='Ingrese el valor'
              className="crear-ficha-medica__input"
            />
          </div>

          <div className="crear-ficha-medica__campo">
            <label className="crear-ficha-medica__label">AMR:</label>
            <input
              type='number'
              id='amr'
              value={amr}
              onChange={handleChange}
              placeholder='Ingrese el valor'
              className="crear-ficha-medica__input"
            />
          </div>
        </section>
  
        <button type="submit" className="crear-ficha-medica__btn">Enviar</button>
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

export default CrearFichaMedica;
