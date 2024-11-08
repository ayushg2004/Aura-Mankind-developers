import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Pitch from './component/Pitch';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <Pitch/> */}
  </React.StrictMode>
);

