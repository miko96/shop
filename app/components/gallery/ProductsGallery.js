import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ProductsFilters from './ProductsFilters';
import ProductsList from './ProductsList';

import {
  getAllProducts,
  getProductsFilters,
} from '../../actions/productsActions';

import Gallery from './Gallery';
import GalleryItem from './GalleryItem';

class ProductsGallery extends Component {
  componentDidMount() {
    this.props.getProducts();
    this.props.getProductsFilters();
  }

  render() {
    const { filters, products } = this.props;
    return (
      <div>
        <ProductsFilters
          filters={filters}
          filtersActions={{
          }}
        />
        <ProductsList
          products={products}
        />
      </div>
    );
  }
}

ProductsGallery.propTypes = {
  products: PropTypes.array.isRequired,
  filters: PropTypes.array.isRequired,
  getProducts: PropTypes.func.isRequired,
  getProductsFilters: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    products: state.products.products,
    filters: state.products.filters,
  };
}

export default connect(mapStateToProps, {
  getProducts: getAllProducts,
  getProductsFilters,
})(ProductsGallery);
