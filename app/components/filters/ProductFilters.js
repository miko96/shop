import React from 'react';

import {
  Filter,
  FiltersList,
} from '../common';


function getFilter(type) {
  switch (type) {
    case 'in':
      return null;
    default:
      return null;
  }
}


const ProductFilters = () => (
  <FiltersList>
    <Filter>
      <a>filter content</a>
    </Filter>
    <Filter>
      <a>filter content</a>
    </Filter>
    <Filter>
      <a>filter content</a>
    </Filter>
    <Filter>
      <a>filter content</a>
    </Filter>
  </FiltersList>
);

export default ProductFilters;
