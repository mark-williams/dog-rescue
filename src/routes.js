import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';
import HomePage from './components/HomePage';
import DogsMaintenance from './components/maintenance/DogsMaintenance';
import DogMaintenanceContainer from './components/maintenance/DogMaintenance';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="dogs" component={DogsMaintenance} />
    <Route path="dog" component={DogMaintenanceContainer} />
    <Route path="dog/:id" component={DogMaintenanceContainer} />
    <Route path="*" component={HomePage} />
  </Route>
);
