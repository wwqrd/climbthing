import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';
import moment from 'moment';
import cx from 'classnames';
import { actionCreators as setActions } from '../ducks/sets';
import './NewSet.css';
import '../components/Hold.css';

const colorOptions = [
  'grey',
  'wasp',
  'seagul',
  'watermelon',
  'orange',
  'pink',
  'purple',
  'polka',
  'yurple',
  'black',
  'white',
  'woody',
];

class NewSet extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      saved: false,
      set: {
        color: null,
        date: moment().format('Do MMM'),
        routes: null,
      }
    };
  }

  onChange = (event) => {
    const target = event.target;
    const value = target.type === 'radio' ? target.checked && target.value : target.value;
    const name = target.type === 'radio' ? target.name.slice(0, -2) : target.name;

    this.setState({
      set: {
        ...this.state.set,
        [name]: value,
      }
    });
  }

  onSave = () => {
    if (this.state.set.color === null || this.state.set.date === '' || this.state.set.routes === '') {
      this.setState({ error: 'Select a hold color, enter a set date, and number of routes.' });
      return;
    }

    this.props.addSet({
      color: this.state.set.color,
      date: this.state.set.date,
      routes: parseInt(this.state.set.routes, 10),
    });
    this.setState({ saved: true });
  }

  render() {
    return (
      <div className="new-set">
        { this.state.saved && <Redirect to="/" /> }
        { this.state.error && <div className="new-set__error">{this.state.error}</div> }
        <div className="new-set__property">
          <span className="new-set__label">Hold color</span>
          <div className="color-options">
            {colorOptions.map((color) => (
              <label
                key={color}
                className={cx('color-option', `color-option--${color}`, {'color-option--selected': (this.state.set.color === color)})}
              >
                <input
                  type="radio"
                  name="color[]"
                  checked={(this.state.set.color === color)}
                  onChange={this.onChange}
                  value={color}
                />
                {color}
              </label>
            ))}
          </div>
        </div>

        <label className="new-set__property">
          <span className="new-set__label">Date set</span>
          <input type="text" name="date" value={this.state.set.date} onChange={this.onChange} />
        </label>

        <label className="new-set__property">
          <span className="new-set__label">Number of routes</span>
          <input type="text" name="routes" value={this.state.set.routes} onChange={this.onChange} />
        </label>

        <div className="new-set__property">
          <button onClick={this.onSave}>Save set</button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addSet: bindActionCreators(setActions.addSet, dispatch),
});

export default connect(null, mapDispatchToProps)(NewSet);
