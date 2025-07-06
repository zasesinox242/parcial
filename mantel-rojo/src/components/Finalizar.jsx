
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Finalizar = () => {
  const [resumen, setResumen] = useState({ fecha: '', horario: '', personas: '', sucursal: '' });
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fecha = localStorage.getItem("fecha");
    const horario = localStorage.getItem("horario");
    const personas = localStorage.getItem("personas");
    const sucursal = localStorage.getItem("sucursal");

    if (!fecha || !horario || !personas || !sucursal) {
      setError(true);
    } else {
      setResumen({ fecha, horario, personas, sucursal });
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const { fecha, horario, sucursal } = resumen;
    const clave = `${sucursal}_${fecha}`;
    const reservasBloqueadas = JSON.parse(localStorage.getItem("horariosBloqueados")) || {};

    if (!reservasBloqueadas[clave]) reservasBloqueadas[clave] = [];
    if (!reservasBloqueadas[clave].includes(horario)) reservasBloqueadas[clave].push(horario);

    localStorage.setItem("horariosBloqueados", JSON.stringify(reservasBloqueadas));

    localStorage.removeItem("fecha");
    localStorage.removeItem("horario");
    localStorage.removeItem("personas");

    alert("Registro exitoso. ¡Tu reserva ha sido realizada!");
    navigate("/");
  };

  return (
    <div className="bg-warning-subtle text-dark min-vh-100">
      <nav className="navbar bg-secondary px-4 py-3">
        <a className="navbar-brand text-white" href="/">
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
        <div className="text-center mb-4">
          <h3 className="fw-bold">Completa tu reserva</h3>
          <h4 id="nombreSucursal">{resumen.sucursal}</h4>
          <div id="resumenReserva" className="mt-2">
            {error ? (
              <div className="alert alert-warning">No se encontraron datos de la reserva. Por favor, vuelve al paso anterior.</div>
            ) : (
              <div>
                <span className="me-3">📅 <strong>{resumen.fecha}</strong></span>
                <span className="me-3">⏰ <strong>{resumen.horario}</strong></span>
                <span className="me-3">👤 <strong>{resumen.personas} persona(s)</strong></span>
              </div>
            )}
          </div>
        </div>

        {!error && (
          <form onSubmit={handleSubmit}>
            <h5>Datos de contacto</h5>
            <p className="text-muted">Completa los datos de contacto</p>

            <div className="row g-3 mb-3">
              <div className="col-md-6"><input type="text" className="form-control" placeholder="Tu nombre" required /></div>
              <div className="col-md-6"><input type="text" className="form-control" placeholder="Tu apellido" required /></div>
            </div>

            <div className="mb-3">
              <input type="email" className="form-control" placeholder="Email" required />
            </div>

            <div className="row g-3 mb-3">
              <div className="col-md-4">
                <select className="form-select" required>
                  <option value="">Cod. país</option>
                  <option value="+51">+51 (Perú)</option>
                  <option value="+54">+54 (Argentina)</option>
                  <option value="+56">+56 (Chile)</option>
                </select>
              </div>
              <div className="col-md-8">
                <input type="tel" className="form-control" placeholder="Número de celular" required />
              </div>
            </div>

            <div className="row g-3 mb-4">
              <div className="col-md-6">
                <select className="form-select">
                  <option value="">¿Es una ocasión especial?</option>
                  <option value="cumpleaños">Cumpleaños</option>
                  <option value="aniversario">Aniversario</option>
                  <option value="otro">Otro</option>
                </select>
              </div>
              <div className="col-md-6">
                <input type="text" className="form-control" placeholder="¿Tienes algún requerimiento especial?" />
              </div>
            </div>

            <div className="text-end">
              <button type="submit" className="btn btn-success px-4">Reservar</button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Finalizar;
