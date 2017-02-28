import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

test('renders without crashing', function () {
  var app = shallow(React.createElement(App, null));
  expect(app.find('div')).toHaveLength(1);

  expect(app.find('div Title')).toHaveLength(1);
  var title = app.find('div Title').first().render();
  expect(title.text()).toBe('Hello, World!');

  expect(app.find('div img')).toHaveLength(1);
  expect(app.find('div img').first().hasClass('logo')).toBeTruthy();

  expect(app.find('div p')).toHaveLength(1);
  expect(app.find('div p').first().text()).toBe('This is a simple, basic React demo!');

  expect(app.find('div Button')).toHaveLength(1);
  var button = app.find('div Button').first().render();
  expect(button.text()).toBe('Increment me: 0');
});

test('increments when clicked', function () {
  var app = shallow(React.createElement(App, null));
  expect(app.find('Button').first().render().text()).toBe('Increment me: 0');
  app.find('Button').simulate('click');
  expect(app.find('Button').first().render().text()).toBe('Increment me: 1');
  app.find('Button').simulate('click');
  expect(app.find('Button').first().render().text()).toBe('Increment me: 2');
});