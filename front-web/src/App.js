import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

import Url from './models/shortLink';
import DateFormat from './components/DateFormat';

function App() {
  const [data, setData] = useState(null);
  const [url, setUrl] = useState('');
  const [list, setList] = useState('');


  const short = async () => {
    const response = await axios({
      url: 'http://localhost:8080/generate',
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: { url: url }
    })
    setData(response.data);

    if (data !== null) {
      setList(currentValue => [
        ...currentValue,
        new Url(
          Math.random(),
          data.originalUrl,
          data.shortLink,
          data.expirationDate,
        )
      ])
      console.log(list)
    }
  };

  const handleRemove = (dataId) => {
    setList(currentValue => {
      return currentValue.filter((item) => item.id !== dataId)
    });
    
    toast.info('Item removed successfully!');
  };

  const onChange = (event) => {
    setUrl(event.target.value)
  };

  return (
    <>
      <ToastContainer />
      <div>
        <div className="home__center">
          <h1>URL Shortener</h1>
        </div>
        <div className="home__inputContainer">
          <input
            type="text"
            value={url}
            onChange={onChange}
            placeholder="Enter the URL here..."
          />
        </div>

        <button onClick={short} className="button">
          <span className="buttonText">Shorten</span>
        </button>

        {list && (
          list.map(prod => (
            <div key={prod.shortLink} className="list_container">
              <div className="row">
                <text ><DateFormat date={prod.expirationDate} /></text>
                <button
                  type="button"
                  className="btn btn-outline-danger btn-edit-exclude-card"
                  onClick={() => handleRemove(prod.id)}
                >
                  
                  excluir
                </button>
              </div>
              <text className="label">Copy URL</text>
              <text>http://localhost:8080/{prod.shortLink}</text>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default App;
