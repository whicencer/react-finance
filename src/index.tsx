import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/normalize.css';
import './styles/index.css';
import App from './app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <App />
);