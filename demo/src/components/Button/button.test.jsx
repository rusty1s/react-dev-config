import React from 'react';
import { shallow } from 'enzyme';

import Button from './index';

test('renders without crashing', () => {
  const button = shallow(<Button text="Dummy text" />);

  expect(button.find('button')).toHaveLength(1);
  expect(button.hasClass('main')).toBeTruthy();
  expect(button.text()).toBe('Dummy text');
});
