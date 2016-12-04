import React from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import DogForm from './DogForm';
import { updateDog } from '../actions/actions';

const DogMaintenance = props => (
  <div>
    <DogForm dog={props.dog} onSave={props.onSave}/>
  </div>
);

const mapStateToProps = (state, ownProps) => {
  const filtered = state.dogs.filter(dog => dog.id === parseInt(ownProps.params.id, 10));
  const selectedDog = filtered.length ? filtered[0] : null;
  return {
    dog: selectedDog,
  };
};

const mapDispatchToProps = dispatch => (
  {
    onSave: (dog) => {
      dispatch(updateDog(dog));
      browserHistory.push('/dogs');
    },
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(DogMaintenance);
