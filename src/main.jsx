// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Render the App component inside a StrictMode to catch potential issues
ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
    <App/>
  //</React.StrictMode>,
);
