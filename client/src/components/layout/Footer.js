import React, { Component } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

// css
import './Footer.css';

class Footer extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <div className="col-md-6 mx-auto">
        <div className="text-center">
          <ul className="list-inline">
            <li className="list-inline-item">
              <Link
                to="/"
                onClick={this.scrollToTop}
              >
                Home
              </Link>
            </li>
            <li className="list-inline-item">
              <Link
                className="nav-link"
                activeClass="active"
                to="skills"
                spy={true}
                smooth={true}
                offset={0}
                duration={1000}
              >
                Skills
              </Link>
            </li>
            <li className="list-inline-item">
              <Link
                className="nav-link"
                activeClass="active"
                to="portfolio"
                spy={true}
                smooth={true}
                offset={0}
                duration={1000}
              >
                Portfolio
              </Link>
            </li>
            <li className="list-inline-item">
              <Link
                className="nav-link"
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={0}
                duration={1000}
              >
                About
              </Link>
            </li>
            <li className="list-inline-item">
              <Link
                className="nav-link"
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={0}
                duration={1000}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Footer;
