import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Project from './components/Project';

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
