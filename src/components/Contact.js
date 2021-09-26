import React from 'react';
import {GrContactInfo} from 'react-icons/gr';
import { contactData as data } from './contactData';

const Contact = () => {
  var temp = 1

  return (
    <section className="section">
      <div className="title">
        <h2>
          <span><GrContactInfo /></span>contact me
        </h2>
        <p style={{marginBottom: '0rem'}}>we can always catch up!</p>
        <a href="mailto: abhishek.paulcp.dbs@gmail.com">Send Email</a>
      </div>
      <section className="container">
        {
          data.map((single) => {
            temp = temp + 1

            return (
              <section key={single.id+temp} className="edu" style={{textAlign: 'center'}}>
                <h4 style={{display: 'inline-block'}}>
                  <a href={single.url}>{single.media}</a>
                  <span style={{margin: 'auto 1rem'}}>
                    {single.icon}
                  </span>
                </h4>
              </section>
            )
          })
        }
      </section>
    </section>
  )
}

export default Contact
