import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css'; 

function Home() {

    useEffect(() => {
        document.body.style.backgroundColor = '#8c7b56';
      }, []);
  const imgStyle = {
    height: '160px',
    objectFit: 'cover',
    borderRadius: '8px',
  };

  const textoProducto = {
    position: 'absolute',
    bottom: '10px',
    left: 0,
    right: 0,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    textShadow: '1px 1px 3px black',
  };

  return (
    <div style={{ backgroundColor: '#8c7b56', color: 'white' }}>
      
      <nav className="navbar navbar-expand-lg px-4 py-3">
        <div className="container-fluid">
          <a className="navbar-brand text-white" href="#">
            <img src="/images/logo.png" alt="Logo Mantel Rojo" style={{ height: '80px' }} />
          </a>
          <div className="collapse navbar-collapse justify-content-end">
            <ul className="navbar-nav gap-3">
              <li className="nav-item"><a className="btn btn-outline-light" href="#">INICIO</a></li>
              <li className="nav-item">
                <Link to="/registro" className="btn btn-outline-light">REGÍSTRATE</Link>
                </li>
              <li className="nav-item"><a className="btn btn-outline-light" href="#">SOBRE NOSOTROS</a></li>
              <li className="nav-item">
                <Link className="btn btn-outline-light" to="/reservas">RESERVAS</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

     
      <section className="text-center py-5" style={{ backgroundColor: '#7d812b' }}>
        <h2 className="mb-3">SIN IMPORTAR DONDE ESTÉS</h2>
        <h2>SIEMPRE HABRÁ UN MANTEL ROJO PARA ENGREÍRTE</h2>
      </section>

      
      <section className="container py-5 text-center">
        <h3 className="mb-4" style={{ color: '#9933cc', fontWeight: 'bold' }}>TUS FAVORITOS DE SIEMPRE</h3>
        <div className="row justify-content-center g-4">
          <div className="col-10 col-sm-6 col-md-4 col-lg-3 position-relative">
            <img src="/images/cafe.JPG" alt="Café" className="w-100" style={imgStyle} />
            <div style={textoProducto}>Café</div>
          </div>
          <div className="col-10 col-sm-6 col-md-4 col-lg-3 position-relative">
            <img src="/images/entradas.jpg" alt="Entradas" className="w-100" style={imgStyle} />
            <div style={textoProducto}>ENTRADAS</div>
          </div>
          <div className="col-10 col-sm-6 col-md-4 col-lg-3 position-relative">
            <img src="/images/sopas.jpg" alt="Sopas" className="w-100" style={imgStyle} />
            <div style={textoProducto}>SOPAS</div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
