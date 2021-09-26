import React, {useState} from 'react';
import {FaRegQuestionCircle} from 'react-icons/fa';
import Skill from './Skill';
import Experience from './Experience';

const ABitMore = () => {
  const [topic, setTopic] = useState('skill')

  return (
    <section className="section">
      <div className="title">
        <h2>
        <span><FaRegQuestionCircle /></span>a bit more about me
        </h2>
      </div>
      <div className="extras-center">
        {/* buttons */}
        <div className="btn-container">
          <button key="1" className={`extra-btn ${topic === 'skill' && 'active-btn'}`}
          onClick={() => setTopic('skill')}
          >Skills</button>
          <button key="2" className={`extra-btn ${topic === 'experience' && 'active-btn'}`}
          onClick={() => setTopic('experience')}
          >Experience</button>
        </div>
        {/* info */}
        {
          topic === 'skill' ? <Skill /> : <Experience />
        }
      </div>
    </section>
  )
}

export default ABitMore
