
import React from 'react';
import { handleReservaClick } from '../utils/reservaHandler';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

const Reservas = () => {
  const navigate = useNavigate(); 

  const locales = [
    {
      nombre: 'San Isidro',
      direccion: 'Calle Pancho Fierro 115, San Isidro, Perú',
      horario: 'Lunes a Viernes\n08:00 — 12:00 y 16:00 — 19:00',
    },
    {
      nombre: 'Plaza Salaverry',
      direccion: 'Av. General Salaverry 2370, Jesús María, Perú',
      horario: 'Lunes a Viernes\n09:00 — 13:00 y 16:30 — 19:30',
    },
    {
      nombre: 'Chacarilla',
      direccion: 'Av. Primavera 698, Santiago de Surco 15037, Perú',
      horario: '08:00 — 23:00',
    },
  ];

  return (
    <div style={{ backgroundColor: '#8c7b56', color: 'white', minHeight: '100vh' }}>
      <nav className="navbar navbar-expand-lg px-4 py-3">
        <div className="container-fluid">
          <a className="navbar-brand text-white" href="#">
            <img src="/images/logo.png" alt="Logo Mantel Rojo" style={{ height: '80px' }} />
          </a>
          <div className="collapse navbar-collapse justify-content-end">
            <ul className="navbar-nav gap-3">
              <li className="nav-item"><a className="btn btn-outline-light" href="/">INICIO</a></li>
              <li className="nav-item"><a className="btn btn-outline-light" href="/registro">REGÍSTRATE</a></li>
              <li className="nav-item"><a className="btn btn-outline-light" href="#">SOBRE NOSOTROS</a></li>
              <li className="nav-item"><a className="btn btn-outline-light" href="/reservas">RESERVAS</a></li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container my-5">
        <h2 className="text-center mb-5">Elige tu local favorito</h2>

        <div className="row align-items-center">
        <div style={{
  width: '300px',
  height: '300px',
  borderRadius: '50%',
  overflow: 'hidden',
  margin: 'auto',
  boxShadow: '0 0 10px rgba(0,0,0,0.3)',
  position: 'relative'
}}>
  <iframe
    title="Mapa de locales"
    src="https://www.google.com/maps/d/embed?mid=1Gz9uUywPlqXtu1yKUH446HGnKKbc1lI&ehbc=2E312F"
    style={{
      border: 0,
      position: 'absolute',
      top: '-100px', 
      left: 0,
      width: '100%',
      height: 'calc(100% + 140px)' 
    }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>



          <div className="col-md-7">
            {locales.map((local, i) => (
              <div key={i} className="mb-4 p-3 border border-light rounded" style={{ backgroundColor: 'transparent' }}>
                <h5>{local.nombre}</h5>
                <p>
                  {local.direccion}<br />
                  {local.horario}
                </p>
                <button
                  className="btn btn-success"
                  style={{ backgroundColor: '#7d812b', border: 'none' }}
                  onClick={() => handleReservaClick(local.nombre, navigate)}
                >
                  Reservar
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservas;
