import React, {useState} from "react";
import {MdExpandLess, MdExpandMore} from 'react-icons/md';
import { motion } from "framer-motion";

const SingleProject = ({title, tech, text, url}) => {
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
          {
            tech.map((singleTech) => {
              return (
                <h4 key={new Date().getTime().toString()} className="tech">
                  {singleTech}
                </h4>
              )
            })
          }
          <img src={url} alt={title} className='project-img' />
          <p>
            {text}
          </p>
        </div>
      }
    </section>
  )
}

export default SingleProject