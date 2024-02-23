import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidenav from './components/Sidenav';
import Main from './components/Main';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './index.css';
import 'tailwindcss/tailwind.css';

function App() {
  return (
    <div>
      <Router>
        <Sidenav />
        <Routes>
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Main />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
