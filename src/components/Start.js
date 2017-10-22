import React, { PureComponent } from 'react';
import Climbs from './Climbs';
import './Start.css';

class Start extends PureComponent {
  render() {
    return (
      <Climbs climbs={[]} />
    );
  }
}

export default Start;
