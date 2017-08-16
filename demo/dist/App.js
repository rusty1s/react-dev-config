import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React, { Component } from 'react';

import Title from './components/Title';
import Button from './components/Button';
import logo from './logo.svg';

import styles from './App.css';

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, App);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = App.__proto__ || _Object$getPrototypeOf(App)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      counter: 0
    }, _this.handleClick = function () {
      _this.setState({
        counter: _this.state.counter + 1
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(Title, { text: 'Hello, World!' }),
        React.createElement('img', { src: logo, alt: 'logo', className: styles.logo }),
        React.createElement(
          'p',
          null,
          'This is a simple, basic React demo!'
        ),
        React.createElement(Button, {
          text: 'Increment me: ' + this.state.counter,
          onClick: this.handleClick
        })
      );
    }
  }]);

  return App;
}(Component);

export default App;