import React from 'react';
import { mount } from 'enzyme';
import { DogMaintenance } from './DogMaintenance'; // Import named export for testing purposes (the default export is the redux-connected component)

describe('DogMaintenance', () => {
  it('renders', () => {
    const mounted = mount(<DogMaintenance />);
    expect(mounted).toBeDefined();
    expect(mounted.find('DogForm').length).toBe(1);
  });
});

