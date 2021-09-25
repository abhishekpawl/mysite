import React, {useState, useEffect} from "react";
import {GrInfo} from 'react-icons/gr';
import { aboutData as data } from "./aboutData";
import {CgQuoteO} from 'react-icons/cg';
import {RiArrowLeftSLine, RiArrowRightSLine} from 'react-icons/ri';
import {motion} from 'framer-motion';

const AboutMe = () => {
  const [index, setIndex] = useState(0)

  const prevHandler = () => {
    if(index === 0) {
      setIndex(data.length - 1)
    } else {
      setIndex(index - 1)
    }
  }

  const nextHandler = () => {
    if(index === data.length - 1) {
      setIndex(0)
    } else {
      setIndex(index + 1)
    }
  }

  useEffect(() => {
    let temp = setInterval(() => {
      if(index === data.length - 1) {
        setIndex(0)
      } else {
        setIndex(index + 1)
      }
    }, 5000)
    return () => clearInterval(temp)
  }, [index])

  return (
    <motion.section 
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    transition={{duration: 0.8}}
    className="section">
      <motion.div className="title"
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 1}}
      >
        <h2>
          <span><GrInfo /></span> about me
        </h2>
      </motion.div>
      <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 1}}
      className="section-center">{
          data.map((info, itr) => {
            const {id, image, text} = info
            let pos = 'nextSlide'

            if(index === itr) {
              pos = 'activeSlide'
            }

            if(index > itr) {
              pos = 'prevSlide'
            }

            return (
              <article className={pos} key={id}>
                <img src={image} alt="me" className="person-img" />
                <p className="text">
                  {text}
                </p>
                <CgQuoteO className="icon" />
              </article>
            )
          })
        }
        <button className="prev" onClick={prevHandler}>
          <RiArrowLeftSLine />
        </button>
        <button className="next" onClick={nextHandler}>
          <RiArrowRightSLine />
        </button>
      </motion.div>
    </motion.section>
  )
}

export default AboutMe