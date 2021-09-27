import React from 'react';
import {GoProject} from 'react-icons/go';
import { projectData as data } from './projectData';
import SingleProject from './SingleProject';
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <motion.section 
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    transition={{duration: 0.8}}
    className="section">
      <motion.div 
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 1}}
      className="title">
        <h2>
          <span><GoProject /></span>projects
        </h2>
        <h6>*minimal information provied</h6>
      </motion.div>
      <motion.section 
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 1}}
      className="container">
        {
          data.map((singleData) => {
            return <SingleProject key={singleData.id} {...singleData} />
          })
        }
      </motion.section>
    </motion.section>
  )
}

export default Projects
