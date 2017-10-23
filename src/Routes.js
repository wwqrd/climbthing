import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Home from './screens/Home';
import Set from './screens/Set';
import EditSet from './screens/EditSet';
import NewSet from './screens/NewSet';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/set/new" component={NewSet}/>
      <Route path="/set/:id/edit" component={EditSet}/>
      <Route path="/set/:id" component={Set}/>
    </Switch>
  </Router>
);

export default Routes;
