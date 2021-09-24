import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from "./Navbar";
import '../index.css'

const ReactRouterSetup = () => {
  return (
    <Router>
      <Navbar></Navbar>
      <Switch></Switch>
    </Router>
  )
}

export default ReactRouterSetup