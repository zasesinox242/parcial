import { useNavigate } from 'react-router-dom';

export const handleReservaClick = (sucursal, navigate) => {
  const usuarioActivo = JSON.parse(localStorage.getItem('usuarioActivo'));

  if (!usuarioActivo) {
    alert('Debes iniciar sesión para hacer una reserva.');
    navigate('/login');
    return;
  }

  localStorage.setItem('sucursal', sucursal);
  navigate('/Detallado');
};