import React, {useState} from 'react';
import {MdExpandLess, MdExpandMore} from 'react-icons/md';
import { motion } from 'framer-motion';

const SingleEduData = ({title, dates, texts, performance}) => {
  const [showData, setShowData] = useState(false)

  const showHandler = () => {
    setShowData(!showData)
  }

  return (
    <section className="edu">
      <header style={{display: 'flex'}}>
        <motion.h3
        whileHover={{
          scale: 1.02,
          transition: { duration: 0.5 },
        }}
        >{title}</motion.h3>
        <motion.button 
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.5 },
        }}
        className="edu-btn" onClick={showHandler}>
          {showData ? <MdExpandLess></MdExpandLess> : <MdExpandMore></MdExpandMore>}
        </motion.button>
      </header>
      {
        showData &&
        <div>
          <p>{dates}</p>
          <h4>{performance}</h4>
          <p>
            {
              texts.map((text) => {
                return <p>{text}</p>
              })
            }
          </p>
        </div>
      }
    </section>
  )
}

export default SingleEduData
