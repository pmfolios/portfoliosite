import React from 'react';
import './SkillMod.css';

const SkillMod = props => {
  const { name, icon } = props;

  return (
    <div className="skill col-sm-3 col-6">
      <p className="skill-card-title lead">{name}</p>
      <i className={icon} />
    </div>
  );
};

export default SkillMod;
