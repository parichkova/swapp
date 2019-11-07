import React from 'react';
import { connect } from 'react-redux';
import { FormContainer as LoginForm } from '../../components/Form/Form';
import { getIsLoggedIn, getError } from '../../store/reducers/login';
import './style.scss';

export const Login = ({ isLoggedIn, error, isLightTheme, history }) => {
  if (isLoggedIn) {
    history.replace('/episodes');
  }

  return (
    <div className={`login-page${isLightTheme ? '--light' : '--dark'}`}>
      <div className="login-form-wrapper">
        <LoginForm
          label="Swapp"
          error={error}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isLoggedIn: getIsLoggedIn(state),
  error: getError(state),
  isLightTheme: state.theme,
});

export const LoginScreen = connect(mapStateToProps, null)(Login);
