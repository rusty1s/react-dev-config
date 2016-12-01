import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

test('renders without crashing', () => {
  const app = shallow(<App />);
  expect(app.find('div')).toHaveLength(1);
  expect(app.find('Title')).toHaveLength(1);
  expect(app.find('img')).toHaveLength(1);
});

test('contains the right title text', () => {
  const app = shallow(<App />);
  // const title = shallow(app.find('title'));
  // console.log('render');
  // console.log(app.html());
  // expect(app.text().toHaveLength(1);
});
