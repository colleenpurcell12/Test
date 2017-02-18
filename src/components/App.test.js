
import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import App from './App';

describe('Component: App', () => {
  let wrapper = shallow(<App />);

  it('component has length', () => {
    expect(wrapper.length).toEqual(1) 
  });

  it('renders as a <div>', () => {
    expect(wrapper.type()).toEqual('div');
  });

  it('contains a header explaining the app', () => {
    expect(wrapper.find('.main-header').length).toEqual(1);
  });

  it('contains a content div', () => {
    expect(wrapper.find('.main-content').length).toEqual(1);
  });

})



