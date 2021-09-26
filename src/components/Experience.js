import React from 'react';
import { expData as data } from './expData';
import SingleJob from './SingleJob';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <motion.div 
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    transition={{duration: 1}}
    className="extra-info">
      {
        data.map((single) => {
          return <SingleJob key={single.id} {...single} />
        })
      }
    </motion.div>
  )
}

export default Experience
