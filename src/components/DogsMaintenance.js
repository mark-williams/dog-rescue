import React from 'react';
import Dog from './Dog';

const initialState = {
  dogs: [
    { id: 1000, name: 'Chaz', acquired: new Date(2011, 1, 1), sex: 'Bitch', breed: 'Mixed' },
    { id: 1001, name: 'Bert', acquired: new Date(2010, 1, 1), sex: 'Dog', breed: 'Staffie' },
    { id: 1002, name: 'Daisy', acquired: new Date(2015, 7, 1), sex: 'Bitch', breed: 'Jack Russell' },
    { id: 1003, name: 'Luca', acquired: new Date(2014, 3, 6), sex: 'Dog', breed: 'Lurcher' },
  ],
};

class DogsMaintenance extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  render() {
    return (
      <div>
        <h4>Dog Maintenance</h4>
        <table className="highlight">
          <thead>
            <tr>
              <th className="maintenance-table__col--small">&nbsp;</th>
              <th>Name</th>
              <th>Sex</th>
              <th>Breed</th>
            </tr>
          </thead>
          <tbody>
            { this.state.dogs.map(dog => (<Dog key={dog.id} {...dog} />)) }
          </tbody>
        </table>
      </div>
    );
  }
}

export default DogsMaintenance;
