import React from 'react';
import {GoProject} from 'react-icons/go';
import { projectData as data } from './projectData';
import SingleProject from './SingleProject';

const Projects = () => {
  return (
    <section className="section">
      <div className="title">
        <h2>
          <span><GoProject /></span>projects
        </h2>
      </div>
      <section className="container">
        {
          data.map((singleData) => {
            return <SingleProject key={singleData.id} {...singleData} />
          })
        }
      </section>
    </section>
  )
}

export default Projects
