import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Start from './components/Start';
import Set from './components/Set';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Start}/>
      <Route path="/set/:id" component={Set}/>
    </Switch>
  </Router>
);

export default Routes;
