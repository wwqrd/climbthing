import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import Route from './Route';
import './Routes.css';

class Routes extends PureComponent {
  render() {
    return (
      <div className="routes">
        <div className="routes__route">
          <div className="routes__route-col routes__route-name"><strong>Name</strong></div>
          <div className="routes__route-col routes__route-attempts"><strong>Attempts</strong></div>
          <div className="routes__route-col routes__route-complete"><strong>Completed</strong></div>
        </div>
        {this.props.routes.map((route) => (
          <Route
            {...route}
            key={route.id}
            onAttempt={() => this.props.onAttempt(route.id)}
            onComplete={() => this.props.onComplete(route.id)}
          />
        ))}
      </div>
    );
  }
}

export default Routes;
