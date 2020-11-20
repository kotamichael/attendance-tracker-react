import React, { Component } from 'react';
import dotenv from  'dotenv'
import './App.css';
import UsersContainer from './components/UsersContainer';
require('dotenv').config()

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Great Heights</h1>
          <h3 className="App-title">Attendance Tracker</h3>
        </header>
        <UsersContainer />
      </div>
    );
  }
}

export default App;
