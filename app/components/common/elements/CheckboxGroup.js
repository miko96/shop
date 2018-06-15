import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Checkbox from './Checkbox';

class CheckboxGroup extends Component {
  constructor(props) {
    super(props);
    this.state = { values: props.value };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(box) {
    const { values } = this.state;
    const { onChange } = this.props;
    const newValues = box.isChecked
      ? values.concat(box.value)
      : values.filter(value => value !== box.value);
    this.setState({ values: newValues });
    if (onChange) {
      onChange(newValues);
    }
  }

  isChecked = value => this.state.values.includes(value);

  render() {
    return (
      <div>
        {this.props.options.map(({ name, value }) => (
          <Checkbox
            key={name}
            name={name}
            value={value}
            isChecked={this.isChecked(value)}
            onChange={this.handleChange}
          />
        ))}
      </div>
    );
  }
}

CheckboxGroup.propTypes = {
  options: PropTypes.array,
  value: PropTypes.array,
  onChange: PropTypes.func,
};

CheckboxGroup.defaultProps = {
  options: [],
  value: [],
  onChange: null,
};

export default CheckboxGroup;
