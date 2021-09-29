import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from "./components/Navbar";
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import ABitMore from './components/ABitMore';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return(
    <Router>
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/">
          <AboutMe />
        </Route>
        <Route path='/education'>
          <Education />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/aBitMore">
          <ABitMore />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="*">
          <AboutMe />
        </Route>
      </Switch>
    </Router>
  )
}

export default App