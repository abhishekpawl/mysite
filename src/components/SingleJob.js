import React, {useState} from 'react';
import {MdExpandLess, MdExpandMore} from 'react-icons/md';

const SingleJob = ({id, title, text, year}) => {
  const [showData, setShowData] = useState(false)

  const showHandler = () => {
    setShowData(!showData)
  }

  return (
    <div className="edu">
      <header style={{display: 'flex'}}>
        <h3 style={{color: 'var(--clr-primary-1)', backgroundColor: 'rgb(209, 207, 112)'}}>{title}</h3>
        <button className="edu-btn" onClick={showHandler}>
          {showData ? <MdExpandLess></MdExpandLess> : <MdExpandMore></MdExpandMore>}
        </button>
      </header>
      {
        showData &&
        <div>
          <p>{year}</p>
          <h4 style={{backgroundColor: 'rgb(209, 207, 112)'}}>{text}</h4>
        </div>
      }
    </div>
  )
}

export default SingleJob