import React from "react";
import { motion } from "framer-motion";

const SocialIcon = ({url, icon}) => {
  return (
    <motion.li
    initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 1}}
    >
      <a href={url}>
        {icon}
      </a>
    </motion.li>
  )
}

export default SocialIcon