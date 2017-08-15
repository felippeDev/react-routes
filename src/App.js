import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React Router</h2>
        </div>
        <nav>
          <ul>
            <li><Link to="/PageOne">PAGE-ONE</Link></li>
            <li><Link to="/PageTwo">PAGE-TWO</Link></li>
            <li><Link to="/PageThree">PAGE-THREE</Link></li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default App;
