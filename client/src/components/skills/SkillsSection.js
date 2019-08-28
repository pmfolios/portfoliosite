import React, { useState } from 'react';
import { Waypoint } from 'react-waypoint';
import { animated, useSpring, config } from 'react-spring';

//compontents
import Section from '../layout/Section';
import SkillMod from './SkillMod';

const SkillsSection = () => {
  const [on, toggle] = useState(false);
  const animation = useSpring({
    opacity: on ? 1 : 0,
    transform: on ? 'translate3d(0,0,0)' : 'translate3d(0, 50%, 0)',
    config: config.molasses
  });

  return (
    <div>
      <Section title="Skills" id="skills">
        <Waypoint
          bottomOffset="30%"
          onEnter={() => {
            if (!on) toggle(true);
          }}
        />
        <animated.div style={animation}>
          <div className="row no-gutters">
            <SkillMod name="React" icon="devicon-react-original colored" />
            <SkillMod name="HTML5" icon="devicon-html5-plain colored" />
            <SkillMod name="CSS3" icon="devicon-css3-plain colored" />
            <SkillMod name="Bootstrap" icon="devicon-bootstrap-plain colored" />
            <SkillMod
              name="JavaScript"
              icon="devicon-javascript-plain colored"
            />
            <SkillMod name="Python" icon="devicon-python-plain colored" />
            <SkillMod name="Node.js" icon="devicon-nodejs-plain colored" />
            <SkillMod name="Express" icon="devicon-express-original colored" />
            <SkillMod name="MongoDB" icon="devicon-mongodb-plain colored" />
            <SkillMod name="MySQL" icon="devicon-mysql-plain colored" />
            <SkillMod name="Git" icon="devicon-git-plain colored" />
            <SkillMod name="Heroku" icon="devicon-heroku-original colored" />
          </div>
        </animated.div>
      </Section>
    </div>
  );
};

export default SkillsSection;

