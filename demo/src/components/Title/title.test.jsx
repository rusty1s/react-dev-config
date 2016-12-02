import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import Title from './index';

test('renders without crashing', () => {
  const title = shallow(<Title>Dummy text</Title>);

  expect(title.find('h1')).toHaveLength(1);
  expect(title.hasClass('main')).toBeTruthy();
  expect(title.text()).toBe('Dummy text');
});

test('excepts only one prop type', () => {
  expect(Object.keys(Title.propTypes)).toHaveLength(1);
  expect(Title.propTypes.children).toBeDefined();
});

test('excepts only strings passed as children', () => {
  const stub = sinon.stub(console, 'error');

  shallow(<Title><span>Dummy text</span></Title>);
  expect(stub.calledOnce).toBeTruthy();

  shallow(<Title>Dummy<hr />text</Title>);
  expect(stub.calledTwice).toBeTruthy();

  shallow(<Title>Dummy text</Title>);
  expect(stub.calledTwice).toBeTruthy();

  stub.restore();
});
