import React from 'react';

const Dog = ({ name }) => (
  <li>{name}</li>
);

Dog.propTypes = {
  name: React.PropTypes.string,
};

export default Dog;
