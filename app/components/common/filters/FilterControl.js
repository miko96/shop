import React from 'react';
import getFilterControl from './controls/getFilterControl';

const FilterControl = (props) => {
  const { inputType, ...rest } = props;
  const Control = getFilterControl(inputType);
  return (
    <div>
      <Control {...rest} />
    </div>
  );
};

export default FilterControl;
