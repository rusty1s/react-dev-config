import React, { Component } from 'react';

import Title from './components/Title';
import Button from './components/Button';
import logo from './logo.svg';

import styles from './App.css';

class App extends Component {
  state = {
    counter: 1,
  }

  handleClick = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  render() {
    return (
      <div className={styles.layout}>
        <Title text="Hello, World!" />
        <img src={logo} alt="logo" className={styles.logo} />
        <p>This is a simple, basic React demo!</p>
        <Button
          text={`Increment me: ${this.state.counter}`}
          onClick={this.handleClick}
        />
      </div>
    );
  }
}

export default App;
