import React from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import { CookieHelper } from '../../helpers/Cookies';
import { getIsLoggedIn } from '../../store/reducers/login';

export const App = ({ isLoggedIn, history }) => {
  // [TODO] check whether cookie has expired

  if (isLoggedIn || CookieHelper.getCookie('token')) {
    history.replace('/episodes');
  } else {
    history.replace('/login');
  }

  return (
    <div>
      Loading...
    </div>
  );
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  history: PropTypes.shape({
    match: PropTypes.string,
    location: PropTypes.string,
  }),
};

App.defaultProps = {
  isLoggedIn: false,
  history: {},
};


const mapStateToProps = (state) => ({
  isLoggedIn: getIsLoggedIn(state),
});

export const AppInitializer = connect(mapStateToProps, null)(App);
