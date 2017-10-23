import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Home from './screens/Home';
import Set from './screens/Set';
import NewSet from './screens/NewSet';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Link to="/"><h1>Climbthing</h1></Link>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/set/new" component={NewSet}/>
          <Route path="/set/:id" component={Set}/>
        </Switch>
      </div>
    );
  }
}

export default App;
