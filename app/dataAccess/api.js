const axios = require('./common/createAxios');
// import config from 'APPLICATION_CONFIG';

function getAllProducts() {
  const url = '/products/all';
  return axios()
    .get(url)
    .then(response => response.data);
}


// function getAllProducts() {
//   return [
//     {
//       Name: 'Product1',
//       Description: 'Descr1',
//     },
//     {
//       Name: 'Product2',
//       Description: 'Descr2',
//     },
//     {
//       Name: 'Product3',
//       Description: 'Descr1',
//     },
//     {
//       Name: 'Product4',
//       Description: 'Descr2',
//     },
//     {
//       Name: 'Product5',
//       Description: 'Descr1',
//     },
//     {
//       Name: 'Product6',
//       Description: 'Descr2',
//     },
//   ];
// }

module.exports = {
  fetchData: url =>
    axios()
      .get(url)
      .then(response => response.data),
  getAllProducts,
};
