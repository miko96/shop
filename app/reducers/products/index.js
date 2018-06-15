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

export default productsReducer;
