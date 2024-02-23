import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import React from 'react';
import App from './App.jsx';
import './index.css';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Home from './components/Home.jsx';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="main" element={<Home/>} />
        <Route path="projects" element={<Projects/>} />
        <Route path="contact" element={<Contact/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
