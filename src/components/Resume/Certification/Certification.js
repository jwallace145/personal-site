import PropTypes from 'prop-types';
import React from 'react';

const Certifications = ({ certificates }) => (
  <div className="education">
    <div className="link-to" id="certifications" />
    <div className="title">
      <h3>Certifications</h3>
    </div>
    {certificates.map((certificate) => (
      <article className="jobs-container">
        <header>
          <h4><a href={certificate.link}>{certificate.name}</a></h4>
        </header>
        <div>
          <header>
            <h4>{certificate.issuer}</h4>
            <p className="daterange">{certificate.daterange}</p>
          </header>
          <ul className="points">
            <li key={certificate.description}>{certificate.description}</li>
          </ul>
        </div>
      </article>
    ))}
  </div>
);

Certifications.propTypes = {
  certificates: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    issuer: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    daterange: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired).isRequired,
};

export default Certifications;
