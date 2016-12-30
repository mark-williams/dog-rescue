import { newDog } from '../data/dog-data';

export const getSelectedDog = (dogs, requiredId) => {
  const filtered = dogs.filter(dog => dog.id === requiredId);
  return filtered.length ? filtered[0] : newDog;
};