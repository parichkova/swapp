import React from 'react';
import { connect } from 'react-redux';

import { CookieHelper } from '../../helpers/Cookies';

import { getIsLoggedIn } from '../../store/reducers/login';

export const App = ({ isLoggedIn, history }) => {
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

const mapStateToProps = (state) => ({
  isLoggedIn: getIsLoggedIn(state),
});

export const AppInitializer = connect(mapStateToProps, null)(App);
