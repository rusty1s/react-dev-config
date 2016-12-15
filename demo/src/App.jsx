import React, { Component, PropTypes } from 'react';

import Title from './components/Title';
import logo from './logo.svg';

import styles from './App.css';

class App extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  }

  state = {
    counter: 1,
  }

  handleClick() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  render() {
    const { title } = this.props;
    const { counter } = this.state;

    return (
      <div>
        <Title>{title}</Title>
        <img src={logo} alt="logo" className={styles.logo} />
        <div>
          <span>{counter}</span>
          <button onClick={::this.handleClick}>Increment</button>
        </div>

      </div>
    );
  }
}

export default App;
