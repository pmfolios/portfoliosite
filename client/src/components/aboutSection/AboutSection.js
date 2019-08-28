import React from 'react';

import { Link, animateScroll as scroll } from 'react-scroll';

//compontents
import Section from '../layout/Section';
import AboutDetails from './AboutDetails';

//css
import './AboutSection.css';

const AboutSection = () => {
  const linkToPortfolioText = ' currently building ';
  const linkToContactText = ' drop me line ';

  return (
    <div>
      <Section
        title="About Me"
        subtitle=""
        id="about"
      >
        <div className="text-center">
          <p className="about-p">
            Hi I'm Paul, a{' '}
            <span className="about-full-stack">full-stack developer</span>. I
            care deeply about well crafted code, outstanding User Experience and
            learning from / adding value to the people I work with.
          </p>
          <br />
          <p className="about-p">
            From testing to animation, for me it's about delivering a high
            quality product.
          </p>
          <br />
          <p className="about-p">
            I'm passionate about web development and it's future. Feel free to
            take a look at what I'm
            <Link
              activeClass="active"
              to="portfolio"
              spy={true}
              smooth={true}
              offset={0}
              duration={1000}
            >
              <span className="about-links">{linkToPortfolioText}</span>
            </Link>
            or
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={0}
              duration={1000}
            >
              <span className="about-links">{linkToContactText}</span>
            </Link>
            - I'd love to connect.
          </p>
        </div>
        <AboutDetails
          icon="far fa-chart-bar"
          title="Data Analysis"
          text="Strong skills in data analysis and its place in driving excellent user experiences"
        />
        <AboutDetails
          icon="fas fa-industry"
          title="Understand Business Context"
          text="Can add value by focusing on architecting excellent products that tie clean code, excellent user experience and deliver business value"
        />
        <AboutDetails
          icon="fas fa-sitemap"
          title="Organized & Communicate Clearly"
          text="Pride myself on being results oriented, collaborative, cross-functional and easy to work with"
        />
        <AboutDetails
          icon="fas fa-users"
          title="User Focused"
          text="Passionate about development and pair that with a strong understanding on how to deliver quality User Experiences"
        />
      </Section>
    </div>
  );
};

export default AboutSection;
