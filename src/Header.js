import React, { Component } from 'react';
import logo from './logo.svg';
import { Link } from 'react-router-dom';

class Header extends Component {
  render(){
    return(
      <div>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React Router</h2>
        </div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Team">Team</Link></li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;
