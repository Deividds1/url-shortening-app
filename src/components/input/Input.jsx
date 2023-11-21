import React, { useState } from 'react';
import './input.css';

function Input({ enviarUrl }) {
  const [inputUrl, setInputUrl] = useState('');
  const [emptyInput, setEmptyInput] = useState(false)

  const getUrl = (event) => {
    setInputUrl(event.target.value);
  };

  

  const handleEnviarUrl = () => {
    if (inputUrl.trim() !== '') {
      enviarUrl(inputUrl);
      setInputUrl('');
      setEmptyInput(false)
    } else if (inputUrl.trim() === '') {
      setEmptyInput(true);

    }
  };

  return (
    <div className="backgroundContainer">
      <div className="inputContainer">
        <input
          style={{
            border: emptyInput ? '2px solid red' : '2px solid black',
          }}
          onChange={getUrl}
          value={inputUrl}
          className="shortenInput"
          type="text"
          placeholder="Shorten a link here..."
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

