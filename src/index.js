import React from 'react';
import ReactDOM from 'react-dom/client';
import store from './store/store'
import {Provider} from 'react-redux'
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css';
import App from './App';


// Call disableDevtool() to disable developer tools
// disableDevtool();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);