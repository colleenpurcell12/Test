
import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import Search from './Search';


describe('(Container) Search', () => {
  const wrapper = shallow(<Search />);


// 

  it('renders as a <div>', () => {
    expect(wrapper.type()).to.eql('div');
  });

  // it('has style with height 100%', () => {
  //   const expectedStyles = {
  //     height: '100%',
  //     background: '#333'
  //   }
  //   expect(wrapper.prop('style')).to.eql(expectedStyles);
  // });

  it('contains a header explaining the app', () => {
    expect(wrapper.find('#firstSearchForm')).to.have.length(2);
  });
});