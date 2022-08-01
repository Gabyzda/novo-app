import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// aqui se borraron cosas que no se necesitan, se elimina el archivo reportWebVitals.js, entonces se elimina de aqu´el import y la parte de abajo que lo llama
