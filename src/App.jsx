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
      <Routes>
        <Route path="/" element={<React.Fragment><Sidenav /><Main /></React.Fragment>} />
        <Route path="/contact" element={<React.Fragment><Sidenav /><Contact /></React.Fragment>} />
        <Route path="/projects" element={<React.Fragment><Sidenav /><Projects /></React.Fragment>} />
        <Route path="/home" element={<React.Fragment><Sidenav /><Home /></React.Fragment>} />
        {/* Add your other routes here */}
      </Routes>
    </Router>
  );
}

export default App;
