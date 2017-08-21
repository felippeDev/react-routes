import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Team from './Team';
import StaffProfile from './StaffProfile';
import NotFound from './NotFound';

class Main extends Component {
  render(){
    return(
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/About" component={About}></Route>
          <Route path="/Team" component={Team}></Route>
          <Route path='/Staff/:id' component={StaffProfile}/>
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default Main;
