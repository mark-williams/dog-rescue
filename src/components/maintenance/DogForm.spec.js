import React from 'react';
import { mount } from 'enzyme';
import DogForm from './DogForm';

describe('DogForm', () => {
  describe('renders', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = mount(<DogForm />);
    });

    it('has input for name', () => {
      expect(wrapper.find('#dogName').type()).toBe('input');
      expect(wrapper.find('#dogName').prop('type')).toBe('text');
    });

    it('has input for breed', () => {
      expect(wrapper.find('#breed').type()).toBe('input');
      expect(wrapper.find('#breed').prop('type')).toBe('text');
    });

    it('has options to choose dog\'s sex', () => {
      expect(wrapper.find('Options').length).toBe(1);
    });

    it('has save button', () => {
      expect(wrapper.find('button').length).toBe(1);
    });
  });

  describe('calls onSave', () => {
    let wrapper;
    it('calls onSave when saved', () => {
      const mockHandler = jest.fn();
      wrapper = mount(<DogForm onSave={mockHandler} />);
      const saveButton = wrapper.find('button').first();
      saveButton.simulate('click');

      expect(mockHandler.mock.calls.length).toBe(1);
    });
  });
});
