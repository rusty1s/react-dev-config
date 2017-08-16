import _extends from 'babel-runtime/helpers/extends';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import React, { PropTypes } from 'react';

import styles from './button.css';

var Button = function Button(_ref) {
  var text = _ref.text,
      props = _objectWithoutProperties(_ref, ['text']);

  return React.createElement(
    'button',
    _extends({ className: styles.main }, props),
    text
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired
};

export default Button;