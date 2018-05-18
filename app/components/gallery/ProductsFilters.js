import React from 'react';
import PropTypes from 'prop-types';
import {
  getFilterFactory,
  FiltersList,
} from '../common';

const ProductsFilters = ({ filters }) => (
  <FiltersList>
    {filters.map((filter) => {
      const createFilter = getFilterFactory(filter.FilterType);
      const Filter = createFilter(filter);
      return (
        <Filter
          key={filter.FilterKey}
          filter={filter}
        />);
    })}
  </FiltersList>
);

ProductsFilters.propTypes = {
  filters: PropTypes.array.isRequired,
};

export default ProductsFilters;
