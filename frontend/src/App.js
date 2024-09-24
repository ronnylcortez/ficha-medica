import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BuscarSocio from './components/BuscarSocio';
import Header from './components/Header';


function App() {

  return (
    <Router>
    <div className="App">
      <Header />
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
