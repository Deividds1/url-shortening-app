import React from 'react';
import { useState } from 'react';
import "./input.css";

function Input() {
  const [inputUrl, setinputUrl] = useState("");
  const [newUrl, setNewUrl] = useState("");

  const getUrl = (event) => {
    setinputUrl(event.target.value)
  }

  const enviarUrl = () => {


    const apiUrl = `http://localhost:5000/api`;



    const fetchData = async () => {
      console.log(inputUrl);
      try {
        const response = await fetch(apiUrl, {
          mode: 'no-cors',
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
      } catch (error) {
        console.error('Error al cargar datos:', error);
      }
    };

    fetchData();
  }



  return (
    <div className='backgroundContainer'>
      <div className='inputContainer'>
        <input onChange={getUrl} className='shortenInput' type="text" placeholder="Shorten a link here..." /><br />
        <button onClick={enviarUrl} className='shortenItButton'>Shorten It!</button><br />
      </div>
    </div>
  )
}


export default Input