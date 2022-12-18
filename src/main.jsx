import React from 'react';
import ReactDOM from 'react-dom/client';
import { GifExpertApp } from './GifExpertApp';
 
//Se importa el archivo styles.css para que sea global en todo el proyecto-aplicacion
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GifExpertApp />
  </React.StrictMode>,
);
