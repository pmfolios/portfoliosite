import React from 'react';

//compontents
import PortfolioPiece from './PortfolioPiece';

const PortfolioSection = () => {
  return (
    <div>
      <div className="text-center section-header" id="portfolio">
        <h1>Portfolio</h1>
        <hr />
      </div>
      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row">
            {/* portfolio pieces  */}

            <PortfolioPiece
              id="smartlist"
              title="SmartList"
              imgSrc="landing_smartlist2.png"
              liveSiteLink='https://grocery-app-1.herokuapp.com/'
              gitHubLink=''
              subtitle="Never worry about grocery shopping again!"
              technologies="React | Redux | Node.js | Express | MongoDB"
              features="CRUD functions | login | authentication | authorization | employment of Redux state management"
            />

            <PortfolioPiece
              id="outside"
              title="Trailhead App"
              imgSrc="landing_trailhead3.png"
              liveSiteLink='https://trailheadhike.herokuapp.com'
              gitHubLink=''
              subtitle="Find a hike, text your friends and go!"
              technologies="React | Bootstrap | Node.js | Express"
              features="Integration various browser-native and external API's for geolocation, hiking details, and directions via Google Maps"
            />
            <PortfolioPiece
              id="portfolioSite"
              title="Portfolio Site"
              imgSrc="landing_portfolio3.png"
              liveSiteLink='https://www.paulmorgan.dev/'
              gitHubLink=''
              subtitle="Portfolio Site"
              technologies="React | Sass | Bootstrap | Node.js | Express"
              features="Integration of UI features such as smooth scroll and various animation libraries such as react-spring"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioSection;
