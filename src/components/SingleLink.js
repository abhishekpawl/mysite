import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const SingleLink = ({url, text}) => {
  return (
    <motion.li
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    transition={{duration: 1}}
    whileHover={{
      scale: 1.03,
      transition: { duration: 0.7 },
    }}
    >
      <Link to={url}>
        <h5>
          {text}
        </h5>
      </Link>
    </motion.li>
  )
}

export default SingleLink