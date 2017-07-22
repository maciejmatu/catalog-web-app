/* globals describe, it */
import expect from 'expect';
import React from 'react';
import { shallow } from 'enzyme';
import AuthSceneWrapper from './';

describe('<AuthSceneWrapper />', () => {
  it('Should render single div with correct class', () => {
    const wrapper = shallow(<AuthSceneWrapper />);
    expect(wrapper.find('div').length).toBe(1);
    expect(wrapper.find('.AuthSceneWrapper').length).toBe(1);
  });

  it('Should render children when passed in', () => {
    const wrapper = shallow(
      <AuthSceneWrapper>
        <div className="uniqe" />
      </AuthSceneWrapper>);
    expect(wrapper.contains(<div className="uniqe" />)).toEqual(true);
  });
});
