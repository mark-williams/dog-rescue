import { UPDATE_DOG } from '../actions/actions';

const dogsReducer = (state = [], action) => {
  switch (action.type) {
    case UPDATE_DOG:
      return state.map(dog => (
        dog.id === action.value.id ? action.value : dog
      ));

    default:
      return state;
  }
};

export default dogsReducer;
