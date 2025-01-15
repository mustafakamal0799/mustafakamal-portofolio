import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Ganti Switch dengan Routes
import './App.css';

import StartPage from './components/StartPage';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Experience from './components/Experience';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <Router>
      <div className={darkMode ? 'dark-mode' : 'light-mode'}>
        <Routes>
          {/* Halaman StartPage */}
          <Route path="/" element={<StartPage />} />

          {/* Halaman Proyek */}
          <Route path="/projects" element={<><Header toggleDarkMode={toggleDarkMode} /><About /><Projects /><Experience /><Contact /></>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
