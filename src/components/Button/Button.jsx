import React from 'react';
import styles from './Button.module.scss';

export const Button = ({ text }) => (
  <button
    className={styles.button}
  >
    {text}
  </button>
);
