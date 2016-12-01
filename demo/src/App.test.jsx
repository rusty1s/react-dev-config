import React from 'react';
import { shallow } from 'enzyme';

import App from './App';
import Title from './components/Title';

test('renders without crashing', () => {
  const app = shallow(<App />);
  expect(app.find(Title)).toHaveLength(1);
  expect(2).toBe(2);
});
