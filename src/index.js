import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; // Importa el componente principal de la aplicación
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App /> {/* Renderiza el componente principal de la aplicación */}
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();