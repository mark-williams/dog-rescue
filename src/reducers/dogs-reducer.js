import _ from 'lodash';
import { UPDATE_DOG, ADD_DOG } from '../actions/actions';

const getNextId = (dogs) => {
  if (dogs.length === 0) {
    return 1000;
  }

  const maxDog = _.maxBy(dogs, d => (d.id));
  return maxDog.id + 1;
};

const addDog = (state, action) => {
  const newDog = Object.assign({}, action.value);
  newDog.id = getNextId(state);
  return [
    ...state,
    newDog,
  ];
};

const dogsReducer = (state = [], action) => {
  switch (action.type) {
    case UPDATE_DOG:
      return state.map(dog => (
        dog.id === action.value.id ? action.value : dog
      ));

    case ADD_DOG:
      return addDog(state, action);

    default:
      return state;
  }
};

export default dogsReducer;
