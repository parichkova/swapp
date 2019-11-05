import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styles from './Form.module.scss';

import { fetchUser as fetchUserAction } from '../../store/actions/index';
import { Button } from '../Button/Button';

const Form = ({
  label, error, fetchUser,
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className={styles.form__wrapper}>
      {label
        && (
        <div className={styles.form__title}>
          {label}
        </div>
        )}
      <form
        className={styles.form}
        onSubmit={(e) => { fetchUser(e, email, password); }}
      >
        <div className={styles.form__controls_holder}>
          {error
            && (
              <div className={styles.form__error}>
                {error}
              </div>
            )}
          <div className={styles.form__controls}>
            <input
              type="text"
              value={email}
              onChange={(ev) => { setEmail(ev.target.value); }}
            />
            <input
              type="password"
              value={password}
              onChange={(ev) => { setPassword(ev.target.value); }}
            />
          </div>
          <Button text="Login" />
        </div>
      </form>
    </div>
  );
};


const mapDispatchToProps = (dispatch) => bindActionCreators({
  fetchUser: fetchUserAction,
}, dispatch);

const FormContainer = connect(
  null,
  mapDispatchToProps,
)(Form);


export { FormContainer };
