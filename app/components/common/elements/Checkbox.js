import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.state = { isChecked: props.isChecked };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target: { value } }) {
    const { onChange } = this.props;
    const isChecked = !this.state.isChecked;
    this.setState({ isChecked });
    if (onChange) {
      onChange({ isChecked, value });
    }
  }

  render() {
    return (
      <input
        type="checkbox"
        name={this.props.name}
        value={this.props.value}
        checked={this.state.isChecked}
        onChange={this.handleChange}
      />
    );
  }
}

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
  isChecked: PropTypes.bool,
  onChange: PropTypes.func,
};

Checkbox.defaultProps = {
  isChecked: false,
  onChange: null,
};

export default Checkbox;
