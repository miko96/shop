function productsFiltersReducer(state = [], action) {
  switch (action.type) {
    case 'GET_PRODUCTS_FILTERS':
      return action.filters;
    case 'SET_PRODUCT_FILTER_VALUE':
      return state.map(filter => (
        filter.filterKey === action.payload.key
          ? { ...filter, value: action.payload.value }
          : filter));
    default:
      return state;
  }
}

export default productsFiltersReducer;
