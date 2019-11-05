import React from 'react';
import './style.scss';

export const Card = ({ title, image, info }) => (
  <div className="card-holder">
    <div>{title}</div>
    <img src={image} alt={image} />
    <div>
      {info}
    </div>
  </div>
);
