import React, {useState} from 'react';
import {GrContactInfo} from 'react-icons/gr';
import { eduData as data } from './eduData';
import SingleEduData from './SingleEduData';

const Education = () => {
  const [eduData, setEduData] = useState(data)

  return (
    <section className="section">
      <div className="title">
        <h2>
          <span><GrContactInfo /></span>education
        </h2>
      </div>
      <section className="container">
        {
          eduData.map((singleData) => {
            return <SingleEduData key={singleData.id} {...singleData} />
          })
        }
      </section>
    </section>
  )
}

export default Education
