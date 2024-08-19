// src/actions/CommentButton.jsx
import React, { useState, useEffect } from 'react';
import { FaComment } from 'react-icons/fa';
import './CommentButton.css'; 

function CommentButton() {
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState(() => {
    const savedComments = localStorage.getItem('comments');
    return savedComments ? JSON.parse(savedComments) : [];
  });
  const [showInput, setShowInput] = useState(false);

  useEffect(() => {
    localStorage.setItem('comments', JSON.stringify(comments));
  }, [comments]);

  const handleInputChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = () => {
    setComments([...comments, comment]);
    setComment('');
    setShowInput(false);
  };

  const handleDelete = (index) => {
    if (window.confirm("oohhh.... enserio quieres borrar el comentario?")) {
      const updatedComments = comments.filter((_, i) => i !== index);
      setComments(updatedComments);
    }
  };

  const handleIconClick = () => {
    setShowInput(!showInput);
  };

  return (
    <div className="comment-container">
      <FaComment className="comment-icon" onClick={handleIconClick} />
      {showInput && (
        <div className="comment-box">
          <textarea
            value={comment}
            onChange={handleInputChange}
            placeholder="Comenta!"
          />
          <div className="comment-actions">
            <button onClick={handleSubmit} className="submit-button">
              Enviar
            </button>
          </div>
        </div>
      )}
      <div className="comments-section">
        {comments.map((comment, index) => (
          <div key={index} className="submitted-comment">
            <p>{comment}</p>
            <button onClick={() => handleDelete(index)} className="delete-button">
              Eliminar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CommentButton;
