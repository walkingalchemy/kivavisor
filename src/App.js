import React, { Component } from 'react';
import './App.css';
import LoanSelector from './components/LoanSelector'
import LoanContainer from './components/LoanContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to KivaVisor</h1>
        </header>
        <LoanContainer />
      </div>
    );
  }
}

export default App;
