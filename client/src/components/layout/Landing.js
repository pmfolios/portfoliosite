import React, { Component } from 'react';
import Typist from 'react-typist';
import {
  Link
} from 'react-scroll';

//css
import './Landing.css';
import '../../Cursor.scss';

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lineOneDone: false,
      lineTwoDone: false,
      lineThreeDone: false,
      lineFourDone: false,
      lineFiveDone: false
    }
  }
  

  lineOneDoneUpdate = () => {
    this.setState({lineOneDone: true})
  }

  lineTwoDoneUpdate = () => {
    this.setState({lineTwoDone: true})
  }

  lineThreeDoneUpdate = () => {
    this.setState({lineThreeDone: true})
  }

  lineFourDoneUpdate = () => {
    this.setState({lineFourDone: true})
  }

  render() {
    let hide2 = this.state.lineTwoDone ? 'hide' : 'not-hidden';
    let hide3 = this.state.lineThreeDone ? 'hide' : 'not-hidden';

    return (
      <div className="landing">

        <div class='landing-design-begin'>{'<html>'}</div>

        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
              <div className="animation-container">
                <h2 className="display-4 md-4">
                  
                  {/* Line One */}
                  <Typist 
                  avgTypingDelay={100}
                  onTypingDone={this.lineOneDoneUpdate}
                  cursor={{ hideWhenDone: true }}
                  >
                    <span 
                    >Hi, I'm  <span className='landing-blue'> Paul.
                      </span>
                    </span>
                    <Typist.Delay ms={1500} />
                    </Typist>

                {/* Line Two */}
                {
                  this.state.lineOneDone ? (
                    <div 
                  className={hide2}
                  >
                    <Typist
                    avgTypingDelay={100}
                    onTypingDone={this.lineTwoDoneUpdate}
                    >
                    I'm a <span className='landing-red'>full-stack</span> web developer.
                    <Typist.Delay ms={1500} />
                    </Typist>
                  </div>
                  ) : null
                }

                {/* Line Three */}
                {
                  this.state.lineTwoDone ? (
                  <div
                  className={hide3}
                  >
                    <Typist
                    avgTypingDelay={100}
                    onTypingDone={this.lineThreeDoneUpdate}
                    >   
                    I <span className='landing-red'> care about</span> clean and performant <span className='landing-red'>code.</span>
                    <Typist.Delay ms={1500} />
                    </Typist>
                  </div>
                  ) : null
                }

                {/* Line Four */}
                {
                  this.state.lineThreeDone ? (
                  <div
                  >
                    <Typist
                    avgTypingDelay={100}
                    onTypingDone={this.lineFourDoneUpdate}
                    cursor={{ hideWhenDone: true }}
                    >
                     I am <span className='landing-red'>passionate </span> about <span className='landing-red'>user centered design.</span>
                    <Typist.Delay ms={1500} />
                    </Typist>
                  </div>
                  ) : null
                }
                
                </h2>
                
                </div>
                <hr />
                
                {/* Line Five */}
                 {
                  this.state.lineFourDone ? (
                    <div>
                      <h3 className='call-to-action'>
                        <Typist
                        avgTypingDelay={100}
                        cursor={{ hideWhenDone: true }}
                        >
                        <span className='landing-blue'>Let me show you</span>
                        </Typist>
                      </h3>

                    <div className="btn-div">
                      <Link
                      className="btn 
                      landing-btn
                      "
                      activeClass="active"
                      to="skills"
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={1000}
                      isDynamic={true}
                      >
                      <i
                        className="
                      fa fa-angle-down 
                      fa-fw
                      "
                      />
                      </Link>
                      </div>
                    </div>
                  ) : null
                }

              </div>
            </div>
          </div>
        </div>

        <div class='landing-design-end'>{'</html>'}</div>
      </div>
    );
  }
}

export default Landing;


