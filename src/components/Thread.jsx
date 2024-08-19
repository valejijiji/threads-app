import React from 'react';
import './thread.css'; 

const Thread = ({ thread, onDelete }) => {
  const handleDelete = () => {
    if (window.confirm('ohhh... en serio quieres borrar este hilo?')) {
      onDelete(thread.id);
    }
  };

  return (
    <div className="thread">
      <img src={thread.profilePicture} alt={thread.username} />
      <div>
        <h4>{thread.username}</h4>
        <p>{thread.content}</p>
        <button onClick={handleDelete} className='borrar-boton'>Borrar</button>
      </div>
    </div>
  );
};

export default Thread;
