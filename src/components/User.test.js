
import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import User from './User';

describe('Component: User ', () => {
  let wrapper = shallow(<User />);

  it('component has length', () => {
    expect(wrapper.length).toEqual(1) 
  });

  it('renders as a <div> with class user-page', () => {
    expect(wrapper.type()).toEqual('div');
  });

  it('initial value of this.state.filter (from the search box) should be empty string', () => {
    expect(wrapper.state('filter')).toEqual('');
  });
})