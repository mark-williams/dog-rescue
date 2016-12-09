import dogsReducer from './dogs-reducer';
import { addDog, updateDog } from '../actions/actions';

describe('dog-reducer tets', () => {
  it('Given an unsupported action returns the passed in state', () => {
    const initialState = [];
    const action = { type: 'UNSUPPORTED', value: undefined };
    const newState = dogsReducer(initialState, action);

    expect(newState).toEqual(initialState);
  });

  describe('State changes', () => {
    let initialState;

    beforeEach(() => {
      initialState = [
        { id: 1, name: 'Dog 1' },
        { id: 2, name: 'Dog 2' },
        { id: 3, name: 'Dog 3' },
        { id: 4, name: 'Dog 4' },
      ];
    });

    it('Given a new dog adds it to current state', () => {
      const newDog = { name: 'New Dog' };
      const newState = dogsReducer(initialState, addDog(newDog));

      expect(newState.length).toEqual(initialState.length + 1);
      expect(newState[4].name).toEqual(newDog.name);
      expect(newState[4].id).toEqual(5);
    });

    it('Given a dog to amend will replace appropriate item', () => {
      const amended = { id: 3, name: 'Amended', breed: 'Border Collie' };
      const newState = dogsReducer(initialState, updateDog(amended));

      expect(newState[2]).toEqual(amended);
    });
  });
});
