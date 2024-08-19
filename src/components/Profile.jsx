import React from 'react';

const Profile = ({ username }) => {
  return (
    <div>
      <h2>Bienvenido, {username}!</h2>
      <p></p>
      {/* Aquí puedes agregar más detalles de perfil */}
    </div>
  );
};

export default Profile;
