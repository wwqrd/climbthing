import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Sets from './Sets';
import './Start.css';

class Start extends PureComponent {
  render() {
    return (
      <Sets sets={this.props.sets} />
    );
  }
}

function mapStateToProps(state) {
  return {
    sets: state.sets,
  };
}

export default connect(mapStateToProps)(Start);
