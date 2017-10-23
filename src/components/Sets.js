import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import Set from './Set';
import './Sets.css';

class Sets extends PureComponent {
  render() {
    return (
      <div className="sets">
        <div className="sets__set">
          <div className="sets__set-col sets__set-color"></div>
          <div className="sets__set-col sets__set-date"><strong>Date</strong></div>
          <div className="sets__set-col sets__set-routes"><strong>Routes</strong></div>
        </div>
        {this.props.sets.map(Set)}
      </div>
    );
  }
}

export default Sets;
