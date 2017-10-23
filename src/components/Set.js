import React from 'react';
import { Link } from 'react-router-dom';

const Set = ({ id, color, date, routes }) => (
  <Link className="sets__set" key={id} to={`/set/${id}`}>
    <div className="sets__set-col sets__set-color">{color}</div>
    <div className="sets__set-col sets__set-date">{date}</div>
    <div className="sets__set-col sets__set-routes">{routes.length}</div>
  </Link>
);

export default Set;
