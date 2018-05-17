import React from 'react';

const Dropdown = ({ options }) => (
  <select>
    {options.map(opt => (
      <option>
        {opt}
      </option>
    ))}
  </select>
);

export default Dropdown;
