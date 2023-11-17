import React, { useState } from 'react';
import Input from '../input/Input';
import './url.css';


function Url() {
  const [shortenedUrls, setShortenedUrls] = useState([]);
  const [showShortened, setShowShortened] = useState(false);

  const enviarUrl = async (inputUrl) => {
    const apiUrl = 'http://localhost:5000/api';

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
      const newShortenedUrl = data.result_url;

      setShortenedUrls((prevUrls) => [
        { originalUrl: inputUrl, shortenedUrl: newShortenedUrl },
        ...prevUrls.slice(0, 2),
      ]);
      setShowShortened(true);
    } catch (error) {
      console.error('Error al cargar datos:', error);
    }
  };
  const copyToClipboard = (url) => {
    navigator.clipboard.writeText(url);
    alert('URL copiada al portapapeles');
  };

  return (
    <div>
      <Input enviarUrl={enviarUrl}/>
      {showShortened && (
        <div className="shortenedUrlContainer">
          {shortenedUrls.map((item, index) => (
            <div className='originalAndShortenedContainer' key={index}>
              <p className="originalUrl">{item.originalUrl}</p><hr></hr>
              <p className="shortenedUrl">{item.shortenedUrl}</p>
              <button onClick={() => copyToClipboard(item.shortenedUrl)} className="copyButton">Copy</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Url;
