import React from 'react';
import './AboutDetails.css';

const AboutDetails = props => {
  const { icon, title, text } = props;

  return (
    <div className="col-sm-6">
      <div className="card text-center about-square">
        <div>
          <i className={`aboutIcon ${icon}`} />
        </div>
        <div className="card-body">
          <h5 className="about-card-title card-title">{title}</h5>
          <p className="about-card-text card-text">{text}</p>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default AboutDetails;
