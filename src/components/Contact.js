import React from 'react';
import {GrContactInfo} from 'react-icons/gr';
import { contactData as data } from './contactData';
import { motion } from 'framer-motion';

const Contact = () => {
  var temp = 1

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
          <span><GrContactInfo /></span>contact me
        </h2>
        <p style={{marginBottom: '0rem'}}>we can catch up anytime!</p>
        <a href="mailto: abhishek.paulcp.dbs@gmail.com">Send Email</a>
      </motion.div>
      <motion.section 
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 1}}
      className="container">
        {
          data.map((single) => {
            temp = temp + 1

            return (
              <motion.section
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.5 },
              }}
              key={single.id+temp} className="edu" style={{textAlign: 'center'}}>
                <h4 style={{display: 'inline-block'}}>
                  <a href={single.url}>{single.media}</a>
                  <span style={{margin: 'auto 1rem'}}>
                    {single.icon}
                  </span>
                </h4>
              </motion.section>
            )
          })
        }
      </motion.section>
    </motion.section>
  )
}

export default Contact
