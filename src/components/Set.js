import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { find, sortBy, reverse } from 'lodash';
import './Set.css';

const Route = ({ id, attempts, complete, onAttempt, onComplete }) => (
  <div className="route">
    <div className="route-col route-id">{id}</div>
    <div className="route-col route-attempts" onClick={onAttempt}>{attempts}</div>
    <div className="route-col route-complete" onClick={onComplete}>{complete ? 'complete' : ''}</div>
  </div>
);

class Set extends PureComponent {
  onAttempt(id) {
    console.log('attempt');
  }

  onComplete(id) {
    console.log('complete');
  }

  render() {
    const {
      color,
      date,
      routes,
    } = this.props;

    return (
      <div className="set">
        Color: {color}
        Date: {date}
        <div className="set__routes">
          {routes.map(route => (
            <Route
              key={route.id}
              {...route}
              onAttempt={() => this.onAttempt(route.id)}
              onComplete={() => this.onComplete(route.id)}
            />
          ))}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  const set = find(state.sets, ['id', props.match.params.id]);

  // naughty
  const routes = reverse(sortBy(set.routes, route => ( route.attempts - (route.complete && 9999) )));

  return {
    color: set.color,
    date: set.date,
    routes,
  };
}

export default connect(mapStateToProps)(Set);
