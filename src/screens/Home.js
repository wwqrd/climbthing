import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Sets from '../components/Sets';
import './Home.css';

class Home extends PureComponent {
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

export default connect(mapStateToProps)(Home);
