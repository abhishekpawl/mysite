import React from 'react';
import { expData as data } from './expData';
import SingleJob from './SingleJob';

const Experience = () => {
  return (
    <div className="extra-info">
      {
        data.map((single) => {
          return <SingleJob key={single.id} {...single} />
        })
      }
    </div>
  )
}

export default Experience
