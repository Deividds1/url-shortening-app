import React, { useState } from 'react';
import './input.css';

function Input({ enviarUrl }) {
  const [inputUrl, setInputUrl] = useState('');

  const getUrl = (event) => {
    setInputUrl(event.target.value);
  };

  

  const handleEnviarUrl = () => {
    if (inputUrl.trim() !== '') {
      enviarUrl(inputUrl);
    } 
  };

  return (
    <div className="backgroundContainer">
      <div className="inputContainer">
        <input
          onChange={getUrl}
          className="shortenInput"
          type="text"
          placeholder="Shorten a link here..."
          value={inputUrl}
        />
        <br />
        <button onClick={handleEnviarUrl} className="shortenItButton">
          Shorten It!
        </button>
        <br />
      </div>
    </div>
  );
}

export default Input;

