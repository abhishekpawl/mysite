import React from "react";
import logo from '../ap.svg';
import {VscThreeBars} from 'react-icons/vsc';
import { links, social } from "./data";
import SingleLink from "./SingleLink";
import SocialIcon from "./SocialIcon";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <h2 style={{textShadow: 'var(--dark-shadow)'}}>_abhishekPawl</h2>
          <button className="nav-toggle">
            <VscThreeBars />
          </button>
        </div>
        <div className="links-container show-container">
          <ul className="links">
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
    </nav>
  )
}

export default Navbar