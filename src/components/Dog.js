import React from 'react';
import { Link } from 'react-router';

const Dog = ({ id, name, sex, breed }) => (
  <tr>
    <td><Link to="/">{id}</Link></td>
    <td><Link to="/">{name}</Link></td>
    <td>{sex}</td>
    <td>{breed}</td>
  </tr>
);

Dog.propTypes = {
  id: React.PropTypes.number,
  name: React.PropTypes.string,
  sex: React.PropTypes.string,
};

export default Dog;
