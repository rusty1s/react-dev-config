import _extends from 'babel-runtime/helpers/extends';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import React, { PropTypes } from 'react';

import styles from './title.css';

var Title = function Title(_ref) {
  var text = _ref.text,
      props = _objectWithoutProperties(_ref, ['text']);

  return React.createElement(
    'h1',
    _extends({ className: styles.main }, props),
    text
  );
};

Title.propTypes = {
  text: PropTypes.string.isRequired
};

export default Title;