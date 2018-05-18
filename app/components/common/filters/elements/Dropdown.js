import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    const { value } = event.target;
    const { onChange } = this.props;

    if (value && onChange) {
      onChange(value);
    }
  }

  render() {
    const { options } = this.props;
    return (
      <select
        onChange={this.handleChange}
      >
        {options.map(opt => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    );
  }
}

Dropdown.propTypes = {
  options: PropTypes.array,

  onChange: PropTypes.func,
};

Dropdown.defaultProps = {
  onChange: null,
};

// <div>
//         <select
//           onClick={this.handleClick}
//         >
//           {options.map(opt => (
//             <option key={opt}>
//               {opt}
//             </option>
//         ))}
//         </select>
//         <input type="text" onChange={this.handleClick} />
//       </div>

export default Dropdown;
