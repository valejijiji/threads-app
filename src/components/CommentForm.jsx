
import React, { useState } from 'react';

const CommentForm = ({ onAddComment }) => {
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      onAddComment(comment);
      setComment('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Comienza escribiendo tus primeros hilos"
      />
      <button type="submit" bg={"blue"}>Enviar</button>
    </form>
  );
};

export default CommentForm;
