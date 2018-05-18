import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Filter from './Filter';
import Dropdown from './elements/Dropdown';

class DropdownFilter extends Component {
  constructor(props) {
    super(props);

    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  handleFilterChange(value) {
    const { filter: { FilterKey }, onChange } = this.props;

    if (onChange) {
      onChange(FilterKey, value);
    }

    console.log(FilterKey, value);
  }

  render() {
    const { filter: { Options } } = this.props;
    return (
      <Filter>
        <Dropdown
          options={Options}
          onChange={this.handleFilterChange}
        />
      </Filter>
    );
  }
}

DropdownFilter.propTypes = {
  filter: PropTypes.object.isRequired,
  onChange: PropTypes.func,
};

DropdownFilter.defaultProps = {
  onChange: null,
};

export default DropdownFilter;
