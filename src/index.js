import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "jquery";
import "popper.js/dist/umd/popper";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);