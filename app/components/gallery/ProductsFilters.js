import React from 'react';
import PropTypes from 'prop-types';


const ProductsFilters = ({ filters }) => (
  <div>
    {filters.map(filter => (
      <div
        key={filter.FilterKey}
      >
        {filter.FilterKey}
        {filter.FilterType}
      </div>
    ))}
  </div>
);


ProductsFilters.propTypes = {
  filters: PropTypes.array.isRequired,
};

export default ProductsFilters;
