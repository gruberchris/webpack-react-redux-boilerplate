import React from 'react';
import { shallow } from 'enzyme';
import test from 'tape';
import App from '../../../app/components/app/app';

function setup() {
  const props = {};
  const context = {};

  return shallow(<App />);
}

test('example test 1', (t) => {
  const wrapper = setup();

  t.equal(wrapper.contains(<span>Foo</span>), false);
  //t.assert(wrapper.find('div').length, 1, 'App has a div');

  t.end();
});
