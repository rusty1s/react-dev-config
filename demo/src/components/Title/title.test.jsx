import React from 'react';
import { shallow } from 'enzyme';

import Title from './index';

test('renders without crashing', () => {
  const title = shallow(<Title text="Dummy text" />);

  expect(title.find('h1')).toHaveLength(1);
  expect(title.hasClass('main')).toBeTruthy();
  expect(title.text()).toBe('Dummy text');
});
