import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link, Redirect } from 'react-router-dom';
import { find } from 'lodash';
import cx from 'classnames';
import Routes from '../components/Routes';
import { actionCreators as setActions } from '../ducks/sets';
import './Set.css';
import '../components/Hold.css';

class Set extends PureComponent {
  constructor(props) {
    super(props);

    this.state = { deleted: false };
  }

  onAttempt = (id) => {
    this.props.attemptRoute(this.props.id, id);
  }

  onComplete = (id) => {
    this.props.completeRoute(this.props.id, id);
  }

  onDeattempt = (id) => {
    this.props.deattemptRoute(this.props.id, id);
  }

  onUncomplete = (id) => {
    this.props.uncompleteRoute(this.props.id, id);
  }

  onDeleteSet = () => {
    if(window.confirm('Are you sure?')) {
      this.props.deleteSet(this.props.id);
      this.setState({ deleted: true });
    }
  }

  render() {
    const {
      color,
      date,
      routes,
    } = this.props;

    return (
      <div className="set">
        { this.state.deleted && <Redirect to="/" /> }
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
          <Routes
            routes={routes}
            onAttempt={this.onAttempt}
            onComplete={this.onComplete}
            onDeattempt={this.onDeattempt}
            onUncomplete={this.onUncomplete}
          />
        </div>

        <button className="set__delete" onClick={this.onDeleteSet}>Delete Set</button>
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

  return {
    ...set,
  };
}

const mapDispatchToProps = dispatch => ({
  attemptRoute: bindActionCreators(setActions.attemptRoute, dispatch),
  completeRoute: bindActionCreators(setActions.completeRoute, dispatch),
  deattemptRoute: bindActionCreators(setActions.deattemptRoute, dispatch),
  uncompleteRoute: bindActionCreators(setActions.uncompleteRoute, dispatch),
  deleteSet: bindActionCreators(setActions.deleteSet, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Set);
