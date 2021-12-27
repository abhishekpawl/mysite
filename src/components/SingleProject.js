import React, {useState} from "react";
import {MdExpandLess, MdExpandMore} from 'react-icons/md';
import { motion } from "framer-motion";

const SingleProject = ({id, title, tech, text, url, link}) => {
  const [showData, setShowData] = useState(false)

  const showHandler = () => {
    setShowData(!showData)
  }

  var temp = 1

  return (
    <section className="edu">
      <header style={{display: 'flex'}}>
        <motion.h3
        whileHover={{
          scale: 1.02,
          transition: { duration: 0.5 },
        }}
        >
          <a href={link} target="_blank" rel="noreferrer">{title}</a>
        </motion.h3>
        <motion.button 
        whileHover={{
          scale: 1.025,
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
              temp = temp + 1
              return (
                <h4 key={id+temp} className="tech">
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