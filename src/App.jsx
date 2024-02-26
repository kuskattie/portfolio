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
    <Router basename='/portfolio/'>
      <div>
        <Sidenav />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/home" element={<Home />} />
          {/* Add your other routes here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
