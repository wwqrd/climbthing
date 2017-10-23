import React from 'react';

const Route = ({ id, attempts, complete, onAttempt, onComplete }) => (
  <div className="route">
    <div className="route-col route-id">{id}</div>
    <div className="route-col route-attempts" onClick={onAttempt}>{attempts}</div>
    <div className="route-col route-complete" onClick={onComplete}>{complete ? 'complete' : ''}</div>
  </div>
);

export default Route;
