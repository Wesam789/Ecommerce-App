import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import App from './Components/App';
import  ShopProvider  from './Context/ShopContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ShopProvider>
    <App />
  </ShopProvider>
);


