
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const manejarLogin = (e) => {
    e.preventDefault();
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    const usuarioEncontrado = usuarios.find(usuario => usuario.email === email && usuario.password === password);

    if (usuarioEncontrado) {
      alert('Sesión iniciada correctamente.');
      localStorage.setItem('usuarioActivo', JSON.stringify(usuarioEncontrado));
      navigate('/'); 
    } else {
      alert('Credenciales incorrectas.');
    }
  };

  return (
    <>
      <nav className="navbar px-4 py-3 bg-warning">
        <Link className="navbar-brand text-dark" to="/">
          <img src="/images/logo.png" alt="Logo Mantel Rojo" style={{ height: '80px' }} />
        </Link>
        <div className="ms-auto">
          <Link to="/" className="btn btn-outline-dark me-2">INICIO</Link>
          <Link to="/registro" className="btn btn-outline-dark me-2">REGÍSTRATE</Link>
          <Link to="#" className="btn btn-outline-dark me-2">SOBRE NOSOTROS</Link>
          <Link to="/reservas" className="btn btn-outline-dark">RESERVAS</Link>
        </div>
      </nav>

      <div className="container d-flex justify-content-center align-items-center min-vh-100">
        <div className="w-100" style={{ maxWidth: '400px' }}>
          <h3 className="text-center mb-4">Inicia sesión</h3>
          <form onSubmit={manejarLogin}>
            <input
              type="email"
              className="form-control mb-3"
              placeholder="Ingresa tu correo"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              className="form-control mb-3"
              placeholder="Ingresa tu contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div className="d-grid">
              <button type="submit" className="btn btn-primary">Iniciar sesión</button>
            </div>
          </form>
          <p className="text-center mt-3">
            ¿No tienes una cuenta? <Link to="/registro">Regístrate</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
