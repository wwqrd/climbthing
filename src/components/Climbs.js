import React, { PureComponent } from 'react';
import './Climbs.css';

class Climbs extends PureComponent {
  renderClimb(climb) {
    return (
      <div class="climbs__climb">
        <div class="climbs__climb-color">Color</div>
        <div class="climbs__climb-date">Date</div>
        <div class="climbs__climb-complete">Complete 4/10</div>
      </div>
    );
  }

  render() {
    const { climbs } = this.props;
    return (
      <div className="Climbs">
        { climbs.map(this.renderClimb) }
      </div>
    );
  }
}

export default Climbs;
