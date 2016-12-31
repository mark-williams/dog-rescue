import React from 'react';
import { shallow } from 'enzyme';
import Dog from './Dog';

describe('Dog tests', () => {
  const testProps = {
    id: 871,
    name: 'Fred',
    sex: 'dog',
    breed: 'Labrador',
  };
  
  const setup = props => (
    shallow(<Dog {...props} />)
  );

  it('renders a table row', () => {
    const output = setup(testProps);
    expect(output.find('tr').length).toBe(1);
  });

  it('renders name', () => {
    const output = setup(testProps);
    expect(output.find('Link').at(1).childAt(0).text()).toBe(testProps.name);
  });

  it('renders sex', () => {
    const output = setup(testProps);
    expect(output.find('td').at(2).text()).toBe(testProps.sex);
  });

  it('renders breed', () => {
    const output = setup(testProps);
    expect(output.find('td').at(3).text()).toBe(testProps.breed);
  });
});
