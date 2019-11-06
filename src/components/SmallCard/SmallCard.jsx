import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

export const SmallCard = ({ image, text }) => (
  <div className="small-card">
    <img
      src={image}
      alt={text}
    />
    <p className="small-card-text">
      {text}
    </p>
  </div>
);


SmallCard.propTypes = {
  image: PropTypes.string,
  text: PropTypes.string.isRequired,
};

SmallCard.defaultProps = {
  image: 'No image',
};
