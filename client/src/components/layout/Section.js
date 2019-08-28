import React from 'react';
import './Section.css';

const Section = props => {

  const { title, subtitle, id } = props;

  return (
    <div className="section">
      <div id={id} />
      <div className="text-center section-header">
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <hr />
      </div>
      <div className="container">
        <div className="row no-gutters text-center">{props.children}</div>
      </div>
    </div>
  );
};

export default Section;
