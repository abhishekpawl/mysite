import React, {useState, useEffect, useRef} from "react";
import {VscThreeBars} from 'react-icons/vsc';
import { links, social } from "./data";
import SingleLink from "./SingleLink";
import SocialIcon from "./SocialIcon";
import {motion} from 'framer-motion';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false)

  const linksContainerRef = useRef(null)
  const linksRef = useRef(null)
  const nameRef = useRef(null)

  const toggleHandler = () => {
    setShowLinks(!showLinks)
  }

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height

    if(showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`
    } else {
      linksContainerRef.current.style.height = '0px'
    }

  }, [showLinks])

  return (
    <motion.nav
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    transition={{duration: 0.8}}
    >
      <div className="nav-center" ref={nameRef}>
        <div className="nav-header">
          <img src='https://res.cloudinary.com/dyiwzykis/image/upload/v1632554053/profile_yq0bne.jpg' alt="me" className='logo-img' />
          <motion.h2
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 1}}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.5 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 100 }}>_abhishekPawl</motion.h2>
          <button className="nav-toggle" onClick={toggleHandler}>
            <VscThreeBars />
          </button>
        </div>
        <div className="links-container" ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
            {
              links.map((link) => {
                const {id, url, text} = link

                return <SingleLink key={id} url={url} text={text} />
              })
            }
          </ul>
        </div>
        <ul className="social-icons">
          {
            social.map((socialIcon) => {
              const {id, url, icon} = socialIcon

              return <SocialIcon key={id} url={url} icon={icon} />
            })
          }
        </ul>
      </div>
    </motion.nav>
  )
}

export default Navbar