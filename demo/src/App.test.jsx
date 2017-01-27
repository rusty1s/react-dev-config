import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

test('renders without crashing', () => {
  const app = shallow(<App title={'Hello, World!'} />);
  expect(app.find('Title')).toHaveLength(1);
  expect(app.find('img')).toHaveLength(1);
});
