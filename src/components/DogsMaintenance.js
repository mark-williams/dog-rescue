import React from 'react';
import Dog from './Dog';

const initialState = {
  dogs: [
    { id: 1000, name: 'Chaz', acquired: new Date(2011, 1, 1), sex: 'B' },
    { id: 1001, name: 'Bert', acquired: new Date(2010, 1, 1), sex: 'D' },
    { id: 1002, name: 'Daisy', acquired: new Date(2015, 7, 1), sex: 'B' },
    { id: 1003, name: 'Luca', acquired: new Date(2014, 3, 6), sex: 'D' },
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
        <ul>
          { this.state.dogs.map(dog => (<Dog name={dog.name} />)) }
        </ul>
      </div>
    );
  }
}

export default DogsMaintenance;
