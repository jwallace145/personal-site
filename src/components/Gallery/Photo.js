import React from 'react';
import PropTypes from 'prop-types';

const Photo = ({ data }) => (
  <div className="cell-container">
    <article className="mini-post">
      <a href="/" className="image">
        <img src={`${process.env.PUBLIC_URL}${data.image}`} alt="alt" />
      </a>
      <div className="description">
        <p>{data.caption}</p>
      </div>
    </article>
  </div>
);

Photo.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired,
  }).isRequired,
};

export default Photo;
