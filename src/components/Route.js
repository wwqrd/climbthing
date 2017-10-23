import React from 'react';
import './Route.css';

const Route = ({ name, attempts, complete, onAttempt, onComplete }) => (
  <div className="route">
    <div className="route-col route-id">{name}</div>
    <div className="route-col route-attempts" onClick={onAttempt}>{attempts}</div>
    <div className="route-col route-complete" onClick={onComplete}>{complete ? 'complete' : ''}</div>
  </div>
);

export default Route;
