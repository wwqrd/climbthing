import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { find, sortBy } from 'lodash';
import Route from '../components/Route';
import { actionCreators as setActions } from '../ducks/sets';
import './Set.css';

class EditSet extends PureComponent {
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
        Routes: {routes.length}
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  const set = find(state.sets, ['id', props.match.params.id]);

  return {
    ...set,
  };
}

const mapDispatchToProps = dispatch => ({
  updateSet: bindActionCreators(setActions.updateSet, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditSet);
