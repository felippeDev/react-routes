import React, { Component } from 'react';
import Team from './Team';
import StaffProfile from './StaffProfile';
import { Switch, Route } from 'react-router-dom';

class Staff extends Component {
  render(){
    return(
      <div>
        <Switch>
          <Route exact path='/Team' component={Team}/>
          <Route path='/Staff/:id' component={StaffProfile}/>
        </Switch>
      </div>
    );
  }
}

export default Staff;
