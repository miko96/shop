import React from 'react';
import './ProductView.css';

const ProductView = ({ match }) => (
  <section className="product_view_container">
    <div className="product_view_wrapper">
      {match.params.name}
    </div>
  </section>
);

export default ProductView;
