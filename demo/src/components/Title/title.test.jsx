import React from 'react';
import { shallow } from 'enzyme';

import Title from './index';

test('renders without crashing', () => {
  const title = shallow(<Title>Dummy text</Title>);

  expect(title.find('h1')).toHaveLength(1);
  expect(title.hasClass('main')).toBeTruthy();
  expect(title.text()).toBe('Dummy text');
});

// TODO: test children for null and html elements
