import React from 'react';
import { FormContainer as LoginForm } from '../../components/Form/Form';
import './style.scss';

export const LoginScreen = ({ isLoggedIn, ...other }) => {
  if (isLoggedIn) {
    return 'a';
  }
  return (
    <div className="login-page">
      <div> Login page </div>
      <div className="login-form-wrapper">
        <LoginForm
          label="Swapp"
        />
      </div>
    </div>
  );
};
