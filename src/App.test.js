import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

describe('React Step 1 Tests', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });

  const wrapper = shallow(<App />);
  it('contains a PageHeader', () => {
    expect(wrapper.find('PageHeader').length).toBe(1);
  });
});
