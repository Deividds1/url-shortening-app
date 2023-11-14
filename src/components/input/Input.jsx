/* import React from 'react';
import { useState } from 'react';
import "./input.css";

function Input() {
  const [inputUrl, setinputUrl] = useState("");
  const [newUrl, setNewUrl] = useState("");

  const getUrl = (event) => {
    setinputUrl(event.target.value)
  }

  const enviarUrl = async () => {
    const apiUrl = `http://localhost:5000/api`;

      try {
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ url: inputUrl }),
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setNewUrl(data);
        console.log(data);
      } catch (error) {
        console.error('Error al cargar datos:', error);
      }
    };

  return (
    <div className='backgroundContainer'>
      <div className='inputContainer'>
        <input onChange={getUrl} className='shortenInput' type="text" placeholder="Shorten a link here..." /><br />
        <button onClick={enviarUrl} className='shortenItButton'>Shorten It!</button><br />
      </div>
    </div>
  )
}


export default Input */

import React, { useState } from 'react';
import './input.css';

function Input() {
  const [inputUrl, setInputUrl] = useState('');
  const [shortenedUrl, setShortenedUrl] = useState('');
  const [showShortened, setShowShortened] = useState(false);

  const getUrl = (event) => {
    setInputUrl(event.target.value);
  };

  const enviarUrl = async () => {
    const apiUrl = `http://localhost:5000/api`;

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: inputUrl }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setShortenedUrl(data.result_url);
      setShowShortened(true);
    } catch (error) {
      console.error('Error al cargar datos:', error);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shortenedUrl);
    alert('URL copiada al portapapeles');
  };

  return (
    <div className="backgroundContainer">
      <div className="inputContainer">
        <input onChange={getUrl} className="shortenInput" type="text" placeholder="Shorten a link here..." /><br />
        <button onClick={enviarUrl} className="shortenItButton">Shorten It!</button><br />
      </div>

      {showShortened && (
        <div className="shortenedUrlContainer">
          <p className="shortenedUrl">{shortenedUrl}</p>
          <button onClick={copyToClipboard} className="copyButton">Copy</button>
        </div>
      )}
      
    </div>
  );
}

export default Input;
