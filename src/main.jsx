// src/main.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import rootReducer from './reducers/index';
import Favicon from 'react-favicon';
import projectManagement from '../assets/project-management.png';

import App from './App';

const store = configureStore({reducer: rootReducer});

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Favicon url={projectManagement} />
    <App />
  </Provider>
);
