import React, { useState, useEffect } from 'react';

function DisplayInput() {
  // Inicializamos el estado con el valor almacenado en localStorage o con una cadena vacía
  const [inputValue, setInputValue] = useState(() => {
    return localStorage.getItem('inputValue') || '';
  });

  // Guardar el valor en localStorage cada vez que cambie
  useEffect(() => {
    localStorage.setItem('inputValue', inputValue);
  }, [inputValue]);

  // Función que se ejecuta cuando el valor del input cambia
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <h2>Escribe algo:</h2>
      <input 
        type="text" 
        value={inputValue} 
        onChange={handleInputChange} 
        placeholder="Escribe aquí"
      />
      <p>Lo que escribiste es: {inputValue}</p>
    </div>
  );
}

export default DisplayInput;

