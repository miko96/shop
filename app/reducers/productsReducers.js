export default function productsReducer(state = [], action) {
  switch (action.type) {
    case 'GET_ALL_PRODUCTS':
      return action.products;
    default:
      return state;
  }
}
