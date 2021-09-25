import React from "react"
import {GrInfo} from 'react-icons/gr';
import { aboutData as data } from "./aboutData";
import {CgQuoteO} from 'react-icons/cg'
import {RiArrowLeftSLine, RiArrowRightSLine} from 'react-icons/ri';

const AboutMe = () => {
  return (
    <section className="section">
      <div className="title">
        <h2>
          <span><GrInfo /></span> about me
        </h2>
      </div>
      <div className="section-center">{
          data.map((info) => {
            const {id, image, text} = info

            return (
              <article key={id}>
                <img src={image} alt="me" className="person-img" />
                <p className="text">
                  {text}
                </p>
                <CgQuoteO className="icon" />
              </article>
            )
          })
        }
        <button className="prev">
          <RiArrowLeftSLine />
        </button>
        <button className="next">
          <RiArrowRightSLine />
        </button>
      </div>
    </section>
  )
}

export default AboutMe