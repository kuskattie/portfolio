import { useState } from 'react'
import React from 'react'
import Sidenav from './components/Sidenav'
import './index.css'
import 'tailwindcss/tailwind.css';
import Main from './components/Main';
import Home from './components/Home'
import Projects from './components/Projects';
import Contact from './components/Contact'

function App() {

  return (
    <div>
      <Sidenav />
      <Main />
      <Home />
      <Projects />
      <Contact />
    </div>
  );

}

export default App
