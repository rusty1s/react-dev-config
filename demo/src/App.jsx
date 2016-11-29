import React from 'react';

import Title from './components/Title';
import logo from './logo.svg';

import styles from './App.css';

const App = () => (
  <div>
    <Title>Hello, World!</Title>
    <img src={logo} alt="logo" className={styles.logo} />
  </div>
);

export default App;
