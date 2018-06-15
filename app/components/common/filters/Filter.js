import React, { Component } from 'react';
import FilterControl from './FilterControl';
import FilterTitle from './FilterTitle';

class Filter extends Component {
  static Control = FilterControl
  static Title = FilterTitle

  render() {
    return (
      <div className="filter_containet">
        {this.props.children}
      </div>
    );
  }
}

export default Filter;
