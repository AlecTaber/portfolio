import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Project from './components/Project.jsx';
import './index.css';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Project section="about" />} />
        <Route path="/portfolio" element={<Project section="portfolio" />} />
        <Route path="/contact" element={<Project section="contact" />} />
        <Route path="/resume" element={<Project section="resume" />} />
        <Route path="*" element={<Project section="error" />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App
