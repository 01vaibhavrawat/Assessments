import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './store';

import {Provider} from 'react-redux';

import "jquery";
import "popper.js/dist/umd/popper";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);