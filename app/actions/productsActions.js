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
        'val1',
        'val2',
      ],
    },
    {
      FilterKey: 'key2',
      FilterType: 'inn',
      Options: [
        'val1',
        'val2',
      ],
    },
  ];

  dispatch({ type: 'GET_PRODUCTS_FILTERS', filters });
};
