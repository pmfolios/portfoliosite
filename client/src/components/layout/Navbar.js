import React, { Component } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

// css
import './Navbar.css';

class Navbar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <nav
        className="
      nav-background 
      navbar 
      navbar-expand-sm 
      navbar-dark 
      //bg-dark
      mb-4"
        id="navbar"
      >
        <div className="container">
          <Link
            className="navbar-brand"
            to="/"
            onClick={this.scrollToTop}
          >
            <span className="navbar-brand-color">Paul Morgan</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="mobile-nav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
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
              <li className="nav-item">
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
              <li className="nav-item">
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
              <li className="nav-item">
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
      </nav>
    );
  }
}

export default Navbar;
