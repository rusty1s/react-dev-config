import React from 'react';
import { shallow, render, mount } from 'enzyme';

import App from './App';
import Title from './components/Title';

test('renders without crashing', () => {
  const app = shallow(<App />);
  expect(app.find(Title)).toHaveLength(1);
});

test('contains the right title text', () => {
  const app = render(<App />);
  console.log('render');
  console.log(app.html());
  // expect(app.text().toHaveLength(1);
});

test('contains the right title class', () => {
  const app = mount(<App />);
  console.log('mount');
  console.log(app.html());
  // expect(app.text().toHaveLength(1);
});
