import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styles from './Form.module.scss';

import { fetchUser, fetchUser as fetchUserAction } from '../../store/actions/index';
import { getError, getUser, getPending } from '../../store/reducers/login';
import { Button } from '../Button/Button';

const Form = ({
  error, user, pending, fetchUser, label,
}) => {
  const [name, setName] = useState('');
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
        onSubmit={(e) => { fetchUser(e); }}
      >
        <div className={styles.form__controls_holder}>
          <div className={styles.form__controls}>
            <input
              type="text"
              value={name}
              onChange={(ev) => { setName(ev.target.value); }}
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

const mapStateToProps = (state) => ({
  error: getError(state),
  user: getUser(state),
  pending: getPending(state),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  fetchUser: fetchUserAction,
}, dispatch);

const FormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Form);


export { FormContainer };
