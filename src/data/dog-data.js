const initialState = {
  dogs: [
    { id: 1000, name: 'Chaz', acquired: new Date(2011, 1, 1), kennel: 16, sex: 'Bitch', breed: 'Mixed' },
    { id: 1001, name: 'Bert', acquired: new Date(2010, 1, 1), kennel: 19, sex: 'Dog', breed: 'Staffie' },
    { id: 1002, name: 'Ivy', acquired: new Date(2015, 7, 1), kennel: 4, sex: 'Bitch', breed: 'Border Terrier' },
    { id: 1003, name: 'Luca', acquired: new Date(2014, 3, 6), kennel: 27, sex: 'Dog', breed: 'Lurcher' },
  ],
};

const newDog = { name: '', sex: 'Dog', breed: '' };
const sexOptions = [
  { name: 'Dog', value: 'Dog' },
  { name: 'Bitch', value: 'Bitch' },
];

export { initialState, newDog, sexOptions };
