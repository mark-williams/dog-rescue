import React, { Component } from 'react';
import logo from './logo.svg';
import 'materialize-css/dist/css/materialize.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React Dog Rescue</h2>
        </div>
        <div>
          {this.props.children}
        </div> 
      </div>
    );
  }
}

export default App;
