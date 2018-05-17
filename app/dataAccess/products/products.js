const axios = require('../common/createAxios');

function getAllProducts() {
  const url = '/products/all';
  return axios()
    .get(url)
    .then(response => response.data);
}

function getProduct(productKey) {
  const url = `/products/${productKey}`;
  return axios()
    .get(url)
    .then(response => response.data);
}

module.exports = {
  getAllProducts,
  getProduct,
};
