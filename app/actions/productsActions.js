import api from '../dataAccess/api';

const getAllProducts = () =>
  async (dispatch) => {
    const products = await api.getAllProducts();
    dispatch({ type: 'GET_ALL_PRODUCTS', products });
  };

export default getAllProducts;
// const products = api.getAllProducts();
// console.log(products);
// return {
//   type: 'GET_ALL_PRODUCTS',
//   products,
// };

// export const getAllProducts = () =>
//   (dispatch) => {
//     var products = api.getAllProducts();
//     dispatch({
//       type: 'GET_ALL_PRODUCTS',
//       products
//     });
//   };
