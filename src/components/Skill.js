import React from "react";
import { motion } from "framer-motion";

const Skill = () => {
  return (
    <motion.div 
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    transition={{duration: 1}}
    className="extra-info">
      <h2 style={{marginBottom: '1rem'}}>Technical skills</h2>
      <ul>
        <li>
          <p key="1">Programming Languages: 
            <span style={{marginLeft: '5%'}} className="devicon-cplusplus-plain"></span>
            <span className="devicon-java-plain"></span>
            <span className="devicon-python-plain"></span>
          </p>
          <p key="2">Web Development: 
            <span style={{marginLeft: '5%'}} className="devicon-html5-plain"></span>
            <span className="devicon-css3-plain"></span>
            <span className="devicon-javascript-plain"></span>
          </p>
          <p key="3">Framework: 
            <span style={{marginLeft: '5%'}} className="devicon-react-original"></span>
            <span className="devicon-nodejs-plain"></span>
          </p>
          <p key="4">Version Control: 
            <span style={{marginLeft: '5%'}} className="devicon-github-original"></span>
          </p>
          <p key="5">Machine Learning: 
            <span style={{marginLeft: '5%'}} className="devicon-numpy-original"></span>
            <span style={{marginLeft: '5%'}} className="devicon-pandas-original"></span>
            <span style={{marginLeft: '5%'}} className="devicon-tensorflow-original"></span>
          </p>
          <p key="6">Other Technologies: 
            <span style={{marginLeft: '5%'}} className="devicon-docker-plain"></span>
          </p>
        </li>
      </ul>
    </motion.div>
  )
}

export default Skill