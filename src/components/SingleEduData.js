import React, {useState} from 'react';
import {MdExpandLess, MdExpandMore} from 'react-icons/md';

const SingleEduData = ({title, dates, texts, performance}) => {
  const [showData, setShowData] = useState(false)

  const showHandler = () => {
    setShowData(!showData)
  }

  return (
    <section className="edu">
      <header style={{display: 'flex'}}>
        <h3>{title}</h3>
        <button className="edu-btn" onClick={showHandler}>
          {showData ? <MdExpandLess></MdExpandLess> : <MdExpandMore></MdExpandMore>}
        </button>
      </header>
      {
        showData &&
        <div>
          <p>{dates}</p>
          <h4>{performance}</h4>
          <p>
            {
              texts.map((text) => {
                return <p>{text}</p>
              })
            }
          </p>
        </div>
      }
    </section>
  )
}

export default SingleEduData
