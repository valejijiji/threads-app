import React, { useState, useEffect } from 'react';
import { FaHeart } from 'react-icons/fa';
import './HeartButton.css'; 

function HeartButton() {
  // Obtén el estado inicial desde localStorage o usa `false` si no hay valor
  const [isLiked, setIsLiked] = useState(() => {
    const saved = localStorage.getItem('isLiked');
    return saved === 'true'; 
  });

  const [count, setCount] = useState(() => {
    const savedCount = localStorage.getItem('count');
    return savedCount ? parseInt(savedCount, 10) : 0; // Convierte a número si existe
  });

  useEffect(() => {
    // Guarda el estado y el contador en localStorage cada vez que cambien
    localStorage.setItem('isLiked', isLiked);
    localStorage.setItem('count', count);
  }, [isLiked, count]);

  const handleClick = () => {
    setIsLiked(!isLiked);
    setCount(prevCount => isLiked ? prevCount - 1 : prevCount + 1);
  };

  return (
    <div onClick={handleClick} className={`heart-container ${isLiked ? 'liked' : ''}`}>
      <FaHeart className="heart-icon" />
      <span className="count">{count}</span>
    </div>
  );
}

export default HeartButton;
