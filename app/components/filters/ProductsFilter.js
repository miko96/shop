import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Filter } from '../common';

class ProductsFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  handleFilterChange(value) {
    const { filterKey, actions: { setFilterValue } } = this.props;
    setFilterValue(filterKey, value);
  }

  render() {
    const {
      name,
      value,
      options,
      inputType,
    } = this.props;

    return (
      <Filter>
        <Filter.Title title={name} />
        <Filter.Control
          //value={value}
          options={options}
          inputType={inputType}
          onChange={this.handleFilterChange}
        />
      </Filter>
    );
  }
}

ProductsFilter.propTypes = {
  name: PropTypes.string,
  inputType: PropTypes.string,
  defaultValue: PropTypes.any,
  //value:
};


export default ProductsFilter;
