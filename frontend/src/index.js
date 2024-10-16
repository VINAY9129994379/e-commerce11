import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import ShopContextProvider from './context/ShopContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ShopContextProvider>
      
      <App />

    </ShopContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// For performance logging (optional)
reportWebVitals();
