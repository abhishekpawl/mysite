import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from "./Navbar";
import AboutMe from './AboutMe';
import Education from './Education';
import ABitMore from './ABitMore';
import Projects from './Projects';
import Contact from './Contact';

const ReactRouterSetup = () => {
  return (
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

export default ReactRouterSetup