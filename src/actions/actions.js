const UPDATE_DOG = 'UPDATE_DOG';
const ADD_DOG = 'ADD_DOG';

export const updateDog = dog => (
  { type: UPDATE_DOG, value: dog }
);

export const addDog = dog => (
  { type: ADD_DOG, value: dog }
);

export { UPDATE_DOG, ADD_DOG };
