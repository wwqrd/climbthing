import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { find, sortBy } from 'lodash';
import cx from 'classnames';
import Routes from '../components/Routes';
import { actionCreators as setActions } from '../ducks/sets';
import './Set.css';
import '../components/Hold.css';

class Set extends PureComponent {
  onAttempt = (id) => {
    console.log('attempt');
    this.props.attemptRoute(this.props.id, id);
  }

  onComplete = (id) => {
    console.log('complete', this.props.id, id);
    this.props.completeRoute(this.props.id, id);
  }

  render() {
    const {
      color,
      date,
      routes,
    } = this.props;

    return (
      <div className="set">
        <Link to="/"><button>Back</button></Link>
        <div className="set__meta">
          <div className="set__meta-item">
            <strong>Hold color</strong><br /> <div className={cx('color-option', `color-option--${color}`)}></div>
          </div>
          <div className="set__meta-item">
            <strong>Date</strong><br />
            {date}
          </div>
        </div>
        <div className="set__routes">
          <Routes routes={routes} onAttempt={this.onAttempt} onComplete={this.onComplete} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  const set = find(state.sets, ['id', props.match.params.id]);

  if (!set) {
    return {
      color: null,
      date: null,
      routes: [],
    };
  }

  const routes = sortBy(set.routes, 'complete');

  return {
    ...set,
    routes,
  };
}

const mapDispatchToProps = dispatch => ({
  attemptRoute: bindActionCreators(setActions.attemptRoute, dispatch),
  completeRoute: bindActionCreators(setActions.completeRoute, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Set);
