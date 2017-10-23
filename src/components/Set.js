import React from 'react';
import { Link } from 'react-router-dom';
import cx from 'classnames';
import './Hold.css';

const Set = ({ id, color, date, routes }) => (
  <Link className="sets__set" key={id} to={`/set/${id}`}>
    <div className="sets__set-col sets__set-color">
      <div className={cx('color-option', `color-option--${color}`)}></div>
    </div>
    <div className="sets__set-col sets__set-date">{date}</div>
    <div className="sets__set-col sets__set-routes">{routes.length}</div>
  </Link>
);

export default Set;
