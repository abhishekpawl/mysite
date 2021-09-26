import React from "react";

const Skill = () => {
  return (
    <div className="extra-info">
      <h2 style={{marginBottom: '1rem'}}>Technical skills</h2>
      <ul>
        <li>
          <p key="1">Programming Languages: 
            <span className="devicon-c-plain"></span>
            <span className="devicon-cplusplus-plain"></span>
            <span className="devicon-python-plain"></span>
          </p>
          <p key="2">Web Development: 
            <span className="devicon-html5-plain"></span>
            <span className="devicon-css3-plain"></span>
            <span className="devicon-javascript-plain"></span>
          </p>
          <p key="3">Framework: 
            <span className="devicon-react-original"></span>
          </p>
          <p key="4">Version Control: 
            <span className="devicon-github-original"></span>
          </p>
          <p key="5">Machine Learning: 
            <span className="devicon-numpy-original"></span>
            <span className="devicon-pandas-original"></span>
            <span className="devicon-tensorflow-original"></span>
          </p>
        </li>
      </ul>
    </div>
  )
}

export default Skill