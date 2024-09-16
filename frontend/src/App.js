import './App.css';
import Socio from './components/Socio';

function App() {

  const numTarjeta = '9681861 147 48069'; // Ejemplo de número de tarjeta
  return (
    <div className="App">
      <Socio numTarjeta={numTarjeta}/>
    </div>
  );
}

export default App;
