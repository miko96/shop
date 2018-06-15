import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = { value: props.value };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target: { value } }) {
    const { onChange } = this.props;
    this.setState({ value });
    if (onChange) {
      onChange(value);
    }
  }

  renderOptions() {
    return this.props.options.map(({ name, value }) => (
      <option key={name} value={value}>
        {name}
      </option>
    ));
  }

  render() {
    return (
      <select
        value={this.state.value}
        onChange={this.handleChange}
      >
        {this.renderOptions()}
      </select>
    );
  }
}

Dropdown.propTypes = {
  value: PropTypes.any,
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func,
};

Dropdown.defaultProps = {
  value: 'default',
  onChange: null,
};

export default Dropdown;
