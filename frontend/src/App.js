import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BuscarSocio from './components/BuscarSocio';

function App() {

  return (
    <Router>
    <div className="App">
      <header>
        <h1>Aplicación de Gestión de Socios</h1>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<BuscarSocio />} />
          {/* Puedes agregar más rutas aquí según sea necesario */}
        </Routes>
      </main>
      <footer>
        <p>&copy; 2024 Tu Empresa</p>
      </footer>
    </div>
  </Router>
  );
}

export default App;
