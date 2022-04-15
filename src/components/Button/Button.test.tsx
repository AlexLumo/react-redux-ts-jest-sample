import React from 'react';
import Button from './index';
import { shallow } from 'enzyme';

describe('Text component', () => {
  it('should render link with text and link', () => {
    const wrapper = shallow(<Button cta="Click me" action="google.com" />);

    const element = wrapper.find('a');
    expect(element.text()).toEqual('Click me');
    expect(element.prop('href')).toEqual('google.com');
  });
});
