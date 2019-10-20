import React from 'react';
import { Form as LoginForm } from '../../components/Form/Form';
import './style.scss';

const LoginScreen = () => {

    return (
        <div className="login-page">
            <div> Login page </div>
            <LoginForm
                label="Swapp"
            />
        </div>
    )
};

export { LoginScreen };