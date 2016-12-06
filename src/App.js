import React from 'react';
import 'materialize-css/dist/css/materialize.css';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';


const App = props => (
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to React Dog Rescue</h2>
    </div>
    <NavBar />
    <div className="container">
      {props.children}
    </div>
  </div>
  );

App.propTypes = {
  children: React.PropTypes.element.isRequired,
};

export default App;
