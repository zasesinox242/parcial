
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Detallado = () => {
  const [fecha, setFecha] = useState('');
  const [horario, setHorario] = useState('');
  const [personas, setPersonas] = useState('');
  const [horariosOcupados, setHorariosOcupados] = useState([]);
  const [sucursal, setSucursal] = useState('sucursal');

  const navigate = useNavigate();

  const horariosDisponibles = ['7:00', '7:30', '8:00', '8:30', '9:00'];


  useEffect(() => {
    const suc = localStorage.getItem('sucursal') || 'sucursal';
    setSucursal(suc);

    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    const todayStr = `${yyyy}-${mm}-${dd}`;

    document.getElementById('fecha').min = todayStr;
  }, []);

 
  useEffect(() => {
    if (!fecha) return;
    const clave = `${sucursal}_${fecha}`;
    const bloqueados = JSON.parse(localStorage.getItem("horariosBloqueados")) || {};
    const ocupados = bloqueados[clave] || [];
    setHorariosOcupados(ocupados);
  }, [fecha, sucursal]);

  const manejarSubmit = (e) => {
    e.preventDefault();
    if (!fecha || !horario || !personas) {
      alert("Por favor completa todos los campos y selecciona un horario.");
      return;
    }

    localStorage.setItem("fecha", fecha);
    localStorage.setItem("horario", horario);
    localStorage.setItem("personas", personas);
    navigate('/finalizar');; 
  };

  return (
    <>
      <nav className="navbar bg-secondary px-4 py-3">
        <a className="navbar-brand text-white" href="#">
          <img src="/images/logo.png" alt="Logo Mantel Rojo" style={{ height: '80px' }} />
        </a>
        <div className="ms-auto">
          <a href="/" className="btn btn-outline-light me-2">INICIO</a>
          <a href="/registro" className="btn btn-outline-light me-2">REGÍSTRATE</a>
          <a href="#" className="btn btn-outline-light me-2">SOBRE NOSOTROS</a>
          <a href="/reservas" className="btn btn-outline-light">RESERVAS</a>
        </div>
      </nav>

      <div className="container py-5">
        <h2 className="text-center mb-4">Reserva en {sucursal}</h2>
        <form onSubmit={manejarSubmit}>
          <div className="mb-3">
            <label htmlFor="fecha" className="form-label">Fecha</label>
            <input
              type="date"
              className="form-control"
              id="fecha"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Horario</label>
            <div className="d-flex flex-wrap gap-2">
              {horariosDisponibles.map((hora) => (
                <button
                  type="button"
                  key={hora}
                  className={`btn ${horario === hora ? 'btn-primary active' : 'btn-outline-primary'} ${horariosOcupados.includes(hora) ? 'btn-secondary' : ''}`}
                  onClick={() => {
                    if (!horariosOcupados.includes(hora)) setHorario(hora);
                  }}
                  disabled={horariosOcupados.includes(hora)}
                >
                  {hora}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="personas" className="form-label">Cantidad de personas</label>
            <select
              className="form-select"
              id="personas"
              value={personas}
              onChange={(e) => setPersonas(e.target.value)}
              required
            >
              <option value="">Selecciona</option>
              {[1, 2, 3, 4, 5, 6].map(num => (
                <option key={num} value={num}>{num} persona{num > 1 ? 's' : ''}</option>
              ))}
            </select>
          </div>

          <div className="text-end">
            <button type="submit" className="btn btn-primary">Continuar →</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Detallado;
