
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


function Registro() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegistro = (e) => {
    e.preventDefault();

    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    const yaExiste = usuarios.some(usuario => usuario.email === email);
    if (yaExiste) {
      alert('Este correo ya está registrado.');
      return;
    }

    usuarios.push({ email, password });
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    alert('Registro exitoso. Redirigiendo al login...');
    navigate('/login'); 
  };

  return (
    <div className="bg-secondary-subtle min-vh-100">
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

      <main className="container d-flex flex-column align-items-center justify-content-center mt-5">
        <h2 className="mb-4">Regístrate</h2>
        <form onSubmit={handleRegistro} className="w-100" style={{ maxWidth: '400px' }}>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Ingresa un correo"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Crea una contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="d-grid mb-3">
            <button type="submit" className="btn btn-success">Registrarse</button>
          </div>
          <p className="text-center">¿Ya tienes una cuenta? <Link to="/login">Inicia sesión</Link>
          </p>
        </form>
      </main>
    </div>
  );
}

export default Registro;
