// Supongamos que este es el componente de inicio de sesión
import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [profilePic, setProfilePic] = useState('');

  const handleLogin = () => {
    if (username && profilePic) {
      localStorage.setItem('user', JSON.stringify({ username, profilePic }));
      onLogin({ username, profilePic });
    } else {
      alert('inicia sesion primero ');
    }
  };

  return (
    <div>
      <h2>Iniciar Sesión</h2>
      <input
        type="text"
        placeholder="Nombre de Usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="text"
        placeholder="URL de Foto de Perfil"
        value={profilePic}
        onChange={(e) => setProfilePic(e.target.value)}
      />
      <button onClick={handleLogin}>Iniciar Sesión</button>
    </div>
  );
};

export default Login;
