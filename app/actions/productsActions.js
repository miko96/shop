import { productsApi } from '../dataAccess/api';

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

export const getProductsFilters = () => (dispatch) => {
  const filters = [
    {
      FilterKey: 'key',
      FilterType: 'in',
      Options: [
        'asd',
        'sadsad',
      ],
    },
    {
      FilterKey: 'key2',
      FilterType: 'in',
    },
  ];

  dispatch({ type: 'GET_PRODUCTS_FILTERS', filters });
};
