import React, { Component } from 'react';
import TeamAPI from './TeamAPI';
import { Link } from 'react-router-dom';

class Team extends Component {
  render(){
    return(
      <div>
        <h1>Team</h1>
        <p>Check our staff list bellow</p>
          <div className="teamList">
            <ul>
              {
                TeamAPI.all().map(item => (
                  <li key={item.id}>
                    <Link to={`/Staff/${item.id}`}>{item.name}</Link>
                  </li>
                ))
              }
            </ul>
        </div>
      </div>
    );
  }
}

export default Team;
