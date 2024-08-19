import React, { useState, useEffect } from 'react';
import Thread from './Thread';
import './thread.css'; 

const ThreadList = ({ user }) => {
  const [threads, setThreads] = useState(() => {
    const savedThreads = localStorage.getItem('threads');
    return savedThreads ? JSON.parse(savedThreads) : [];
  });
  const [newThread, setNewThread] = useState('');

  useEffect(() => {
    localStorage.setItem('threads', JSON.stringify(threads));
  }, [threads]);

  const addThread = () => {
    if (newThread.trim()) {
      const thread = {
        id: Date.now(),
        username: user.username,
        profilePicture: user.profilePicture,
        content: newThread
      };
      setThreads([thread, ...threads]);
      setNewThread('');
    }
  };

  const deleteThread = (id) => {
    setThreads(threads.filter(thread => thread.id !== id));
  };

  return (
    <div className="thread-list">
      <div className="new-thread">
        <textarea
          value={newThread}
          onChange={(e) => setNewThread(e.target.value)}
          placeholder="Escribe tus primeros hilo..."
        />
        <button onClick={addThread} className='button'>Aceptar</button>
      </div>
      {threads.map(thread => (
        <Thread key={thread.id} thread={thread} onDelete={deleteThread} />
      ))}
       
    </div>
  );
};

export default ThreadList;
