import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Project from './components/Project';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Project section="about" />
        </Route>
        <Route path="/portfolio">
          <Project section="portfolio" />
        </Route>
        <Route path="/contact">
          <Project section="contact" />
        </Route>
        <Route path="/resume">
          <Project section="resume" />
        </Route>
        <Route>
          <Project section="error" />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App
