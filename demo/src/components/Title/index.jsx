import React, { PropTypes } from 'react';

import styles from './title.css';

const Title = ({ text, ...props }) => (
  <h1 className={styles.main} {...props}>{text}</h1>
);

Title.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Title;
