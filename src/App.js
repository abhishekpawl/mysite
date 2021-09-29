import React, {useState, useEffect} from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from "./components/Navbar";
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import ABitMore from './components/ABitMore';
import Projects from './components/Projects';
import Contact from './components/Contact';
import BounceLoader from "react-spinners/BounceLoader";

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  return(
    <React.Fragment>
    {
      loading ? (
        <div className="loader">
          <BounceLoader size={100} color={'#4D7919'} loading={loading}></BounceLoader>
        </div>
      ) : (
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
    </React.Fragment>
  )
}

export default App