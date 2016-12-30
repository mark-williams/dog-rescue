import React from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import DogForm from './DogForm';
import { updateDog, addDog } from '../actions/actions';
import { newDog } from '../data/dog-data';

export const DogMaintenance = props => (
  <div>
    <DogForm dog={props.dog} onSave={props.onSave} />
  </div>
);

const mapStateToProps = (state, ownProps) => {
  const filtered = state.dogs.filter(dog => dog.id === parseInt(ownProps.params.id, 10));
  const selectedDog = filtered.length ? filtered[0] : newDog;
  return {
    dog: selectedDog,
  };
};

const mapDispatchToProps = dispatch => (
  {
    onSave: (dog) => {
      if (dog.id) {
        dispatch(updateDog(dog));
      } else {
        dispatch(addDog(dog));
      }
      browserHistory.push('/dogs');
    },
  }
);

DogMaintenance.propTypes = {
  dog: React.PropTypes.object,
  onSave: React.PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(DogMaintenance);

