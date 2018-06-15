// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';

// class Product extends Component {
//   componentDidMount() {
//     const { match: { params: { productKey } } } = this.props;
//     this.props.getProduct(productKey);
//   }

//   render() {
//     const { product } = this.props;
//     return (
//       <div>{product.name}, {product.description}</div>
//     );
//   }
// }

// Product.propTypes = {
//   getProduct: PropTypes.func.isRequired,
//   product: PropTypes.object.isRequired,
//   match: PropTypes.shape({
//     params: PropTypes.shape({
//       productKey: PropTypes.string.isRequired,
//     }).isRequired,
//   }).isRequired,
// };

// function mapStateToProps(state) {
//   return {
//     product: state.products.product,
//   };
// }

// export default connect(mapStateToProps, {
//   getProduct,
// })(Product);
