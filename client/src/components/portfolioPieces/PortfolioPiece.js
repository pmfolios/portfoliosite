import React from 'react';
import './PortfolioPiece.css';

const PortfolioPiece = props => {
  const {
    id,
    title,
    imgSrc,
    liveSiteLink,
    gitHubLink,
    subtitle,
    technologies,
    features
  } = props;

  return (
    <div className="col-md-4">
      <div className="card mb-4 shadow-sm">

      <a href={liveSiteLink}>
          <img
            src={require(`../../img/${imgSrc}`)}
            alt="SmartList Homepage"
            className="card-img-top"
          />
        </a>
      </div>
      <div className="text-center">
        <div className={`${id} card-body`}>
          <h3 className="about-card-title card-title">{title}</h3>
          <p className="about-card-text card-text">{subtitle}</p>
          <hr className="portfolio-piece-hr" />
          <h5 className="about-card-title">Technologies:</h5>
          <p className="about-card-text card-text"> {technologies}</p>
          <h5 className="about-card-title">Features:</h5>
          <p className="about-card-text card-text">{features}</p>

          <div
            className="
          d-flex justify-content-center align-items-center btn-group
          "
          >
            <a href={gitHubLink}>
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
              >
                Github
              </button>
            </a>
            <a href={liveSiteLink}>
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
              >
                Live Site
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPiece;

