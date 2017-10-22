import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import './Sets.css';

const Set = ({ id, color, date, routes }) => (
  <Link className="sets__set" key={id} to={`/set/${id}`}>
    <div className="sets__set-col sets__set-color">{color}</div>
    <div className="sets__set-col sets__set-date">{date}</div>
    <div className="sets__set-col sets__set-routes">{routes.length}</div>
  </Link>
);

class Sets extends PureComponent {
  render() {
    return (
      <div className="sets">
        {this.props.sets.map(Set)}
      </div>
    );
  }
}

export default Sets;
