import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Gallery from './Gallery';
import GalleryItem from './GalleryItem';
import getAllProducts from '../../actions/productsActions';

function ProductsGallery({ getProducts, productsInfo }) {
  console.log(productsInfo);
  return (
    <Gallery>
      {productsInfo.map(product => (
        <GalleryItem key={product.name} product={product} />))
      }

      <button onClick={getProducts} >
        productsActions
      </button>
    </Gallery>
  );
}

ProductsGallery.propTypes = {
  productsInfo: PropTypes.array.isRequired,
  getProducts: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    productsInfo: state.products,
  };
}

export default connect(mapStateToProps, {
  getProducts: getAllProducts,
})(ProductsGallery);
