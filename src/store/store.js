import { createStore } from 'redux';
import rootReducer from '../reducers/index';
import { initialState } from '../data/dog-data';

const store = createStore(rootReducer, initialState);

export default store;
