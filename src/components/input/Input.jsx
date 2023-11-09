import React from 'react';
import { useState } from 'react';
import "./input.css";

function Input() {
const [url, setUrl] = useState("");
const [newUrl, setNewUrl] = useState("");
/* const apiUrl = "https://cleanuri.com/docs"; */

const enviarUrl = (event) => {
    setUrl(event.target.value)
      /*  fetch(apiUrl)
        .then((response)=>{response.clone().json().then((data) => {setNewUrl(data)
        console.log(newUrl)})} )
        .catch((error)=>{console.log(error)}) */
        const apiUrl = `http://localhost:5000/api?url=${url}`;



        const fetchData = async () => {
          try {
            const response = await fetch(url);
            const data = await response.json();
            setDatos(data);
          } catch (error) {
            console.error('Error al cargar datos:', error);
          }
        };
    
        fetchData();
    }



  return (
    <div className='backgroundContainer'>
    <div className='inputContainer'> 
        <input className='shortenInput' type="text" placeholder="Shorten a link here..."/><br/>
        <button onClick={enviarUrl} className='shortenItButton'>Shorten It!</button><br/>
    </div>
    </div>
  )
}
 

export default Input