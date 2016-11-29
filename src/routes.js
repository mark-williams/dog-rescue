import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';
import HomePage from './components/HomePage';
import DogsMaintenance from './components/DogsMaintenance';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="dogs" component={DogsMaintenance} />
    <Route path="*" component={HomePage} />
  </Route>
);
