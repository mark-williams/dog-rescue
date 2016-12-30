import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Dog from './Dog';

describe('Dog tests', () => {
  const testProps = {
    name: 'Fred',
    sex: 'dog',
    breed: 'Labrador',
  };

  const setup = (props) => {
    const renderer = TestUtils.createRenderer();
    renderer.render(<Dog {...props} />);
    const output = renderer.getRenderOutput();

    return {
      props,
      output,
    };
  };


  it('renders a table row', () => {
    const { output } = setup(testProps);
    expect(output.type).toBe('tr');
  });

  it('renders name', () => {
    const { output } = setup(testProps);
    expect(output.props.children[1].type).toBe('td');
    expect(output.props.children[1].props.children.props.children).toBe(testProps.name);
  });

  it('renders sex', () => {
    const { output } = setup(testProps);
    expect(output.props.children[2].type).toBe('td');
    expect(output.props.children[2].props.children).toBe(testProps.sex);
  });

  it('renders breed', () => {
    const { output } = setup(testProps);
    expect(output.props.children[3].type).toBe('td');
    expect(output.props.children[3].props.children).toBe(testProps.breed);
  });

});
