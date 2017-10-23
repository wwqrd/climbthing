import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';
import moment from 'moment';
import { actionCreators as setActions } from '../ducks/sets';
import './Set.css';

const colorOptions = [
  'grey',
  'orange',
  'pink',
  'black',
];

class NewSet extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      saved: false,
      set: {
        color: null,
        date: moment().format('DD MM YY'),
        routes: 0,
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
    this.props.addSet({
      color: this.state.set.color,
      date: this.state.set.date,
      routes: parseInt(this.state.set.routes),
    });
    this.setState({ saved: true });
  }

  render() {
    return (
      <div className="set">
        { this.state.saved && <Redirect to="/" /> }
        <div>
          Color
          <div>
            {colorOptions.map((color) => (
              <label key={color}>
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

        <label>
          Date
          <input type="text" name="date" value={this.state.set.date} onChange={this.onChange} />
        </label>

        <label>
          Routes
          <button>-</button>
          <input type="text" name="routes" value={this.state.set.routes} onChange={this.onChange} />
          <button>+</button>
        </label>

        <button onClick={this.onSave}>Save</button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addSet: bindActionCreators(setActions.addSet, dispatch),
});

export default connect(null, mapDispatchToProps)(NewSet);
