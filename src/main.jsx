import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'; // Импортируем BrowserRouter из React Router
import { createRoot } from 'react-dom/client';
import React from 'react';
import App from './App.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Оборачиваем корневой компонент в BrowserRouter */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
