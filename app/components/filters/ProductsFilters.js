import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductsFilter from './ProductsFilter';

class ProductsFilters extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleApplyFilters = this.handleApplyFilters.bind(this);
  }

  handleApplyFilters() {
    this.props.actions.applyFilters(this.props.filters);
  }

  renderFilters() {
    return this.props.filters.map(_ => (
      <ProductsFilter
        key={_.filterKey}
        filterKey={_.filterKey}
        name={_.filterName}
        value={_.value}
        options={_.options}
        inputType={_.filterType}
        actions={this.props.actions}
      />
    ));
  }

  render() {
    return (
      <div>
        {this.renderFilters()}
        <button onClick={this.handleApplyFilters}>
          Apply filters
        </button>
      </div>
    );
  }
}

export default ProductsFilters;
