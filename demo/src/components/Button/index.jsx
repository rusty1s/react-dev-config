import React, { PropTypes } from 'react';

import styles from './button.css';

const Button = ({ text, ...props }) => (
  <button className={styles.main} {...props}>{text}</button>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
