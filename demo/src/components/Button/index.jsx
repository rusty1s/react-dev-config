import React from 'react';
import PropTypes from 'prop-types';

import styles from './button.css';

const Button = ({ text, ...props }) => (
  <button className={styles.main} {...props}>{text}</button>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
