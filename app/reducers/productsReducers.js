import { combineReducers } from 'redux';

const initState = {
  products: [],
  product: {},
};

function productsReducer(state = [], action) {
  switch (action.type) {
    case 'GET_ALL_PRODUCTS':
      return action.products;
    case 'GET_PRODUCT':
      return {
        ...state,
        product: action.product,
      };
    default:
      return state;
  }
}

function productsFilters(state = [], action) {
  switch (action.type) {
    case 'GET_PRODUCTS_FILTERS':
      return action.filters;
    default:
      return state;
  }
}

export default combineReducers({
  products: productsReducer,
  filters: productsFilters,
});
