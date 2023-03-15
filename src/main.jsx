import React from 'react';
import ReactDOM from 'react-dom/client';
//
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './bootstrap.min.css';
import '../src/assets/css/index.scss' ;

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </React.StrictMode>,
)