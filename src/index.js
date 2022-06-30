import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './store.js';

import {Provider} from 'react-redux';

import "jquery";
import "popper.js/dist/umd/popper";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";

console.log({store})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);