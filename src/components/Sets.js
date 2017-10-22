import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import './Sets.css';

const Set = ({ id, color, date, routes }) => (
  <Link to={`/set/${id}`}>
    <div className="set" key={id}>
      <div className="set-col set-color">{color}</div>
      <div className="set-col set-date">{date}</div>
      <div className="set-col set-routes">{routes.length}</div>
    </div>
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
