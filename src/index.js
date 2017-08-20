import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import PageOne from './PageOne';
import PageTwo from './PageTwo';
import PageThree from './PageThree';
import NotFound from './NotFound';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

ReactDOM.render(
  <Router>
    <div>
      <Switch  >
        <Route exact path="/" component={App} />
        <Route path="/PageOne" component={PageOne}></Route>
        <Route path="/PageTwo" component={PageTwo}></Route>
        <Route path="/PageThree" component={PageThree}></Route>
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>,
  document.getElementById('root'));
registerServiceWorker();
