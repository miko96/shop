import { productsApi } from '../../dataAccess/api';
import format from './formatFilters';

export const getAllProducts = () =>
  async (dispatch) => {
    const PRODUCTS = [
      {
        ProductKey: 'key',
        Name: 'name',
        Descripton: 'descr',
        ImageKey: 'img',
      },
      {
        Key: 'key2',
        Name: 'name2',
        Descripton: 'descr2',
        ImageKey: 'img2',
      },
    ];

    let products;
    try {
      products = await productsApi.getAllProducts();
    } catch (ex) {
      products = PRODUCTS;
    }

    dispatch({ type: 'GET_ALL_PRODUCTS', products });
  };

export const getProduct = productId =>
  async (dispatch) => {
    const product = await productsApi.getProduct(productId);
    dispatch({ type: 'GET_PRODUCT', product });
  };

export const searchProducts = filters =>
  async (dispatch) => {
    const f = format();
    const products = await productsApi.searchProducts(f);
    dispatch({ type: 'SEARCH_PRODUCTS', products });
  };
