
import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import Search from './Search';

describe('Component: Search', () => {
  let wrapper = shallow(<Search />);

  
  it('component has length', () => {
    expect(wrapper.length).toEqual(1) 
  });

  it('renders as a <div>', () => {
    expect(wrapper.type()).toEqual('div');
  });

  it('renders as a <div>', () => {
    expect(wrapper.contains(<button className="search-page__button">Search</button>)).toEqual(true);
  });

  it('Container div has class search-page', () => {
    expect(wrapper.find('div').at(0).hasClass('search-page')).toEqual(true);
  });

  it('Title of page is Find Repos', () => {
    expect(wrapper.find('.search-form-title').text()).toEqual('Find Repos by Github UserName')
  });

  it('contains a two forms', () => {
    expect(wrapper.find('.search-form').length).toEqual(2); //).to.have.length(2);
  });

  it('Contains 3 input fields', () => {
    expect(wrapper.find('input').length).toEqual(3);
  });

  it('Both forms have submit event handlers', () => {
    expect(wrapper.find('form').at(0).props().onSubmit);
    expect(wrapper.find('form').at(1).props().onSubmit);
  });

});
