import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Project from './components/Project.jsx';
import './index.css';
import { useState, useEffect } from 'react';
import Navigation from './components/Navigation.jsx';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('dark-mode');
    return savedMode === 'true';
  });

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  useEffect(() => {
    localStorage.setItem('dark-mode', isDarkMode);
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  return (
    <Router>
      <div className={isDarkMode ? 'dark' : ''}>
        <div className="bg-white dark:bg-gray-900 min-h-screen">
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Project section="about" />} />
        <Route path="/portfolio" element={<Project section="portfolio" />} />
        <Route path="/contact" element={<Project section="contact" />} />
        <Route path="/resume" element={<Project section="resume" />} />
        <Route path="*" element={<Project section="error" />} />
      </Routes>
      <Footer />
      </div>
      </div>
    </Router>
  );
};

export default App
