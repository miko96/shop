export const getProductsFilters = () => (dispatch) => {
  const filters = [
    {
      filterKey: 'key',
      filterName: 'color',
      filterType: 'in',
      value: null,
      options: [
        { name: 'okey1', value: 'oval1' },
        { name: 'okey2', value: 'oval2' },
      ],
    },
    {
      filterKey: 'key2',
      filterName: 'size',
      filterType: 'inn',
      value: null,
      options: [
        { name: 'okey3', value: 'oval3' },
        { name: 'okey4', value: 'oval4' },
      ],
    },
    {
      filterKey: 'key3',
      filterName: 'price',
      filterType: 'inn',
      value: null,
      options: [
        { name: 'okey5', value: 'oval5' },
        { name: 'okey6', value: 'oval6' },
      ],
    },
  ];

  dispatch({ type: 'GET_PRODUCTS_FILTERS', filters });
};

export const setFilterValue = (key, value) => (dispatch) => {
  dispatch({
    type: 'SET_PRODUCT_FILTER_VALUE',
    payload: { key, value },
  });
};
