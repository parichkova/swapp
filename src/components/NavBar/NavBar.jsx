import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateTheme as updateThemeAction } from '../../store/actions';
import './styles.scss';
import { bindActionCreators } from 'C:/Users/Tish/AppData/Local/Microsoft/TypeScript/3.6/node_modules/redux';

export const NavBarComponent = ({ logoName, updateTheme }) => (
  <nav className="nav-bar">
    {logoName
    && (
      <div className="logo">
        <p onClick={updateTheme}>
          {logoName}
        </p>
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


NavBarComponent.propTypes = {
  logoName: PropTypes.string,
  updateTheme: PropTypes.func,
};

NavBarComponent.defaultProps = {
  logoName: '',
  updateTheme: () => {},
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  updateTheme: updateThemeAction,
}, dispatch);

export const NavBar = connect(null, mapDispatchToProps)(NavBarComponent);
