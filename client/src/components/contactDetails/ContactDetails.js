import React from 'react';
import './ContactDetails.css';
// import { Link } from 'react-router-dom';

//compontents

import Section from '../layout/Section';

const ContactDetails = props => {
  return (
    <Section
      title="Let's Connect"
      subtitle="Contact details"
      // dark={true}
      id="contact"
    >
      <div className="col-md-6 mx-auto">
        <ul className="list-inline">
          <li className="list-inline-item">
            <a href="mailto:">
              <i className="contactIcon fa fa-envelope-square" />
            </a>
          </li>
          <li className="list-inline-item">
            <a href="https://github.com/pmfolios">
              <i className="contactIcon fab fa-github" />
            </a>
          </li>
          <li className="list-inline-item">
            <a href="https://www.linkedin.com/in/pm121">
              <i className="contactIcon fab fa-linkedin" />
            </a>
          </li>
        </ul>
      </div>
    </Section>
  );
};

export default ContactDetails;

// {/* <p className="lead">
// // {/* <Link to='pmfolios@gmail.com'>Email</Link> */}
// </p> */}
// {/* <div className="card text-center">
// <p>Email</p>
// <p>Github</p>
// <p>Linked-In</p>
// </div> */}
