import React from 'react';
import cx from 'classnames';

const Route = ({ name, attempts, complete, onAttempt, onComplete }) => (
  <div className={cx('routes__route', { 'routes__route--completed': complete })}>
    <div className="routes__route-col routes__route-name">{name}</div>
    <div
      className="routes__route-col routes__route-attempts"
      onClick={onAttempt}
    >
      {attempts}
    </div>
    <div
      className="routes__route-col routes__route-complete"
      onClick={onComplete}
    >
      {complete ? 'completed' : 'uncompleted'}
    </div>
  </div>
);

export default Route;
