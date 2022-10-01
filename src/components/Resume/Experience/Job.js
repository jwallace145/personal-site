import React from 'react';
import PropTypes from 'prop-types';

const Job = ({ data }) => (
  <article className="jobs-container">
    <header>
      <h4><a href={data.link}>{data.company}</a></h4>
    </header>
    {data.positions.map((position) => (
      <div>
        <header>
          <h4>{position.title}</h4>
          <p className="daterange">{position.daterange}</p>
        </header>
        <ul className="points">
          {position.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>
    ))}
  </article>
);

Job.propTypes = {
  data: PropTypes.shape({
    link: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    positions: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      daterange: PropTypes.string.isRequired,
      points: PropTypes.arrayOf(PropTypes.string).isRequired,
    })).isRequired,
  }).isRequired,
};

export default Job;
