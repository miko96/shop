import React from 'react';

const Checkbox = ({ options }) => (
  <div>
    {options.map(opt => (
      <div key={opt}>
        <input
        // onChange={this.handleFruitChange}
          type="checkbox"
          name={opt}
          value={opt}
        />
        {opt}
      </div>
    ))}
  </div>
);

export default Checkbox;
