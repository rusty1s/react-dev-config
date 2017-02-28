import React from 'react';
import { render } from 'react-dom';

import 'normalize.css';

import './globals/base.css';

import App from './App';

render(React.createElement(App, null), document.getElementById('root'));