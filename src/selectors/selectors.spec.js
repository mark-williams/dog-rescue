import { getSelectedDog } from './selectors';
import { newDog } from '../data/dog-data';

describe('selectors', () => {
  describe('getSelectedDog', () => {
    let dogs;

    beforeEach(() => {
      dogs = [
        { id: 100, name: 'Fred' },
        { id: 101, name: 'Sally' },
        { id: 102, name: 'Susie' },
        { id: 103, name: 'Bert' },
        { id: 104, name: 'Tess' },
      ];
    });

    it('selects required dog', () => {
      const requestedId = 102;
      const dog = getSelectedDog(dogs, requestedId);

      expect(dog.id).toBe(requestedId);
    });

    it('returns a blank dog if id not found', () => {
      const requestedId = 9999;
      const dog = getSelectedDog(dogs, requestedId);

      expect(dog).toEqual(newDog);
    });

    it('returns a blank dog if id not supplied', () => {
      const dog = getSelectedDog(dogs, undefined);

      expect(dog).toEqual(newDog);
    });
  });
});

