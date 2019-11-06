import React from 'react';
import PropTypes from 'prop-types';

const NavBar = ({ logoName }) => (
    <div className="nav-bar">
        {logo &&
            <div className="logo">

                <p>{logoName}</p>
            </div>
        }
    </div>
);


NavBar.propTypes = {
  logoName: PropTypes.string,
};

NavBar.defaultProps = {
  logoName: '',
};
