import React from 'react';
import { FormContainer as LoginForm } from '../../components/Form/Form';
import './style.scss';

const LoginScreen = ({ isLoggedIn }) => {
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

export { LoginScreen };