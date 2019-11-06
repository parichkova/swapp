import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './styles.scss';

export const NavBar = ({ logoName }) => (
  <nav className="nav-bar">
    {logoName
    && (
      <div className="logo">
        <p>{logoName}</p>
      </div>
    )}
    <div className="nav-links">
      <Link
        className="link-item"
        to="/episodes"
      >
        Episodes
      </Link>
      <Link
        className="link-item"
        to="/characters"
      >
        Characters
      </Link>
    </div>
  </nav>
);


NavBar.propTypes = {
  logoName: PropTypes.string,
};

NavBar.defaultProps = {
  logoName: '',
};
