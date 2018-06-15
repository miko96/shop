import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import productsReducer from './products';
import productsFiltersReducer from './productsFilters';

export default combineReducers({
  routing: routerReducer,
  products: combineReducers({
    products: productsReducer,
    filters: productsFiltersReducer,
  }),
});
