import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Dog from './Dog';

describe('Dog tests', () => {
  let props = {};

  const setup = (props) => {
    const renderer = TestUtils.createRenderer();
    renderer.render(<Dog name={props.name} sex={props.sex} breed={props.breed} />);
    const output = renderer.getRenderOutput();

    return {
      props,
      output,
    };
  };

  beforeEach(() => {
    props = {
      name: 'Fred',
      sex: 'dog',
      breed: 'Labrador'
    };
  });

  it('renders a table row', () => {
    const { output } = setup(props);
    expect(output.type).toBe('tr');
  });

  it('renders name', () => {
    const { output } = setup(props);
    expect(output.props.children[1].type).toBe('td');
    expect(output.props.children[1].props.children.props.children).toBe(props.name);
  });

  it('renders sex', () => {
    const { output } = setup(props);
    expect(output.props.children[2].type).toBe('td');
    expect(output.props.children[2].props.children).toBe(props.sex);
  });

  it('renders breed', () => {
    const { output } = setup(props);
    expect(output.props.children[3].type).toBe('td');
    expect(output.props.children[3].props.children).toBe(props.breed);
  });

});
