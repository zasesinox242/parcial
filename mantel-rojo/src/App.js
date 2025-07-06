import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Reservas from './components/Reservas';
import Registro from './components/Registro';
import Login from './components/Login';
import Detallado from './components/Detallado';
import Finalizar from './components/Finalizar';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reservas" element={<Reservas />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/detallado" element={<Detallado />} />
        <Route path="/finalizar" element={<Finalizar />} />
      </Routes>
    </Router>
  );
}

export default App;
