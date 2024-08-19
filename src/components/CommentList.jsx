
import React from 'react';

const CommentList = ({ comments, onDeleteComment }) => {
  return (
    <div>
      {comments.map((comment, index) => (
        <div key={index} style={{ marginBottom: '10px', border: '1px solid #ddd', padding: '10px' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={comment.profilePic} alt={comment.username} style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '10px' }} />
            <strong>{comment.username}</strong>
          </div>
          <p>{comment.text}</p>
          <button onClick={() => onDeleteComment(index)}>Eliminar</button>
        </div>
      ))}
    </div>
  );
};

export default CommentList;
