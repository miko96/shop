import React from 'react';
import PropTypes from 'prop-types';

const ProductsList = ({ products }) => (
  <div>
    {products.map((product, i) => (
      <div
        key={product.ProductKey || i}
      >
        {product.ProductKey} <br />
        {product.Name}
      </div>
    ))}
  </div>
);

ProductsList.propTypes = {
  products: PropTypes.array.isRequired,
};

export default ProductsList;
