import React from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import DogForm from './DogForm';
import { getSelectedDog } from '../../selectors/selectors';
import { updateDog, addDog } from '../../actions/actions';

export const DogMaintenance = props => (
  <div>
    <DogForm dog={props.dog} onSave={props.onSave} />
  </div>
);

const mapStateToProps = (state, ownProps) => {
  return {
    dog: getSelectedDog(state.dogs, parseInt(ownProps.params.id, 10)),
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

