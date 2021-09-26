import React, {useState} from "react";
import {MdExpandLess, MdExpandMore} from 'react-icons/md';

const SingleProject = ({title, tech, text}) => {
  const [showData, setShowData] = useState(false)

  const showHandler = () => {
    setShowData(!showData)
  }

  return (
    <section className="edu">
      <header>
        <h3>{title}</h3>
        <button className="edu-btn" onClick={showHandler}>
          {showData ? <MdExpandLess></MdExpandLess> : <MdExpandMore></MdExpandMore>}
        </button>
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
          <p>
            {text}
          </p>
        </div>
      }
    </section>
  )
}

export default SingleProject