import React, {useState} from 'react';
import {FaRegQuestionCircle} from 'react-icons/fa';
import Skill from './Skill';
import Experience from './Experience';
import { motion } from 'framer-motion';

const ABitMore = () => {
  const [topic, setTopic] = useState('skill')

  return (
    <motion.section 
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    transition={{duration: 0.8}}
    className="section">
      <div className="title">
        <h2>
        <span><FaRegQuestionCircle /></span>a bit more about me
        </h2>
      </div>
      <div className="extras-center">
        {/* buttons */}
        <div className="btn-container">
          <motion.button
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.5 },
          }}
          key="1" className={`extra-btn ${topic === 'skill' && 'active-btn'}`}
          onClick={() => setTopic('skill')}
          >Skills</motion.button>
          <motion.button
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.5 },
          }}
          key="2" className={`extra-btn ${topic === 'experience' && 'active-btn'}`}
          onClick={() => setTopic('experience')}
          >Experience</motion.button>
        </div>
        {/* info */}
        {
          topic === 'skill' ? <Skill /> : <Experience />
        }
      </div>
    </motion.section>
  )
}

export default ABitMore
