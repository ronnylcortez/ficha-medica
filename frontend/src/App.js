import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BuscarSocio from './components/BuscarSocio';

function App() {

  return (
    <Router>
    <div className="App">
      <header>
        <h1>Círculo Militar</h1>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<BuscarSocio />} />
          {/* Puedes agregar más rutas aquí según sea necesario */}
        </Routes>
      </main>
      <footer>
      </footer>
    </div>
  </Router>
  );
}

export default App;
