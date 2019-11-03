import React from 'react';
import { FormContainer as LoginForm } from '../../components/Form/Form';
import './style.scss';

export const LoginScreen = ({ isLoggedIn, ...other }) => {
    if (isLoggedIn) {
        return 'a';
      } else {
        return (
            <div className="login-page">
                <div> Login page </div>
                <LoginForm
                    label="Swapp"
                />
            </div>
        )
    }
};
