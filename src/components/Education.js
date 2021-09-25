import React from 'react';
import {GrContactInfo} from 'react-icons/gr';
import { eduData as data } from './eduData';
import SingleEduData from './SingleEduData';
import { motion } from 'framer-motion';

const Education = () => {
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
          <span><GrContactInfo /></span>education
        </h2>
      </motion.div>
      <motion.section 
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 1}}
      className="container">
        {
          data.map((singleData) => {
            return <SingleEduData key={singleData.id} {...singleData} />
          })
        }
      </motion.section>
    </motion.section>
  )
}

export default Education
