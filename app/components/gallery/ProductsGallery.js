import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ProductsFilters from '../filters/ProductsFilters';
import ProductsList from './ProductsList';

import {
  productsActions,
  productsFiltersActions,
} from '../../actions';

class ProductsGallery extends Component {
  componentDidMount() {
    this.props.getAllProducts();
    this.props.getProductsFilters();
  }

  render() {
    const {
      filters,
      products,
      searchProducts,
      setFilterValue,
    } = this.props;
    return (
      <div className="gallery_container">
        <ProductsFilters
          filters={filters}
          actions={{
            setFilterValue,
            applyFilters: searchProducts,
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
  // productsActions: PropTypes.object.isRequired,
  // productsFiltersActions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    products: state.products.products,
    filters: state.products.filters,
  };
}

export default connect(mapStateToProps, {
  ...productsActions,
  ...productsFiltersActions,
})(ProductsGallery);
